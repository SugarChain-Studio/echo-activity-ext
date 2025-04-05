import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "踮起脚尖",
            Prerequisite: [],
            MaxProgress: 30,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Kick",
        labelSelf: {
            CN: "踮起脚尖",
            EN: "Tiptoe",
            RU: "На цыпочках",
            UA: "Навшпиньки",
        },
        dialogSelf: {
            CN: "SourceCharacter轻轻踮起脚尖。",
            EN: "SourceCharacter gently rises on tiptoes.",
            RU: "SourceCharacter грациозно приподнимается на цыпочки.",
            UA: "SourceCharacter легко піднімається навшпиньки.",
        },
    },
    {
        activity: {
            Name: "摇晃脚踝",
            Prerequisite: [],
            MaxProgress: 30,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "晃动脚踝",
            EN: "Ankle Wiggle",
            RU: "Покачивание",
            UA: "Покачування",
        },
        dialogSelf: {
            CN: "SourceCharacter随意地晃动着脚踝。",
            EN: "SourceCharacter casually wiggles ankles.",
            RU: "SourceCharacter расслабленно покачивает стопами.",
            UA: "SourceCharacter невимушено покачує щиколотками.",
        },
    },
    {
        activity: {
            Name: "伸出脚",
            Prerequisite: ["UseFeet"],
            MaxProgress: 70,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Kick",
        labelSelf: {
            CN: "伸出腿脚",
            EN: "Leg Outstretch",
            RU: "Вытянуть ногу",
            UA: "Виставити ногу",
        },
        dialogSelf: {
            CN: "SourceCharacter向前伸出腿脚。",
            EN: "SourceCharacter stretches out a leg forward.",
            RU: "SourceCharacter вытягивает ногу вперед.",
            UA: "SourceCharacter витягує ногу вперед.",
        },
    },
    {
        activity: {
            Name: "脚托起下巴",
            Prerequisite: ["UseFeet", "Luzi_IsStanding", "Luzi_TargetKneelOrAllFours"],
            MaxProgress: 80,
            Target: ["ItemNeck", "ItemMouth"],
        },
        useImage: "Wiggle",
        label: {
            CN: "足尖挑下巴",
            EN: "Toe Under Chin",
            RU: "Носок под подбородком",
            UA: "Пальці під підборіддям",
        },
        dialog: {
            CN: "SourceCharacter用足尖轻轻挑起TargetCharacter的下巴。",
            EN: "SourceCharacter lifts DestinationCharacter chin with a toe.",
            RU: "SourceCharacter приподнимает подбородок TargetCharacter носком ноги.",
            UA: "SourceCharacter піднімає підборіддя TargetCharacter пальцями ноги.",
        },
    },
    {
        activity: {
            Name: "双腿颤抖",
            Prerequisite: ["Luzi_TargetHasItemVulva"],
            MaxProgress: 90,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "双腿发颤",
            EN: "Legs Tremble",
            RU: "Дрожь в ногах",
            UA: "Тремтіння ніг",
        },
        dialogSelf: {
            CN: "SourceCharacter的双腿不由自主地颤抖着。",
            EN: "SourceCharacter's legs tremble involuntarily.",
            RU: "Ноги SourceCharacter непроизвольно дрожат.",
            UA: "Ноги SourceCharacter мимоволі тремтять.",
        },
    },
    {
        activity: {
            Name: "摇晃双腿",
            Prerequisite: [],
            MaxProgress: 60,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "摇晃双腿",
            EN: "Shake Legs",
            RU: "Трясти Ногами",
            UA: "Трясти ногами",
        },
        dialogSelf: {
            CN: "SourceCharacter摇晃PronounPossessive的双腿.",
            EN: "SourceCharacter shakes own legs.",
            RU: "SourceCharacter трясет своими ногами.",
            UA: "SourceCharacter трусить своїми ногами.",
        },
    },
    {
        activity: {
            Name: "跺脚",
            Prerequisite: [],
            MaxProgress: 10,
            Target: [],
            TargetSelf: ["ItemBoots"],
        },
        useImage: "Step",
        labelSelf: {
            CN: "跺跺脚",
            EN: "Foot Stomp",
            RU: "Топанье",
            UA: "Тупання",
        },
        dialogSelf: {
            CN: "SourceCharacter气鼓鼓地跺了跺脚。",
            EN: "SourceCharacter stamps feet in frustration.",
            RU: "SourceCharacter раздраженно топает ногами.",
            UA: "SourceCharacter сердито тупотить ногами.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
