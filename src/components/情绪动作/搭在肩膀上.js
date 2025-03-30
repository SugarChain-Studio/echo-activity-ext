import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "手臂搭在肩膀上",
            Prerequisite: ["UseArms"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "Slap",
        label: {
            CN: "手臂搭在肩膀上",
            EN: "Arm on Shoulder",
            RU: "Руку на Плечо",
            UA: "Рука на плече",
        },
        dialog: {
            CN: "SourceCharacter把手臂搭在TargetCharacter的肩膀上.",
            EN: "SourceCharacter places arm on DestinationCharacter shoulder.",
            RU: "SourceCharacter кладет свою руку на плечо TargetCharacter.",
            UA: "SourceCharacter ставить свою руку на плече TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "下巴搭在肩膀上",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "RestHead",
        label: {
            CN: "下巴搭在肩膀上",
            EN: "Chin on Shoulder",
            RU: "Подбородок на Плечо.",
            UA: "Підборідок на плечі",
        },
        dialog: {
            CN: "SourceCharacter把下巴搭在TargetCharacter的肩膀上.",
            EN: "SourceCharacter places chin on DestinationCharacter shoulder.",
            RU: "SourceCharacter ложит подбородок на плечо TargetCharacter.",
            UA: "SourceCharacter ставить свій підборідок на плече TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
