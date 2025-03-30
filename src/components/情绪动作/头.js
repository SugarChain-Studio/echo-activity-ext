import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "歪头",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemNeck"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "歪头",
            EN: "Tilt Head",
            UA: "Нахилити голову",
            RU: "Наклонить Голову",
        },
        dialogSelf: {
            CN: "SourceCharacter歪头.",
            EN: "SourceCharacter tilts head.",
            UA: "SourceCharacter Підхиляє голову.",
            RU: "SourceCharacter наклоняет голову.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
