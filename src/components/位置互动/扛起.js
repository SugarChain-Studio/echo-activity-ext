import { sleepFor } from "@sugarch/bc-mod-utility";
import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder, DrawCharacterModifier } from "@mod-utils/ChatRoomOrder";

/** @type { CustomActivity} */
const activity = {
    activity: {
        Name: "扛起",
        Prerequisite: [
            (_prereq, _acting, acted, _group) => InventoryIsItemInList(acted, "ItemDevices", ["BurlapSack"]),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: async (player, sender, { SourceCharacter, TargetCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            await sleepFor(100);
            const SrcChara = ChatRoomCharacter.find((C) => C.MemberNumber === SourceCharacter);
            if (!SrcChara) return;
            ChatRoomOrder.setDrawOrder({
                nextCharacter: SrcChara.MemberNumber,
                associatedAsset: {
                    group: "ItemDevices",
                    asset: "BurlapSack",
                },
            });
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (SourceCharacter === player.MemberNumber) {
            await sleepFor(100);
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === TargetCharacter);
            if (!TgtChara) return;
            InventoryWear(player, "扛起来的麻袋_Luzi", "ItemMisc");
            ChatRoomOrder.setDrawOrder({
                prevCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemMisc",
                    asset: "扛起来的麻袋_Luzi",
                },
            });
            if (ChatRoomLeashList.indexOf(TgtChara.MemberNumber) < 0) ChatRoomLeashList.push(TgtChara.MemberNumber);
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

export default function () {
    ActivityManager.addCustomActivity(activity);

    DrawCharacterModifier.addModifier((C, arg) => {
        const { Zoom } = arg;
        const sharedC = ChatRoomOrder.requireSharedCenter(C);
        if (!sharedC) return arg;

        const state = ChatRoomOrder.requirePairAssetState(sharedC);
        if (!state) return arg;

        const prevAssetName = state.prev.associatedAsset.asset;
        const nextAssetName = state.next.associatedAsset.asset;
        if (prevAssetName !== "BurlapSack" || nextAssetName !== "扛起来的麻袋_Luzi") return arg;

        if (sharedC.prev.MemberNumber === C.MemberNumber) {
            if (sharedC.next.ActivePose[0] === "Kneel" || sharedC.next.ActivePose[0] === "KneelingSpread") {
                return { X: sharedC.center.X, Y: sharedC.center.Y - 120 * Zoom, Zoom };
            } else {
                return { X: sharedC.center.X, Y: sharedC.center.Y - 340 * Zoom, Zoom };
            }
        }

        if (sharedC.next.MemberNumber === C.MemberNumber) {
            return { X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
        }
    });
}
