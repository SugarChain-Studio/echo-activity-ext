import { ActivityManager } from "../../activityForward";
import { Path } from "../../resouce";
import { DrawMods, SharedCenterModifier } from "./drawMods";
import { Prereqs } from "../../prereqs";
import { findCharacter, leashPlayer, leashTarget, wearAndPair } from "../../utils";
import { monadic } from "@mod-utils/monadic";

const items = [
    { prev: "CollarLeash", next: "拉紧的牵绳_Luzi" },
    { prev: "ChainLeash", next: "拉紧的链子_Luzi" },
];

const itemMap = Object.fromEntries(items.map((i) => [i.prev, i.next]));

/** @type {AssetGroupItemName[]} */
const pairiGroups = ["ItemMisc", "ItemHandheld"];

/** @type { CustomActivity} */
const activity = {
    activity: {
        Name: "拉到身边",
        Prerequisite: [
            "UseHands",
            "Luzi_TargetLeashedOrCanBeLeashed",
            Prereqs.any(
                ...pairiGroups.flatMap((group) =>
                    items.flatMap((i) => [
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
            findCharacter("SourceC", SourceCharacter)
                .then(() => InventoryGet(player, group))
                .then((item, { SourceC }) => {
                    wearAndPair(player, item.Asset, { nextCharacter: SourceC.MemberNumber });
                    leashPlayer(SourceC);
                });
        } else if (SourceCharacter === player.MemberNumber) {
            findCharacter("TargetC", TargetCharacter)
                .then((target) => InventoryGet(target, "ItemNeckRestraints"))
                .then((item) => itemMap[item.Asset.Name])
                .then((pairItemName) =>
                    monadic(player.Appearance.find((i) => i.Asset.Group.Name === pairItemName)?.Asset).valueOr(() =>
                        monadic(pairiGroups.find((g) => !player.Appearance.some((i) => i.Asset.Group.Name === g)))
                            .then((group) => AssetGet("Female3DCG", group, pairItemName))
                            .valueOr(undefined)
                    )
                )
                .then((asset, { TargetC }) => {
                    wearAndPair(player, asset, { prevCharacter: TargetC.MemberNumber });
                    leashTarget(TargetC);
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
