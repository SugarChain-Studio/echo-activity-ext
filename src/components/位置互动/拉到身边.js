import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";
import { Path } from "../../resouce";
import { DrawMods, SharedCenterModifier } from "./drawMods";
import { Prereqs } from "../../prereqs";
import { monadic } from "@mod-utils/monadic";

const items = [
    { prev: "CollarLeash", next: "拉紧的牵绳_Luzi" },
    { prev: "ChainLeash", next: "拉紧的链子_Luzi" },
];

const itemMap = Object.fromEntries(items.map((i) => [i.prev, i.next]));

/**@type {AssetGroupItemName[]}*/
const nItemGroups = ["ItemMisc", "ItemHandheld"];

/** @type { CustomActivity} */
const activity = {
    activity: {
        Name: "拉到身边",
        Prerequisite: [
            (_, acted, acting, _2) =>
                ChatRoomLeashList.includes(acted.MemberNumber) || ChatRoomCanBeLeashedBy(acted.MemberNumber, acting),
            Prereqs.any(
                ...items.flatMap((i) =>
                    nItemGroups.flatMap((group) => [
                        Prereqs.all(
                            Prereqs.Acted.GroupIs("ItemNeckRestraints", i.prev),
                            () => !!AssetGet("Female3DCG", group, i.next),
                            Prereqs.Acting.GroupEmpty(group)
                        ),
                        Prereqs.all(
                            Prereqs.Acted.GroupIs("ItemNeckRestraints", i.prev),
                            () => !!AssetGet("Female3DCG", group, i.next),
                            Prereqs.Acting.GroupIs(group, i.next)
                        ),
                    ])
                )
            ),
        ],
        MaxProgress: 0,
        Target: ["ItemTorso", "ItemNeckRestraints", "ItemNeck"],
    },
    run: (player, sender, { TargetCharacter, SourceCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;

            const group = "ItemNeckRestraints";
            monadic(
                "SourceC",
                ChatRoomCharacter.find((C) => C.MemberNumber === SourceCharacter)
            )
                .then(() => InventoryGet(player, group))
                .then((item, { SourceC }) => {
                    ChatRoomOrder.setDrawOrder({
                        nextCharacter: SourceC.MemberNumber,
                        associatedAsset: { group, asset: item.Asset.Name },
                    });
                    ChatRoomLeashPlayer = SourceC.MemberNumber;
                    CharacterRefreshLeash(Player);
                });
        } else if (SourceCharacter === player.MemberNumber) {
            monadic(
                "TargetC",
                ChatRoomCharacter.find((C) => C.MemberNumber === TargetCharacter)
            )
                .then((target) => InventoryGet(target, "ItemNeckRestraints"))
                .then((item) => itemMap[item.Asset.Name])
                .then(
                    (itemName) =>
                        AssetGet("Female3DCG", "ItemMisc", itemName) ?? AssetGet("Female3DCG", "ItemHandheld", itemName)
                )
                .then((asset, { TargetC }) => {
                    const group = /** @type {AssetGroupItemName}*/ (asset.Group.Name);
                    InventoryWear(player, asset.Name, group);
                    ChatRoomCharacterItemUpdate(player, group);
                    ChatRoomOrder.setDrawOrder({
                        prevCharacter: TargetC.MemberNumber,
                        associatedAsset: { group, asset: asset.Name },
                    });
                    if (!ChatRoomLeashList.includes(TargetC.MemberNumber)) ChatRoomLeashList.push(TargetC.MemberNumber);
                });
        }
    },
    useImage: Path.resolve("activities/pull_to_side.png"),
    label: {
        CN: "拉到身边",
        EN: "Pull to One's Side",
        RU: "Притащить к себе",
        UA: "Притягнути до себе",
    },
    dialog: {
        CN: "SourceCharacter将TargetCharacter拉到身边.",
        EN: "SourceCharacter pulls TargetCharacter to PronounPossessive side.",
        RU: "SourceCharacter притаскивает TargetCharacter к себе.",
        UA: "SourceCharacter притягує TargetCharacter ближче до себе.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, (_, { sharedC, initState, C }) => {
            const { Zoom } = initState;
            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                return {
                    X: sharedC.center.X - 75 * Zoom,
                    Y: sharedC.center.Y,
                    Zoom,
                };
            }
            if (sharedC.next.MemberNumber === C.MemberNumber) {
                return { X: sharedC.center.X + 75 * Zoom, Y: sharedC.center.Y, Zoom };
            }
        })
    );
}
