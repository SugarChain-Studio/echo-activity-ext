import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "张开嘴",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        mode: "SelfOnSelf",
        run: (player) => CharacterSetFacialExpression(player, "Mouth", "Open"),
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
            Name: "闭上嘴",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: "Kiss",
        mode: "SelfOnSelf",
        run: (player) => CharacterSetFacialExpression(player, "Mouth", null),
        labelSelf: {
            CN: "闭上嘴",
            EN: "Close Mouth",
        },
        dialogSelf: {
            CN: "SourceCharacter闭上了嘴.",
            EN: "SourceCharacter closes mouth.",
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
            EN: "SourceCharacter licks DestinationCharacter hand.",
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
            EN: "SourceCharacter licks DestinationCharacter fingers.",
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
            EN: "SourceCharacter sucks on DestinationCharacter fingers.",
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
            EN: "SourceCharacter licks DestinationCharacter face.",
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
            EN: "SourceCharacter licks DestinationCharacter feet.",
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
    {
        activity: {
            Name: "耳朵呵气",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemEars"]
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "耳朵呵气",
            EN: "Ear Blowing",
            RU: "Дуть в ухо",
            UA: "Дмухати у вухо",
        },
        dialog: {
            CN: "SourceCharacter在TargetCharacter的耳边轻轻呵气.",
            EN: "SourceCharacter blows gently on DestinationCharacter ear.",
            RU: "SourceCharacter нежно дует на ухо TargetCharacter.",
            UA: "SourceCharacter ніжно дме у вухо TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "乳头呵气",
            Prerequisite: ["UseMouth"],
            MaxProgress: 50,
            Target: ["ItemNipples"]
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "乳头呵气",
            EN: "Nipple Blowing",
            RU: "Дуть на сосок",
            UA: "Дмухати на сосок",
        },
        dialog: {
            CN: "SourceCharacter在TargetCharacter的乳头轻轻呵气.",
            EN: "SourceCharacter blows gently on DestinationCharacter nipple.",
            RU: "SourceCharacter нежно дует на сосок TargetCharacter.",
            UA: "SourceCharacter ніжно дме на сосок TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "舔牵绳手",
            Prerequisite: ["UseTongue", "Luzi_LeashedBy"],
            MaxProgress: 50,
            Target: ["ItemHands"]
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔牵绳手",
            EN: "Lick Leash Hand",
            RU: "Лизать руку с поводком",
            UA: "Лизати руку з повідцем",
        },
        dialog: {
            CN: "SourceCharacter舔了舔TargetCharacter握着牵绳的手.",
            EN: "SourceCharacter licks DestinationCharacter hand that's holding the leash.",
            RU: "SourceCharacter облизывает руку TargetCharacter, держащую поводок.",
            UA: "SourceCharacter облизує руку TargetCharacter, яка тримає повідець.",
        }
    },
    {
        activity: {
            Name: "口塞亲吻嘴唇",
            Prerequisite: ["IsGagged"],
            MaxProgress: 50,
            Target: ["ItemHands"]
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "口塞亲吻嘴唇",
            EN: "Gagged Lip Kiss",
            RU: "Поцелуй с кляпом",
            UA: "Поцілунок з кляпом",
        },
        dialog: {
            CN: "SourceCharacter带着口塞亲吻TargetCharacter的嘴唇.",
            EN: "SourceCharacter kisses DestinationCharacter lips while wearing a gag.",
            RU: "SourceCharacter целует TargetCharacter в губы с кляпом во рту.",
            UA: "SourceCharacter цілує TargetCharacter у губи з кляпом у роті.",
        }
    },
    {
        activity: {
            Name: "叼牵绳",
            Prerequisite: [
                Prereqs.Acting.GroupIs('ItemNeckRestraints', ['ChainLeash', 'CollarLeash'])
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "叼牵绳",
            EN: "Hold Leash in Mouth",
            RU: "Держать поводок во рту",
            UA: "Тримати повідець у роті",
        },
        dialog: {
            CN: "SourceCharacter叼起牵绳向TargetCharacter的手边晃了晃.",
            EN: "SourceCharacter picks up the leash with their mouth and waves it toward DestinationCharacter hand.",
            RU: "SourceCharacter бере поводок в рот и направляет его к руке TargetCharacter.",
            UA: "SourceCharacter бере повідець у рот і направляє його до руки TargetCharacter.",
        },
        dialogSelf: {
            CN: "SourceCharacter叼起自己的牵绳.",
            EN: "SourceCharacter picks up their own leash with their mouth.",
            RU: "SourceCharacter бере свой собственный поводок в рот.",
            UA: "SourceCharacter бере свій власний повідець у рот.",
        }
    },
    {
        activity: {
            Name: "挣脱牵绳",
            Prerequisite: ["Luzi_LeashedBy"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "挣脱牵绳",
            EN: "Break Free from Leash",
            RU: "Сорваться с поводка",
            UA: "Звільнитися від повідка",
        },
        dialog: {
            CN: "SourceCharacter奋力将牵绳从TargetCharacter手中挣脱.",
            EN: "SourceCharacter struggles to break free from DestinationCharacter leash.",
            RU: "SourceCharacter изо всех сил пытается вырваться из поводка TargetCharacter.",
            UA: "SourceCharacter намагається визволитися з повідка TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
