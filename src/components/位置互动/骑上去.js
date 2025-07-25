import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder, DrawCharacterModifier } from "@mod-utils/ChatRoomOrder";
import { Prereqs } from "../../Prereqs";

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
        Target: ["ItemTorso"],
    },
    run: (player, sender, { TargetCharacter, SourceCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;

            const SrcChara = ChatRoomCharacter.find((C) => C.MemberNumber === SourceCharacter);
            if (!SrcChara) return;
            ChatRoomOrder.setDrawOrder({
                prevCharacter: SrcChara.MemberNumber,
                associatedAsset: {
                    group: "ItemTorso",
                    asset: "鞍_Luzi",
                },
            });
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (SourceCharacter === player.MemberNumber) {
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === TargetCharacter);
            if (!TgtChara) return;
            ChatRoomOrder.setDrawOrder({
                nextCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemTorso",
                    asset: "缰绳_Luzi",
                },
            });
            if (ChatRoomLeashList.indexOf(TgtChara.MemberNumber) < 0) ChatRoomLeashList.push(TgtChara.MemberNumber);
        }
    },
    useImage: "Wiggle",
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
        if (prevAssetName !== "缰绳_Luzi" || nextAssetName !== "鞍_Luzi") return arg;

        if (sharedC.prev.MemberNumber === C.MemberNumber) {
            return { C, X: sharedC.center.X, Y: sharedC.center.Y - 50 * Zoom, Zoom };
        }

        if (sharedC.next.MemberNumber === C.MemberNumber) {
            return { C, X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
        }
    });
}
