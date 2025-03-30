import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "猫爪挠手",
            Prerequisite: ["NeedPawMittens", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪挠手",
            EN: "Scratch Hand Like a Pet",
            RU: "Поскрести Ладонь",
            UA: "Дряпати руку",
        },
        dialog: {
            CN: "SourceCharacter用爪子挠了一下TargetCharacter的手.",
            EN: "SourceCharacter scratches DestinationCharacter hand with mitten claws like a pet.",
            RU: "SourceCharacter игриво шкребет ладонь TargetCharacter своими коготками.",
            UA: "SourceCharacter дряпає долоню TargetCharacter кігтями.",
        },
    },
    {
        activity: {
            Name: "猫爪挠手臂",
            Prerequisite: ["NeedPawMittens", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemArms"],
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪挠手臂",
            EN: "Scratch Arm Like a Pet",
            RU: "Поскрести Руку",
            UA: "Дряпати руку",
        },
        dialog: {
            CN: "SourceCharacter用爪子挠了一下TargetCharacter的手臂.",
            EN: "SourceCharacter scratches DestinationCharacter arm with mitten claws like a pet.",
            RU: "SourceCharacter игриво шкребет руку TargetCharacter своими коготками.",
            UA: "SourceCharacter дряпає руку TargetCharacter кігтями.",
        },
    },
    {
        activity: {
            Name: "猫爪舔手",
            Prerequisite: ["NeedPawMittens", "UseArms", "UseTongue"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: ["ItemHands", "PawMittens"],
        labelSelf: {
            CN: "猫爪舔手",
            EN: "Lick Paw Like a Pet",
            RU: "Вылизать Лапку",
            UA: "Лизати лапу",
        },
        dialogSelf: {
            CN: "SourceCharacter舔自己的爪子.",
            EN: "SourceCharacter licks PronounPossessive paw like a pet.",
            RU: "SourceCharacter вылизывает свою лапку как кошечка.",
            UA: "SourceCharacter вилизує свою лапу.",
        },
    },
    {
        activity: {
            Name: "猫爪戳脸",
            Prerequisite: ["NeedPawMittens", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪戳脸",
            EN: "Poke Claws in Face ",
            RU: "Тыкнуть Коготками в Лицо",
            UA: "Тицяти кігтями в лице",
        },
        dialog: {
            CN: "SourceCharacter用爪子戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes DestinationCharacter face with PronounPossessive mitten claws like a pet.",
            RU: "SourceCharacter тыкает в лицо TargetCharacter своим коготками.",
            UA: "SourceCharacter тицяє TargetCharacter в лице своїми кігтями.",
        },
    },
    {
        activity: {
            Name: "猫爪戳鼻子",
            Prerequisite: ["NeedPawMittens", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪戳鼻子",
            EN: "Poke Claws in Nose",
            RU: "Тыкнуть Коготками в Нос",
            UA: "Тицяти кігтями в ніс",
        },
        dialog: {
            CN: "SourceCharacter用爪子戳了戳TargetCharacter的鼻子.",
            EN: "SourceCharacter pokes DestinationCharacter nose with mitten claws.",
            RU: "SourceCharacter тыкает своими коготками в нос TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в ніс своїми кігтями.",
        },
    },
    {
        activity: {
            Name: "猫爪揉脸",
            Prerequisite: ["NeedPawMittens", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪揉脸",
            EN: "Rub Claws in Face",
            RU: "Поцарапать Лицо",
            UA: "Царапати лице",
        },
        dialog: {
            CN: "SourceCharacter用爪子揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter uses PronounPossessive claws to rub DestinationCharacter face.",
            RU: "SourceCharacter царапает лицо TargetCharacter своими коготками.",
            UA: "SourceCharacter царапає своїми кігтями лице TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "猫爪揉鼻子",
            Prerequisite: ["NeedPawMittens", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["ItemHands", "PawMittens"],
        label: {
            CN: "猫爪揉鼻子",
            EN: "Rub Claws in Nose",
            RU: "Поцарапать Нос",
            UA: "Царапати ніс",
        },
        dialog: {
            CN: "SourceCharacter用爪子揉了揉TargetCharacter的鼻子.",
            EN: "SourceCharacter uses PronounPossessive claws to rub DestinationCharacter nose.",
            RU: "SourceCharacter царапает нос TargetCharacter своими коготками",
            UA: "SourceCharacter царапає ніс TargetCharacter кігтями.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
