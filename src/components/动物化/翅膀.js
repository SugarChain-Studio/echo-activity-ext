import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "扇动翅膀",
            Prerequisite: ["TargetHasWings"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "扇动翅膀",
            EN: "Flap Wings",
            RU: "Взмахнуть Крыльями",
            UA: "Розмахувати крилами",
        },
        dialogSelf: {
            CN: "SourceCharacter扇动PronounPossessive的翅膀.",
            EN: "SourceCharacter flaps PronounPossessive wings.",
            RU: "SourceCharacter взмахивает своими крыльями.",
            UA: "SourceCharacter розмахує свої крила.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
