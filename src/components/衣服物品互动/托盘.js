import { monadic } from "@mod-utils/monadic";
import { ActivityManager } from "../../activityForward";

import { DynImageProviders } from "../../dynamicImage";
import { Prereqs } from "../../prereqs";
import { findCharacter } from "../../utils";

/**
 * @typedef { "曲奇" | "饮料" } ContentsType
 */

/**
 * @typedef { Omit<Item,"Asset"> & { IAsset?: string} } ContentData
 */

/**
 * @typedef { { Luzi_InventoryContent: ContentData[], Luzi_InventoryType?: ContentsType } } TrayData
 */

/**
 * @typedef { globalThis.ItemProperties & TrayData } ExtendItemProperties
 */

const placebleItem = ["曲奇", "杯饮"];

/** @type {Record<string, ContentsType>} */
const targetType = { 曲奇: "曲奇", 杯饮: "饮料" };

const maxv = { 曲奇: 12, 饮料: 4 };

const drinkType = ["空杯", "橙汁", "可乐", "牛奶"];

/** @type {CustomActivity[]} */
const activities = [
    {
        activity: {
            Name: "托盘放物品",
            Prerequisite: [
                "UseHands",
                Prereqs.Acting.GroupIs("ItemHandheld", placebleItem),
                Prereqs.Acted.TargetGroupIs(["托盘"]),
                (_1, acting, acted, group) => {
                    const trayItem = InventoryGet(acted, group.Name);
                    if (trayItem.Asset.Name !== "托盘" || !trayItem.Property) return false;

                    const handItem = InventoryGet(acting, "ItemHandheld");
                    if (!targetType[handItem.Asset.Name]) return false;

                    const props = /** @type {ExtendItemProperties} */ (trayItem.Property);
                    if (props.Luzi_InventoryType && targetType[handItem.Asset.Name] !== props.Luzi_InventoryType)
                        return false;

                    if (handItem.Asset.Name === "杯饮")
                        return props.Luzi_InventoryContent.filter((it) => it.IAsset).length < maxv.饮料;
                    if (handItem.Asset.Name === "曲奇") return props.Luzi_InventoryContent.length < maxv.曲奇;

                    return true;
                },
            ],
            MaxProgress: 0,
            Target: ["ItemTorso"],
            TargetSelf: true,
        },
        run: async (player, sender, { SourceCharacter, TargetCharacter, ActivityGroup }) => {
            if (SourceCharacter === player.MemberNumber) {
                findCharacter("TargetC", TargetCharacter)
                    .then("trayItem", (target) => InventoryGet(target, ActivityGroup.Name))
                    .then("handItem", () => InventoryGet(player, "ItemHandheld"))
                    .then((_, { handItem, trayItem, TargetC }) => {
                        const props = /** @type {ExtendItemProperties} */ (trayItem.Property);
                        props.Luzi_InventoryType = targetType[handItem.Asset.Name];
                        props.Luzi_InventoryContent ??= [];

                        const content = { ...handItem };
                        delete content.Asset;

                        if (handItem.Asset.Name === "杯饮") {
                            const drinkTypeNum = handItem.Property?.TypeRecord?.["typed"];
                            if (!drinkTypeNum) return;

                            const value = /** @type {ContentData} */ ({ ...content, IAsset: drinkType[drinkTypeNum] });
                            const empty = props.Luzi_InventoryContent.findIndex((it) => !it.IAsset);
                            if (empty >= 0) props.Luzi_InventoryContent[empty] = value;
                            else props.Luzi_InventoryContent.push(value);
                        } else if (handItem.Asset.Name === "曲奇") {
                            const value = /** @type {ContentData} */ ({ IAsset: "曲奇", ...content });
                            props.Luzi_InventoryContent.push(value);
                        }

                        InventoryRemove(player, "ItemHandheld");

                        ChatRoomCharacterUpdate(player);
                        ChatRoomCharacterItemUpdate(TargetC, ActivityGroup.Name);
                        CharacterRefresh(player);
                    });
            }
        },
        useImage: DynImageProviders.itemOnActingGroup("ItemHandheld"),
        item: (player) => InventoryGet(player, "ItemHandheld"),
        label: {
            CN: "放到托盘上",
            EN: "Put on the tray",
        },
        dialog: {
            CN: "SourceCharacter将ActivityAsset放到DestinationCharacter托盘上.",
            EN: "SourceCharacter puts ActivityAsset on DestinationCharacter tray.",
        },
    },
    {
        activity: {
            Name: "托盘拿物品",
            Prerequisite: [
                "UseHands",
                Prereqs.Acting.GroupEmpty("ItemHandheld"),
                Prereqs.Acted.TargetGroupIs(["托盘"]),
                (_1, _2, acted, group) => {
                    const trayItem = InventoryGet(acted, group.Name);
                    if (trayItem.Asset.Name !== "托盘" || !trayItem.Property) return false;

                    const props = /** @type {ExtendItemProperties} */ (trayItem.Property);
                    if (props.Luzi_InventoryType === "饮料")
                        return props.Luzi_InventoryContent.filter((it) => it.IAsset).length > 0;
                    else if (props.Luzi_InventoryType === "曲奇") return props.Luzi_InventoryContent.length > 0;
                    else return false;
                },
            ],
            MaxProgress: 0,
            Target: ["ItemTorso"],
            TargetSelf: true,
        },
        run: async (player, sender, { SourceCharacter, TargetCharacter, ActivityGroup }) => {
            if (SourceCharacter === player.MemberNumber) {
                findCharacter("TargetC", TargetCharacter)
                    .then("trayItem", (target) => InventoryGet(target, ActivityGroup.Name))
                    .then((item) => /**@type {ExtendItemProperties}*/ (item.Property)?.Luzi_InventoryType)
                    .then((type, { trayItem, TargetC }) => {
                        const props = /** @type {ExtendItemProperties} */ (trayItem.Property);
                        props.Luzi_InventoryContent ??= [];

                        if (type === "饮料") {
                            const validTarget = props.Luzi_InventoryContent.filter((it) => it.IAsset);
                            const target = Math.floor(Math.random() * validTarget.length);
                            const value = validTarget[target];

                            const idx = props.Luzi_InventoryContent.indexOf(value);
                            props.Luzi_InventoryContent[idx] = {};

                            const item = InventoryWear(player, "杯饮", "ItemHandheld");
                            if (!item) return undefined;
                            Object.assign(item, { ...value, IAsset: undefined, Asset: item.Asset });
                            const typed = drinkType.indexOf(value.IAsset);
                            if (typed < 0) return undefined;
                            item.Property ??= {};
                            ExtendedItemSetOptionByRecord(player, item, { typed });
                        } else if (type === "曲奇") {
                            const target = Math.floor(Math.random() * props.Luzi_InventoryContent.length);
                            const value = props.Luzi_InventoryContent.splice(target, 1)[0];

                            const item = InventoryWear(player, "曲奇", "ItemHandheld");
                            if (!item) return undefined;
                            Object.assign(item, { ...value, IAsset: undefined, Asset: item.Asset });
                        }
                    })
                    .then((_, { TargetC }) => {
                        ChatRoomCharacterItemUpdate(player, "ItemHandheld");
                        ChatRoomCharacterItemUpdate(TargetC, ActivityGroup.Name);
                        CharacterRefresh(player);
                    });
            }
        },
        useImage: DynImageProviders.itemOnActedTargetGroup(),
        item: (_, acted, targetGroup) =>
            monadic(InventoryGet(acted, targetGroup.Name))
                .then((item) => /**@type {ExtendItemProperties}*/ (item.Property)?.Luzi_InventoryType)
                .then((type) => AssetGet("Female3DCG", "ItemHandheld", type === "饮料" ? "杯饮" : "曲奇"))
                .then((asset) => /**@type {Item}*/ ({ Asset: asset }))
                .valueOr(undefined),
        label: {
            CN: "从托盘上拿",
            EN: "Take from the tray",
        },
        dialog: {
            CN: "SourceCharacter从DestinationCharacter托盘上拿走了ActivityAsset.",
            EN: "SourceCharacter takes ActivityAsset from DestinationCharacter tray.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivity(activities);
}
