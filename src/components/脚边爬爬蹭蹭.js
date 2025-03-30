import { ActivityManager } from "../activityForward";

/** @type { CustomActivity []} */

const activities = [
    {
        activity: {
            Name: "爬到脚边",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        useImage: "Wiggle",
        label: {
            CN: "爬到脚边",
            EN: "Crawl to Feet",
            RU: "Ползти к Ногам",
            UA: "Повзти до ніг",
        },
        dialog: {
            CN: "SourceCharacter爬到TargetCharacter的脚边.",
            EN: "SourceCharacter crawls to TargetCharacter's feet.",
            RU: "SourceCharacter ползет к ногам TargetCharacter.",
            UA: "SourceCharacter повзе до ніг TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蹭大腿",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: "PoliteKiss",
        label: {
            CN: "蹭大腿",
            EN: "Nuzzle Thigh",
            RU: "Тереться об Ляжку",
            UA: "Тертися об стегно",
        },
        dialog: {
            CN: "SourceCharacter用头轻轻蹭TargetCharacter的大腿.",
            EN: "SourceCharacter gently nuzzles TargetCharacter's thigh.",
            RU: "SourceCharacter нежно трется головой об ляжку TargetCharacter.",
            UA: "SourceCharacter ніжно треться об стегно TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蹭小腿",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: ["ItemFeet"],
        },
        useImage: "PoliteKiss",
        label: {
            CN: "蹭小腿",
            EN: "Nuzzle Shin",
            RU: "Тереться об Голень",
            UA: "Тертись об гомілку",
        },
        dialog: {
            CN: "SourceCharacter用头轻轻蹭TargetCharacter的小腿.",
            EN: "SourceCharacter gently nuzzles TargetCharacter's shin.",
            RU: "SourceCharacter нежно трется головой об голень TargetCharacter.",
            UA: "SourceCharacter ніжно треться об гомілку TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
