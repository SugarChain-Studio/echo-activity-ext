import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "张开嘴",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        labelSelf: {
            CN: "张开嘴",
            EN: "Open Mouth",
            RU: "Открыть Рот",
            UA: "Відкрити рот",
        },
        dialogSelf: {
            CN: "SourceCharacter张开了嘴.",
            EN: "SourceCharacter open mouth.",
            RU: "SourceCharacter открыла рот.",
            UA: "SourceCharacter відкриває рот.",
        },
    },
    {
        activity: {
            Name: "吞咽口水",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemNeck"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "吞咽口水",
            EN: "Swallow Saliva",
            RU: "Сглотнуть Слюну",
            UA: "Кофтнути слину",
        },
        dialogSelf: {
            CN: "SourceCharacter吞咽嘴里的口水.",
            EN: "SourceCharacter swallows saliva.",
            RU: "SourceCharacter сглатывает слюну.",
            UA: "SourceCharacter кофтає слину.",
        },
    },
    {
        activity: {
            Name: "流口水",
            Prerequisite: [],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "MoanGagWhimper",
        labelSelf: {
            CN: "流口水",
            EN: "Drool",
            RU: "Пусктить Слюни",
            UA: "Пускати слину",
        },
        dialogSelf: {
            CN: "SourceCharacter的口水顺着嘴角流下.",
            EN: "SourceCharacter drools down the corner of the mouth.",
            RU: "SourceCharacter пускает слюни из уголков рта.",
            UA: "SourceCharacter пускає слину із кутків рота.",
        },
    },
    {
        activity: {
            Name: "轻声喘息",
            Prerequisite: ["UseTongue"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "MoanGagGroan",
        labelSelf: {
            CN: "轻声喘息",
            EN: "Softly Pant",
            RU: "Тихо Вздохнуть",
            UA: "Піддихати",
        },
        dialogSelf: {
            CN: "SourceCharacter 发出轻声地喘息.",
            EN: "SourceCharacter softly pants.",
            RU: "SourceCharacter тихо вздыхает.",
            UA: "SourceCharacter ніжно піддихає під ритм серця.",
        },
    },
    {
        activity: {
            Name: "打哈欠",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        labelSelf: {
            CN: "打哈欠",
            EN: "Yawn",
            RU: "Зевать",
            UA: "Позіхнути",
        },
        dialogSelf: {
            CN: "SourceCharacter 张嘴打哈欠.",
            EN: "SourceCharacter yawns.",
            RU: "SourceCharacter зевает.",
            UA: "SourceCharacter позіхає.",
        },
    },
    {
        activity: {
            Name: "嘟囔",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        labelSelf: {
            CN: "嘟囔",
            EN: "Muttered",
            RU: "Бормотать",
            UA: "Бурмотіти",
        },
        dialogSelf: {
            CN: "SourceCharacter 嘟囔着.",
            EN: "SourceCharacter muttered.",
            RU: "SourceCharacter недовольно бормочет себе под нос.",
            UA: "SourceCharacter бурмотить собі під носом.",
        },
    },
    {
        activity: {
            Name: "舔手",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔手",
            EN: "Lick Hand",
            RU: "Облизать Руку",
            UA: "Облизати руку",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的手.",
            EN: "SourceCharacter licks TargetCharacter's hand.",
            RU: "SourceCharacter облизывает руку TargetCharacter.",
            UA: "SourceCharacter облизує руку TargetCharacter.",
        },
        labelSelf: {
            CN: "舔手",
            EN: "Lick Hand",
            RU: "Облизать Руку",
            UA: "Облизати руку",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive自己的手.",
            EN: "SourceCharacter licks PronounPossessive own hand.",
            RU: "SourceCharacter вылизывает свою руку.",
            UA: "SourceCharacter облизує собі руку",
        },
    },
    {
        activity: {
            Name: "舔手指",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔手指",
            EN: "Lick Fingers",
            RU: "Облизать Пальцы",
            UA: "Облизати пальці",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的手指.",
            EN: "SourceCharacter licks TargetCharacter's fingers.",
            RU: "SourceCharacter облизывает пальцы TargetCharacter.",
            UA: "SourceCharacter облизує пальці TargetCharacter.",
        },
        labelSelf: {
            CN: "舔手指",
            EN: "Lick Fingers",
            RU: "Облизать Пальцы",
            UA: "Облизати пальці",
        },
        dialogSelf: {
            CN: "SourceCharacter舔PronounPossessive自己的手指.",
            EN: "SourceCharacter licks PronounPossessive own fingers.",
            RU: "SourceCharacter облизывает свои пальцы.",
            UA: "SourceCharacter облизує свої пальці.",
        },
    },
    {
        activity: {
            Name: "吮吸手指",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemHands"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "吮吸手指",
            EN: "Suck on Fingers",
            RU: "Пососать Пальцы",
            UA: "Смоктати пальці",
        },
        dialog: {
            CN: "SourceCharacter吮吸TargetCharacter的手指.",
            EN: "SourceCharacter sucks on TargetCharacter's fingers.",
            RU: "SourceCharacter посасывает пальцы TargetCharacter.",
            UA: "SourceCharacter смокче пальці TargetCharacter.",
        },
        labelSelf: {
            CN: "吮吸手指",
            EN: "Suck on Fingers",
            RU: "Пососать Пальцы",
            UA: "Смоктати пальці",
        },
        dialogSelf: {
            CN: "SourceCharacter吮吸PronounPossessive的手指.",
            EN: "SourceCharacter sucks on PronounPossessive own fingers.",
            RU: "SourceCharacter сосет свои пальцы.",
            UA: "SourceCharacter підсмокчує свої пальці.",
        },
    },
    {
        activity: {
            Name: "舔脸",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔脸",
            EN: "Lick Face",
            RU: "Облизать Лицо",
            UA: "Облизати лице",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的脸.",
            EN: "SourceCharacter licks TargetCharacter's face.",
            RU: "SourceCharacter облизывает лицо TargetCharacter.",
            UA: "SourceCharacter облизує лице TargetCharacter",
        },
    },
    {
        activity: {
            Name: "舔脚",
            Prerequisite: ["UseTongue"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔脚",
            EN: "Lick Feet",
            RU: "Лизать Ноги",
            UA: "Лизати ноги",
        },
        dialog: {
            CN: "SourceCharacter 舔 TargetCharacter 的脚.",
            EN: "SourceCharacter licks TargetCharacter's feet.",
            RU: "SourceCharacter облизывает ноги TargetCharacter.",
            UA: "SourceCharacter облизує ноги TargetCharacter.",
        },
        labelSelf: {
            CN: "舔脚",
            EN: "Lick Feet",
            RU: "Лизать Ноги",
            UA: "Лизати ноги",
        },
        dialogSelf: {
            CN: "SourceCharacter 舔 PronounPossessive 自己的脚.",
            EN: "SourceCharacter licks PronounPossessive own feet.",
            RU: "SourceCharacter вылизывает свои ноги.",
            UA: "SourceCharacter облизує свої ноги.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
