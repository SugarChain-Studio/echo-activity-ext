import { sleepFor } from "@sugarch/bc-mod-utility";
import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder, DrawCharacterModifier } from "@mod-utils/ChatRoomOrder";

/** @type { CustomActivity } */
const activity = {
    activity: {
        Name: "驾驶马车",
        Prerequisite: [
            "UseFeet",
            (_prereq, acting, acted, _group) =>
                (!InventoryGet(acting, "ItemDevices") || InventoryIsItemInList(acting, "ItemDevices", ["马车_Luzi"])) &&
                InventoryIsItemInList(acted, "ItemDevices", ["马车前_Luzi"]),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: async (player, sender, info) => {
        if (info.TargetCharacter === player.MemberNumber) {
            await sleepFor(100);
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;

            const SrcChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.SourceCharacter);
            if (!SrcChara) return;
            ChatRoomOrder.setDrawOrder({
                prevCharacter: SrcChara.MemberNumber,
                associatedAsset: {
                    group: "ItemDevices",
                    asset: "马车前_Luzi",
                },
            });
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (info.SourceCharacter === player.MemberNumber) {
            await sleepFor(100);
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.TargetCharacter);
            if (!TgtChara) return;
            InventoryWear(player, "马车_Luzi", "ItemDevices");
            ChatRoomOrder.setDrawOrder({
                nextCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemDevices",
                    asset: "马车_Luzi",
                },
            });
            ChatRoomCharacterUpdate(player);
            if (ChatRoomLeashList.indexOf(TgtChara.MemberNumber) < 0) ChatRoomLeashList.push(TgtChara.MemberNumber);
        }
    },
    useImage: "Wiggle",
    label: {
        CN: "驾驶马车",
    },
    dialog: {
        CN: "SourceCharacter乘上了TargetCharacter身后的马车.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);

    DrawCharacterModifier.addModifier((C, arg) => {
        const { Zoom } = arg;
        const sharedC = ChatRoomOrder.requireSharedCenter(C);
        if (!sharedC) return arg;

        const prevState = ChatRoomOrder.requireAssetState(sharedC.prev);
        const nextState = ChatRoomOrder.requireAssetState(sharedC.next);
        if (!prevState || !nextState) return arg;
        const prevAssetName = prevState.associatedAsset.asset;
        const nextAssetName = nextState.associatedAsset.asset;
        if (prevAssetName !== "马车_Luzi" || nextAssetName !== "马车前_Luzi") return arg;

        if (sharedC.next.MemberNumber === C.MemberNumber) {
            return { X: sharedC.center.X - 130 / Zoom, Y: sharedC.center.Y, Zoom };
        }

        if (sharedC.prev.MemberNumber === C.MemberNumber) {
            return { X: sharedC.center.X + 80 / Zoom, Y: sharedC.center.Y, Zoom };
        }
    });
}
