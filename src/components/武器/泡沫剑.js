import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "泡沫剑架在脖子上",
            Prerequisite: ["UseHands", "UseArms", "NeedSword"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
            TargetSelf: true,
        },
        useImage: ["ItemHandheld", "Sword"],
        label: {
            CN: "泡沫剑架在脖子上",
            EN: "Foam Sword Rests on the Neck",
            RU: "Приставить Поролоновый Меч",
            UA: "Прикласти меч на шию",
        },
        dialog: {
            CN: "SourceCharacter把泡沫剑架在TargetCharacter的脖子上",
            EN: "SourceCharacter places the Foam Sword on DestinationCharacter Neck",
            RU: "SourceCharacter приставляет к шее TargetCharacter поролоновый меч.",
            UA: "SourceCharacter прикладає паралоновий меч на шию TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "泡沫剑拍脸",
            Prerequisite: ["UseHands", "UseArms", "NeedSword"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: ["ItemHandheld", "Sword"],
        label: {
            CN: "泡沫剑拍脸",
            EN: "Foam Sword Hits the Face",
            RU: "Ударить Мечем по Лицу ",
            UA: "Вдарити мечем по лиці",
        },
        dialog: {
            CN: "SourceCharacter用泡沫剑轻轻拍了拍一下TargetCharacter的脸",
            EN: "SourceCharacter gently hits DestinationCharacter face with a Foam Sword",
            RU: "SourceCharacter аккуратно бьет TargetCharacter по лицу поролоновым мечем.",
            UA: "SourceCharacter ніжно б'є TargetCharacter паралоновим мечем.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
