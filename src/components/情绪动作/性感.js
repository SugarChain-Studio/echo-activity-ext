import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "阴部轻蹭手",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: "Wiggle",
        label: {
            CN: "阴部轻蹭",
            EN: "Groin Nuzzle",
            RU: "Ласка пахом",
            UA: "Тертя пахом",
        },
        dialog: {
            CN: "SourceCharacter用阴部轻蹭TargetCharacter的手.",
            EN: "SourceCharacter nuzzles DestinationCharacter hand with their groin.",
            RU: "SourceCharacter нежно трется пахом о руку TargetCharacter.",
            UA: "SourceCharacter ніжно треться пахом об руку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "阴部轻蹭小腿",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemFeet"],
        },
        useImage: "Wiggle",
        label: {
            CN: "阴部轻蹭",
            EN: "Groin Nuzzle",
            RU: "Ласка пахом",
            UA: "Тертя пахом",
        },
        dialog: {
            CN: "SourceCharacter用阴部轻蹭TargetCharacter的小腿.",
            EN: "SourceCharacter nuzzles DestinationCharacter calf with their groin.",
            RU: "SourceCharacter нежно трется пахом о голень TargetCharacter.",
            UA: "SourceCharacter ніжно треться пахом об гомілку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "弹阴蒂",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemVulvaPiercings"],
        },
        useImage: "Pinch",
        label: {
            CN: "弹阴蒂",
            EN: "Flick Clitoris",
            RU: "Щелчек по Клитору",
            UA: "Замахувати пальцем об клітор",
        },
        dialog: {
            CN: "SourceCharacter弹了一下TargetCharacter的阴蒂.",
            EN: "SourceCharacter flicks DestinationCharacter clitoris.",
            RU: "SourceCharacter щелкает TargetCharacter по клитору.",
            UA: "SourceCharacter замахується пальцем об клітор TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "揉搓乳头",
            Prerequisite: ["UseHands", "UseArms", "ZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemNipples"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "揉搓乳头",
            EN: "Rub Nipples",
            RU: "Поиграть с Сосками",
            UA: "Терти соски",
        },
        dialog: {
            CN: "SourceCharacter揉搓TargetCharacter的乳头.",
            EN: "SourceCharacter uses hands to pinch DestinationCharacter nipples, rubbing them.",
            RU: "SourceCharacter вытягивает соски TargetCharacter и массирует их.",
            UA: "SourceCharacter ніжно щипає соски TargetCharacter підтягуючи їх перед тим, як терти їх пальцями.",
        },
    },
    {
        activity: {
            Name: "托起乳房",
            Prerequisite: [],
            MaxProgress: 50,
            Target: ["ItemBreast"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "托起乳房",
            EN: "Lift Breasts",
            RU: "Приподнять Грудь",
            UA: "Підняти груди",
        },
        dialog: {
            CN: "SourceCharacter托起TargetCharacter的双乳.",
            EN: "SourceCharacter lifts DestinationCharacter breasts.",
            RU: "SourceCharacter приподнимает грудь TargetCharacter.",
            UA: "SourceCharacter ніжно піднямає груди TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "手指插进阴道",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "MasturbateHand",
        label: {
            CN: "手指插进阴道",
            EN: "Insert Finger into Vagina",
            RU: "Вставить Палец в Вагину",
            UA: "Вставити палець у вагіну",
        },
        dialog: {
            CN: "SourceCharacter手指插进TargetCharacter的阴道内.",
            EN: "SourceCharacter inserts finger into DestinationCharacter vagina.",
            RU: "SourceCharacter вставляет палец в вагину TargetCharacter.",
            UA: "SourceCharacter вставляє палець у вагіну TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "拔出自己的手指",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "MasturbateHand",
        label: {
            CN: "拔出自己的手指",
            EN: "Remove Finger",
            RU: "Вытащить Палец",
            UA: "Витягнути палець",
        },
        dialog: {
            CN: "SourceCharacter从TargetCharacter的阴道内拔出自己的手指,手指连着TargetCharacter的爱液.",
            EN: "SourceCharacter removes own finger from DestinationCharacter vagina, the finger coated with DestinationCharacter love fluids.",
            RU: "SourceCharacter вынимает покрытый любовным соком палец из вагины TargetCharacter.",
            UA: "SourceCharacter витягує палець покритий тонким шаром сексапільного соку з вагіни TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "蠕动手指",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 90,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "Grope",
        label: {
            CN: "蠕动手指",
            EN: "Wriggle Finger",
            RU: "Двигать Пальцем",
            UA: "SourceCharacter TargetCharacter.",
        },
        dialog: {
            CN: "SourceCharacter在TargetCharacter的阴道内蠕动手指.",
            EN: "SourceCharacter wriggles a finger inside DestinationCharacter vagina.",
            RU: "SourceCharacter двигает пальцем внутри вагины TargetCharacter.",
            UA: "SourceCharacter TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "快速抽插",
            Prerequisite: ["UseHands", "ZoneNaked", "TargetZoneNaked"],
            MaxProgress: 100,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "快速抽插",
            EN: "Quickly Thrust",
            RU: "Интим",
            UA: "Вштовхувати",
        },
        dialog: {
            CN: "SourceCharacter的手在TargetCharacter的阴道内快速抽插.",
            EN: "SourceCharacter hand quickly thrusts in and out of DestinationCharacter vagina, rubbing and kneading.",
            RU: "Рука SourceCharacter быстро входит и выходит из вагины TargetCharacter, растягивая и разминая её.",
            UA: "SourceCharacter швидко вштовхує своїми пальцями в вагіну TargetCharacter дразливо бавлячись з PronounPossessive ж вагіною.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
