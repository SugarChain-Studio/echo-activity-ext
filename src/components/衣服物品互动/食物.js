import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../prereqs";
import { DynImageProviders } from "../../dynamicImage";
import { playerStomach } from "./foodValue";
import { findCharacter } from "../../utils";

const stomachValueSetting = {
    棒棒糖_Luzi: 0.1,
    烤鱼_Luzi: 0.5,
    鸡腿_Luzi: 0.6,
    煎包_Luzi: 0.4,
    蛋糕卷_Luzi: 0.8,
    吐司: 0.3,
    曲奇: 0.1,
    蛋挞: 0.2,
    月饼: 0.2,
};

function eat(assetName) {
    const value = stomachValueSetting[assetName];
    if (value) {
        playerStomach.eat(value);
    }
}

/** @type {CustomActivity[]} */
const activity = [
    {
        activity: {
            Name: `咬走食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                Prereqs.Acting.GroupEmpty(["ItemMouth"]),
                Prereqs.Acted.GroupIs("ItemMouth", Object.keys(stomachValueSetting)),
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActedGroup("ItemMouth"),
        run: (player, sender, { SourceCharacter, TargetCharacter }) => {
            if (SourceCharacter === player.MemberNumber) {
                findCharacter("TargetC", TargetCharacter)
                    .then("MouthItem", (target) => InventoryGet(target, "ItemMouth"))
                    .then((item) => InventoryWear(player, item.Asset.Name, "ItemMouth"))
                    .then((item, { TargetC, MouthItem }) => {
                        InventoryRemove(TargetC, "ItemMouth");
                        Object.assign(item, MouthItem);
                        ChatRoomCharacterItemUpdate(TargetC, "ItemMouth");
                        ChatRoomCharacterItemUpdate(player, "ItemMouth");
                    });
            }
        },
        item: (_, acted) => InventoryGet(acted, "ItemMouth"),
        label: {
            CN: "咬走",
            EN: "Bite off",
        },
        dialog: {
            CN: "SourceCharacter从TargetCharacter嘴里咬走ActivityAsset.",
            EN: "SourceCharacter bites off ActivityAsset from DestinationCharacter mouth.",
        },
    },
    {
        activity: {
            Name: `吃掉嘴里食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                () => playerStomach.canEat(),
                Prereqs.not(Prereqs.Acting.GroupIs("动物身体_Luzi", ["幽灵人形_Luzi"])), // 不允许幽灵人形吃东西
                Prereqs.Acting.GroupIs("ItemMouth", Object.keys(stomachValueSetting)),
            ],
            MaxProgress: 0,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActedGroup("ItemMouth"),
        mode: "SelfOnSelf",
        run: (player) => {
            const item = InventoryGet(player, "ItemMouth");
            if (!item) return;
            eat(item.Asset.Name);
            InventoryRemove(player, "ItemMouth");
            ChatRoomCharacterItemUpdate(player, "ItemMouth");
        },
        item: (player) => InventoryGet(player, "ItemMouth"),
        label: {
            CN: "吃掉食物",
            EN: "Eat Food",
        },
        dialog: {
            CN: "SourceCharacter将塞在嘴里的ActivityAsset吃掉了.",
            EN: "SourceCharacter eats the ActivityAsset that was stuffed in the mouth.",
        },
    },
    {
        activity: {
            Name: `吃不下嘴里食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                () => !playerStomach.canEat(),
                Prereqs.Acting.GroupIs("ItemMouth", Object.keys(stomachValueSetting)),
            ],
            MaxProgress: 0,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActedGroup("ItemMouth"),
        item: (player) => InventoryGet(player, "ItemMouth"),
        label: {
            CN: "吃掉食物",
            EN: "Eat Food",
        },
        dialog: {
            CN: "SourceCharacter因为肚子太饱，吃不下嘴里的ActivityAsset.",
            EN: "SourceCharacter is too full to eat the ActivityAsset in the mouth.",
        },
    },
    {
        activity: {
            Name: `塞食物_Luzi`,
            Prerequisite: [
                Prereqs.Acted.GroupEmpty(["ItemMouth"]),
                Prereqs.Acting.GroupIs("ItemHandheld", Object.keys(stomachValueSetting)),
                (_1, acting, _2, _3) => {
                    const item = InventoryGet(acting, "ItemHandheld");
                    return !!AssetGet("Female3DCG", "ItemMouth", item.Asset.Name);
                },
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: DynImageProviders.itemOnActingGroup("ItemHandheld"),
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const heldItem = InventoryGet(player, "ItemHandheld");
                if (!heldItem) return;

                const asset = AssetGet("Female3DCG", "ItemMouth", heldItem.Asset.Name);
                if (!asset) return;

                // 获取 TargetCharacter 玩家信息
                const target = ChatRoomCharacter.find((obj) => obj.MemberNumber === info.TargetCharacter);
                if (!target) return;

                // 给棒棒糖
                InventoryWear(target, heldItem.Asset.Name, info.ActivityGroup.Name);
                InventoryRemove(player, "ItemHandheld");

                // 更新外观
                ChatRoomCharacterItemUpdate(target, info.ActivityGroup.Name);
                ChatRoomCharacterItemUpdate(player, "ItemHandheld");
                CharacterRefresh(player, true);
            }
        },
        item: (actor) => InventoryGet(actor, "ItemHandheld"),
        label: {
            CN: "塞食物",
            EN: "Stuff with Food",
        },
        dialog: {
            CN: "SourceCharacter将手里的ActivityAsset塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter stuffs DestinationCharacter mouth with ActivityAsset.",
        },
    },
    {
        activity: {
            Name: `用嘴喂食物`,
            Prerequisite: [
                "UseMouth",
                Prereqs.Acted.GroupEmpty(["ItemMouth"]),
                Prereqs.Acting.GroupIs("ItemMouth", Object.keys(stomachValueSetting)),
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActingGroup("ItemMouth"),
        run: (player, sender, { SourceCharacter, TargetCharacter }) => {
            if (SourceCharacter === player.MemberNumber) {
                findCharacter("TargetC", TargetCharacter)
                    .then("MouthItem", () => InventoryGet(player, "ItemMouth"))
                    .then((item, { TargetC }) => InventoryWear(TargetC, item.Asset.Name, "ItemMouth"))
                    .then((item, { MouthItem }) => Object.assign(item, MouthItem))
                    .then((_, { TargetC }) => {
                        InventoryRemove(player, "ItemMouth");
                        ChatRoomCharacterItemUpdate(TargetC, "ItemMouth");
                        ChatRoomCharacterItemUpdate(player, "ItemMouth");
                    });
            }
        },
        item: () => InventoryGet(Player, "ItemMouth"),
        label: {
            CN: "用嘴喂食",
            EN: "Feed with Mouth",
        },
        dialog: {
            CN: "SourceCharacter用嘴将ActivityAsset喂到TargetCharacter嘴里。",
            EN: "SourceCharacter feeds ActivityAsset to TargetCharacter with mouth.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivity(activity);
}
