import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "阴部轻蹭手",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: "Wiggle",
        label: {
            CN: "阴部轻蹭",
            EN: "Groin Nuzzle",
            RU: "Ласка пахом",
            UA: "Тертя пахом",
        },
        dialog: {
            CN: "SourceCharacter用阴部轻蹭TargetCharacter的手.",
            EN: "SourceCharacter nuzzles DestinationCharacter hand with their groin.",
            RU: "SourceCharacter нежно трется пахом о руку TargetCharacter.",
            UA: "SourceCharacter ніжно треться пахом об руку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "阴部轻蹭小腿",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemFeet"],
        },
        useImage: "Wiggle",
        label: {
            CN: "阴部轻蹭",
            EN: "Groin Nuzzle",
            RU: "Ласка пахом",
            UA: "Тертя пахом",
        },
        dialog: {
            CN: "SourceCharacter用阴部轻蹭TargetCharacter的小腿.",
            EN: "SourceCharacter nuzzles DestinationCharacter calf with their groin.",
            RU: "SourceCharacter нежно трется пахом о голень TargetCharacter.",
            UA: "SourceCharacter ніжно треться пахом об гомілку TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
