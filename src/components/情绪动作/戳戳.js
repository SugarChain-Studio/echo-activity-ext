import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "戳脸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: "Caress",
        label: {
            CN: "戳脸",
            EN: "Poke Face",
            RU: "Тыкнуть в Лицо",
            UA: "Тицяти обличчя.",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes DestinationCharacter face with a finger.",
            RU: "SourceCharacter тыкает в лицо TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в обличчя.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
