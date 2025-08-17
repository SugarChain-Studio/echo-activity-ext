import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../prereqs";
import { DrawMods, SharedCenterModifier } from "./drawMods";
import { DynImageProviders } from "../../dynamicImage";
import { leashTarget, findCharacter, wearAndPair, leashPlayer } from "../../utils";

/** @type { CustomActivity } */
const activity = {
    activity: {
        Name: "手推车",
        Prerequisite: [
            "UseHands",
            "Luzi_TargetLeashedOrCanBeLeashed",
            () => !!AssetGet("Female3DCG", "ItemMisc", "抓住推车"),
            Prereqs.Acted.GroupIs("ItemDevices", ["Trolley"]),
            Prereqs.or(Prereqs.Acting.GroupEmpty("ItemMisc"), Prereqs.Acting.GroupIs("ItemMisc", ["抓住推车"])),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: (player, sender, { TargetCharacter, SourceCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;
            findCharacter("SourceC", SourceCharacter)
                .then(() => AssetGet("Female3DCG", "ItemDevices", "Trolley"))
                .then((asset, { SourceC }) => {
                    wearAndPair(player, asset, { prevCharacter: SourceC.MemberNumber });
                    leashPlayer(SourceC);
                });
        } else if (SourceCharacter === player.MemberNumber) {
            findCharacter("TargetC", TargetCharacter)
                .then(() => AssetGet("Female3DCG", "ItemMisc", "抓住推车"))
                .then((asset, { TargetC }) => {
                    wearAndPair(player, asset, { nextCharacter: TargetC.MemberNumber });
                    leashTarget(TargetC);
                });
        }
    },
    useImage: DynImageProviders.itemOnActedGroup("ItemDevices"),
    label: {
        CN: "抓住推车",
        EN: "Grab the Trolley",
    },
    dialog: {
        CN: "SourceCharacter抓住了TargetCharacter的推车.",
        EN: "SourceCharacter grabs the Trolley of TargetCharacter.",
    },
};

const items = [{ prev: "抓住推车", next: "Trolley" }];

export default function () {
    ActivityManager.addCustomActivity(activity);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, (_, { sharedC, initState, C }) => {
            const { Zoom } = initState;
            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                return { C, X: sharedC.center.X + 50 * Zoom, Y: sharedC.center.Y - 50 * Zoom, Zoom };
            }
            if (sharedC.next.MemberNumber === C.MemberNumber) {
                return { C, X: sharedC.center.X - 50 * Zoom, Y: sharedC.center.Y, Zoom };
            }
        })
    );
}
