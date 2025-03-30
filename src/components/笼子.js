import { ActivityManager } from "../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "撞笼子",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: ["ItemDevices", "PawMittens"],
        labelSelf: {
            CN: "撞笼子",
            EN: "Bump Against Cage",
            RU: "Ударить Клетку",
            UA: "Штовхнути клітку",
        },
        dialogSelf: {
            CN: "SourceCharacter用身体撞击笼子.",
            EN: "SourceCharacter bumps PronounPossessive body against the cage.",
            RU: "SourceCharacter ударяется телом о клетку.",
            UA: "SourceCharacter прикладає вагу свого тіла щоб штовхнути свою клітку.",
        },
    },
    {
        activity: {
            Name: "咬笼子",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: ["ItemDevices", "PawMittens"],
        labelSelf: {
            CN: "咬笼子",
            EN: "Bite Cage",
            RU: "Кусать Прутья",
            UA: "Кусати клітку",
        },
        dialogSelf: {
            CN: "SourceCharacter用牙齿咬笼子.",
            EN: "SourceCharacter bites the cage.",
            RU: "SourceCharacter кусает прутья клетки.",
            UA: "SourceCharacter кусяє клітку зубами.",
        },
    },
    {
        activity: {
            Name: "摇晃笼子",
            Prerequisite: ["NeedKennel"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: ["ItemDevices", "PawMittens"],
        labelSelf: {
            CN: "摇晃笼子",
            EN: "Shake Cage",
            RU: "Трясет Дверь",
            UA: "Трясти клітку",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃笼子的门.",
            EN: "SourceCharacter shakes the door of the cage.",
            RU: "SourceCharacter трясет дверь клетки.",
            UA: "SourceCharacter трусить двері на клітці.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
