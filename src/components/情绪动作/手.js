import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "挥手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: "Slap",
        label: {
            CN: "挥手",
            EN: "Wave Hand",
            RU: "Помахать Рукой",
            UA: "Помахати рукою",
        },
        dialog: {
            CN: "SourceCharacter向TargetCharacter挥手.",
            EN: "SourceCharacter waves hand at TargetCharacter.",
            RU: "SourceCharacter машет рукой в сторону TargetCharacter.",
            UA: "SourceCharacter махає рукою в сторону TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "伸出手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: "Caress",
        labelSelf: {
            CN: "伸出手",
            EN: "Reach Out Hand",
            RU: "Протянуть Руку",
            UA: "Тягнутись рукою",
        },
        dialogSelf: {
            CN: "SourceCharacter伸出自己的手.",
            EN: "SourceCharacter reaches out own hand.",
            RU: "SourceCharacter протягивает руку.",
            UA: "SourceCharacter протягує свою руку.",
        },
    },
    {
        activity: {
            Name: "手托起下巴",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "Caress",
        label: {
            CN: "手托起下巴",
            EN: "Hand under Chin",
            RU: "Взять за Подбородок",
            UA: "Руку на підборідок",
        },
        dialog: {
            CN: "SourceCharacter用手托起TargetCharacter的下巴.",
            EN: "SourceCharacter places hand under DestinationCharacter chin.",
            RU: "SourceCharacter берет TargetCharacter рукой за подбородок.",
            UA: "SourceCharacter протягує свою руку ставиши на підборідок TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "弹额头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Pinch",
        label: {
            CN: "弹额头",
            EN: "Flick Forehead",
            RU: "Поставить Щелбан",
            UA: "Замахнути пальцем в лоб",
        },
        dialog: {
            CN: "SourceCharacter弹了一下TargetCharacter的额头.",
            EN: "SourceCharacter flicks DestinationCharacter forehead.",
            RU: "SourceCharacter ставит щелбан в лоб TargetCharacter.",
            UA: "SourceCharacter замахує пальцем в лоб TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "拍头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Slap",
        label: {
            CN: "拍头",
            EN: "Hit The Head",
            RU: "Ударить по Голове",
            UA: "Вдарити по голові",
        },
        dialog: {
            CN: "SourceCharacter拍打TargetCharacter的头.",
            EN: "SourceCharacter hits DestinationCharacter head.",
            RU: "SourceCharacter бьет TargetCharacter по голове.",
            UA: "SourceCharacter б'є по голові TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
