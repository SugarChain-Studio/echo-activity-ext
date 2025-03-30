import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";

/** @type { CustomActivity } */
const activity = {
    activity: {
        Name: "骑上去",
        Prerequisite: [
            (_prereq, acting, acted, _group) =>
                InventoryIsItemInList(acting, "ItemTorso", ["缰绳_Luzi"]) &&
                InventoryIsItemInList(acted, "ItemTorso", ["鞍_Luzi"]),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: (player, sender, { TargetCharacter, SourceCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
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
}
