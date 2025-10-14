import { ActivityManager } from "../../activityForward";
import { SharedCenterModifier, DrawMods } from "@mod-utils/ChatRoomOrder";
import { Prereqs } from "../../prereqs";
import { ChatRoomOrderTools } from "@mod-utils/ChatRoomOrder";
import { Tools } from "@mod-utils/Tools";

/** @type { CustomActivity} */
const activity = {
    activity: {
        Name: "扛起",
        Prerequisite: [
            () => !!AssetGet("Female3DCG", "ItemMisc", "扛起来的麻袋_Luzi"),
            Prereqs.or(
                Prereqs.Acting.GroupEmpty("ItemMisc"),
                Prereqs.Acting.GroupIs("ItemMisc", ["扛起来的麻袋_Luzi"])
            ),
            Prereqs.Acted.GroupIs("ItemDevices", "BurlapSack"),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: (player, sender, { SourceCharacter, TargetCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            Tools.findCharacter("SourceC", SourceCharacter)
                .then(() => AssetGet("Female3DCG", "ItemDevices", "BurlapSack"))
                .then((asset, { SourceC }) => {
                    ChatRoomOrderTools.wearAndPair(player, asset, { nextCharacter: SourceC.MemberNumber }, "follow");
                });
        } else if (SourceCharacter === player.MemberNumber) {
            Tools.findCharacter("TargetC", TargetCharacter)
                .then(() => AssetGet("Female3DCG", "ItemMisc", "扛起来的麻袋_Luzi"))
                .then((asset, { TargetC }) => {
                    ChatRoomOrderTools.wearAndPair(player, asset, { prevCharacter: TargetC.MemberNumber }, "lead");
                });
        }
    },
    useImage: ["ItemDevices", "BurlapSack"],
    label: {
        CN: "背起",
        EN: "Carry on the back",
        RU: "Нести на спине",
        UA: "Тягнути на спині",
    },
    dialog: {
        CN: "SourceCharacter将TargetCharacter背了起来.",
        EN: "SourceCharacter carried TargetCharacter on the back.",
        RU: "SourceCharacter взял TargetCharacter себе на спину.",
        UA: "SourceCharacter тягне TargetCharacter взявши собі на спину.",
    },
};

const items = [{ prev: "BurlapSack", next: "扛起来的麻袋_Luzi" }];

export default function () {
    ActivityManager.addCustomActivity(activity);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, (_, { sharedC, initState, C }) => {
            const { Zoom } = initState;
            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                if (sharedC.next.ActivePose[0] === "Kneel" || sharedC.next.ActivePose[0] === "KneelingSpread") {
                    return {
                        X: sharedC.center.X,
                        Y: sharedC.center.Y - 120 * Zoom,
                        Zoom,
                    };
                } else {
                    return {
                        X: sharedC.center.X,
                        Y: sharedC.center.Y - 340 * Zoom,
                        Zoom,
                    };
                }
            }
            if (sharedC.next.MemberNumber === C.MemberNumber) {
                return { X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
            }
        })
    );
}
