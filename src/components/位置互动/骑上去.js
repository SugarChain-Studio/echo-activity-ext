import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../prereqs";
import { DrawMods, SharedCenterModifier } from "./drawMods";
import { findCharacter, wearAndPair } from "../../utils";
import { Path } from "../../resouce";

/** @type { CustomActivity } */
const activity = {
    activity: {
        Name: "骑上去",
        Prerequisite: [
            Prereqs.or(
                Prereqs.Acting.GroupIs("ItemTorso", ["缰绳_Luzi"]),
                Prereqs.Acting.GroupIs("ItemTorso2", ["缰绳_Luzi"])
            ),
            Prereqs.Acted.TargetGroupIs(["鞍_Luzi"]),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso", "ItemTorso2"],
    },
    run: (player, sender, { TargetCharacter, SourceCharacter, ActivityGroup }) => {
        if (TargetCharacter === player.MemberNumber) {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;

            findCharacter("SourceC", SourceCharacter)
                .then(() => InventoryGet(player, ActivityGroup.Name))
                .then((item, { SourceC }) => {
                    wearAndPair(player, item.Asset, { prevCharacter: SourceC.MemberNumber }, "follow");
                    if (PoseAvailable(player, "BodyFull", "AllFours")) {
                        PoseSetActive(player, "AllFours");
                    }
                });
        } else if (SourceCharacter === player.MemberNumber) {
            findCharacter("TargetC", TargetCharacter)
                .then(() => player.Appearance.find((i) => i.Asset.Name === "缰绳_Luzi"))
                .then((leashItem, { TargetC }) => {
                    wearAndPair(player, leashItem.Asset, { nextCharacter: TargetC.MemberNumber }, "lead");
                    if (PoseAvailable(player, "BodyLower", "KneelingSpread")) {
                        PoseSetActive(player, "KneelingSpread");
                    }
                });
        }
    },
    useImage: Path.resolve("activities/rideon.png"),
    label: {
        CN: "骑上去",
        EN: "Ride On",
        RU: "Поездка",
    },
    dialog: {
        CN: "SourceCharacter骑在TargetCharacter的背上.",
        EN: "SourceCharacter Rides on DestinationCharacter Back.",
        RU: "SourceCharacter ocедлала спину TargetCharacter.",
    },
};

const items = [{ prev: "缰绳_Luzi", next: "鞍_Luzi" }];

export default function () {
    ActivityManager.addCustomActivity(activity);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, (_, { sharedC, initState, C }) => {
            const { Zoom } = initState;
            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                return { C, X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
            }
            if (sharedC.next.MemberNumber === C.MemberNumber) {
                return { C, X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
            }
        })
    );
}
