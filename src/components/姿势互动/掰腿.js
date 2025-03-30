import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "掰开双腿",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 500,
            MaxProgressSelf: 50,
            Target: ["ItemLegs"],
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
