import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */

const activities = [
    {
        activity: {
            Name: "爬到脚边",
            Prerequisite: ["Luzi_CharacterViewWithinReach", "KneelOrAllFours"],
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
            EN: "SourceCharacter crawls to DestinationCharacter feet.",
            RU: "SourceCharacter ползет к ногам TargetCharacter.",
            UA: "SourceCharacter повзе до ніг TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蹭大腿",
            Prerequisite: ["Luzi_CharacterViewWithinReach", "KneelOrAllFours"],
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
            EN: "SourceCharacter gently nuzzles DestinationCharacter thigh.",
            RU: "SourceCharacter нежно трется головой об ляжку TargetCharacter.",
            UA: "SourceCharacter ніжно треться об стегно TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蹭小腿",
            Prerequisite: ["Luzi_CharacterViewWithinReach", "KneelOrAllFours"],
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
            EN: "SourceCharacter gently nuzzles DestinationCharacter shin.",
            RU: "SourceCharacter нежно трется головой об голень TargetCharacter.",
            UA: "SourceCharacter ніжно треться об гомілку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "抱腿",
            Prerequisite: ["Luzi_CharacterViewWithinReach", "UseArms", "KneelOrAllFours"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: "Caress",
        label: {
            CN: "抱腿",
            EN: "Hug Legs",
            RU: "Обнять Ноги",
            UA: "Обійняти ноги",
        },
        dialog: {
            CN: "SourceCharacter抱住TargetCharacter的腿.",
            EN: "SourceCharacter hugs DestinationCharacter legs.",
            RU: "SourceCharacter обнимает TargetCharacter за ноги.",
            UA: "SourceCharacter Обіймає ноги TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "托起脚",
            Prerequisite: ["Luzi_CharacterViewWithinReach", "UseHands", "UseArms", "KneelOrAllFours"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        useImage: "Caress",
        label: {
            CN: "托起脚",
            EN: "Lift Foot",
            RU: "Приподнять Ступню",
            UA: "Підняти ногу",
        },
        dialog: {
            CN: "SourceCharacter托起TargetCharacter的脚.",
            EN: "SourceCharacter lifts DestinationCharacter foot.",
            RU: "SourceCharacter приподнимает ступню TargetCharacter",
            UA: "SourceCharacter ніжно піднімає ногу TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
