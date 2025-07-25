import { ChatRoomOrder, DrawCharacterModifier } from "@mod-utils/ChatRoomOrder";
import { ActivityManager } from "../../activityForward";

/** @type {CustomActivity["run"]} */
const moveBehindRun = (player, sender, { TargetCharacter, SourceCharacter }) => {
    if (TargetCharacter === player.MemberNumber) {
        if (!ServerChatRoomGetAllowItem(sender, player)) return;
        ChatRoomOrder.setDrawOrder({
            nextCharacter: SourceCharacter,
            timer: Date.now() + 5000,
            reason: "移动到身后",
        });
    } else if (SourceCharacter === player.MemberNumber) {
        ChatRoomOrder.setDrawOrder({
            prevCharacter: TargetCharacter,
            timer: Date.now() + 5000,
            reason: "移动到身后",
        });
    }
};

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "躲到身后",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "SistersHug",
        run: moveBehindRun,
        label: {
            CN: "躲到身后",
            EN: "Hide Behind",
            UA: "Сховатись",
        },
        dialog: {
            CN: "SourceCharacter躲到TargetCharacter的身后.",
            EN: "SourceCharacter hides behind TargetCharacter.",
            UA: "SourceCharacter ховається позаду TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "移动到身后",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "SistersHug",
        run: moveBehindRun,
        label: {
            CN: "移动到身后",
            EN: "Move Behind",
            UA: "Стати позаду",
        },
        dialog: {
            CN: "SourceCharacter移动到TargetCharacter的身后.",
            EN: "SourceCharacter moves behind TargetCharacter.",
            UA: "SourceCharacter стає позаду TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);

    DrawCharacterModifier.addModifier((C, arg) => {
        const { Zoom } = arg;
        const sharedC = ChatRoomOrder.requireSharedCenter(C);
        if (!sharedC) return arg;

        const prevTimer = ChatRoomOrder.requireTimerState(sharedC.prev);
        const nextTimer = ChatRoomOrder.requireTimerState(sharedC.next);
        if (!prevTimer || !nextTimer) return arg;
        if (prevTimer.reason !== "移动到身后" || nextTimer.reason !== "移动到身后") return arg;

        if (sharedC.prev.MemberNumber === C.MemberNumber) {
            return { C, X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
        }

        if (sharedC.next.MemberNumber === C.MemberNumber) {
            return { C, X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
        }
    });
}
