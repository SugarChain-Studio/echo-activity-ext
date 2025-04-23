import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "掰开双腿",
            Prerequisite: [
                "UseHands",
                "UseArms",
                Prereqs.and(
                    Prereqs.Acted.PoseIs("BodyLower", ["Kneel", "LegsClosed"]),
                    Prereqs.Acted.PoseAnyAvailable("BodyUpper", ["KneelingSpread", "BaseLower"])
                ),
            ],
            MaxProgress: 500,
            MaxProgressSelf: 50,
            Target: ["ItemLegs"],
        },
        mode: "OthersOnSelf",
        run: (player, sender) => {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;

            if (player.IsKneeling()) PoseSetActive(player, "KneelingSpread");
            else PoseSetActive(player, "BaseLower");
        },
        useImage: "Wiggle",
        label: {
            CN: "掰开双腿",
            EN: "Spread Legs",
            RU: "Раздвинуть Ноги",
            UA: "Розширити ноги",
        },
        dialog: {
            CN: "SourceCharacter掰开TargetCharacter的双腿.",
            EN: "SourceCharacter spreads DestinationCharacter legs.",
            RU: "SourceCharacter раздвигает ноги TargetCharacter.",
            UA: "SourceCharacter Розширює ноги TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
