import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "踮起双脚",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Kick",
        labelSelf: {
            CN: "踮起双脚",
            EN: "Stand on Tiptoes",
            RU: "Встать на Цыпочки",
            UA: "Встати навшпиньках",
        },
        dialogSelf: {
            CN: "SourceCharacter踮起PronounPossessive的双脚.",
            EN: "SourceCharacter stands on tiptoes.",
            RU: "SourceCharacter встает на цыпочки.",
            UA: "SourceCharacter встає навшпиньках",
        },
    },
    {
        activity: {
            Name: "摇晃脚踝",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "摇晃脚踝",
            EN: "Wiggle Ankles",
            RU: "Покачиваться",
            UA: "Трусити щиколотками",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃PronounPossessive的脚踝.",
            EN: "SourceCharacter wiggles PronounPossessive ankles.",
            RU: "SourceCharacter покачивается стоя на ногах.",
            UA: "SourceCharacter трусить щиколотками.",
        },
    },
    {
        activity: {
            Name: "伸出脚",
            Prerequisite: ["UseFeet"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Kick",
        labelSelf: {
            CN: "伸出脚",
            EN: "Extend Leg",
            RU: "Приподнять Ногу",
            UA: "Підставити ногу",
        },
        dialogSelf: {
            CN: "SourceCharacter伸出PronounPossessive的脚.",
            EN: "SourceCharacter extends PronounPossessive leg.",
            RU: "SourceCharacter приподнимает свою ногу.",
            UA: "SourceCharacter підставляє ногу.",
        },
    },
    {
        activity: {
            Name: "脚托起下巴",
            Prerequisite: ["UseFeet", "IsStanding", "TargetKneelOrAllFours"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: "Wiggle",
        label: {
            CN: "脚托起下巴",
            EN: "Foot on Chin",
            RU: "Ногу на Подбородок",
            UA: "Ногу на підборідок",
        },
        dialog: {
            CN: "SourceCharacter用脚尖托起TargetCharacter的下巴.",
            EN: "SourceCharacter raises DestinationCharacter chin with PronounPossessive foot.",
            RU: "SourceCharacter ставит ногу на подбородок TargetCharacter",
            UA: "SourceCharacter підставляє свою ногу на підборідок TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
