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
    {
        activity: {
            Name: "脚按摩",
            Prerequisite: ["UseFeet", "Luzi_TargetKneelOrAllFours"],
            MaxProgress: 10,
            Target: ["ItemPelvis", "ItemLegs", "ItemBreast"],
        },
        useImage: "Step",
        label: {
            CN: {
                ItemPelvis: "脚按摩小腹",
                ItemLegs: "脚按摩大腿",
                ItemBreast: "脚按摩胸部",
            },
            EN: {
                ItemPelvis: "Foot Massage Lower Abdomen",
                ItemLegs: "Foot Massage Thighs",
                ItemBreast: "Foot Massage Breasts",
            },
        },
        dialog: {
            CN: {
                ItemPelvis: "SourceCharacter用脚轻柔地按摩着DestinationCharacter小腹。",
                ItemLegs: "SourceCharacter用脚轻柔地按摩着DestinationCharacter大腿。",
                ItemBreast: "SourceCharacter用脚轻柔地按摩着DestinationCharacter胸部。",
            },
            EN: {
                ItemPelvis: "SourceCharacter gently massages DestinationCharacter lower abdomen with feet.",
                ItemLegs: "SourceCharacter gently massages DestinationCharacter thighs with feet.",
                ItemBreast: "SourceCharacter gently massages DestinationCharacter breasts with feet.",
            },
        },
    },
    {
        activity: {
            Name: "脚戳",
            Prerequisite: ["UseFeet", "Luzi_IsStanding", "Luzi_TargetKneelOrAllFours"],
            MaxProgress: 10,
            Target: ["ItemBreast", "ItemTorso", "ItemLegs"],
        },
        useImage: "Step",
        label: {
            CN: {
                ItemBreast: "脚戳胸部",
                ItemTorso: "脚戳腹部",
                ItemLegs: "脚戳大腿",
            },
            EN: {
                ItemBreast: "Toe Poke Breasts",
                ItemTorso: "Toe Poke Torso",
                ItemLegs: "Toe Poke Thighs",
            },
        },
        dialog: {
            CN: {
                ItemBreast: "SourceCharacter用脚戳了戳DestinationCharacter的胸部。",
                ItemTorso: "SourceCharacter用脚戳了戳DestinationCharacter的腹部。",
                ItemLegs: "SourceCharacter用脚戳了戳DestinationCharacter的大腿。",
            },
            EN: {
                ItemBreast: "SourceCharacter pokes DestinationCharacter breasts with toe.",
                ItemTorso: "SourceCharacter pokes DestinationCharacter torso with toe.",
                ItemLegs: "SourceCharacter pokes DestinationCharacter thighs with toe.",
            },
        },
    },
    {
        activity: {
            Name: "脚高处戳",
            Prerequisite: ["UseFeet", "Luzi_IsStanding", "Luzi_TargetAllFours"],
            MaxProgress: 10,
            Target: ["ItemMouth", "ItemHead", "ItemNose", "ItemNeck", "ItemEars"],
        },
        useImage: "Step",
        label: {
            CN: {
                ItemMouth: "脚戳嘴巴",
                ItemHead: "脚戳额头",
                ItemNose: "脚戳鼻子",
                ItemNeck: "脚戳脖子",
                ItemEars: "脚戳耳朵",
            },
            EN: {
                ItemMouth: "Toe Poke Mouth",
                ItemHead: "Toe Poke Head",
                ItemNose: "Toe Poke Nose",
                ItemNeck: "Toe Poke Neck",
                ItemEars: "Toe Poke Ears",
            },
        },
        dialog: {
            CN: {
                ItemMouth: "SourceCharacter用脚戳了戳DestinationCharacter的嘴巴。",
                ItemHead: "SourceCharacter用脚戳了戳DestinationCharacter的额头。",
                ItemNose: "SourceCharacter用脚戳了戳DestinationCharacter的鼻子。",
                ItemNeck: "SourceCharacter用脚戳了戳DestinationCharacter的脖子。",
                ItemEars: "SourceCharacter用脚戳了戳DestinationCharacter的耳朵。",
            },
            EN: {
                ItemMouth: "SourceCharacter pokes DestinationCharacter mouth with toe.",
                ItemHead: "SourceCharacter pokes DestinationCharacter head with toe.",
                ItemNose: "SourceCharacter pokes DestinationCharacter nose with toe.",
                ItemNeck: "SourceCharacter pokes DestinationCharacter neck with toe.",
                ItemEars: "SourceCharacter pokes DestinationCharacter ear with toe.",
            },
        },
    },
    {
        activity: {
            Name: "脚戳刺激",
            Prerequisite: ["UseFeet", "Luzi_IsStanding", "Luzi_TargetKneelOrAllFours"],
            MaxProgress: 60,
            Target: ["ItemNipples", "ItemVulva", "ItemVulvaPiercings", "ItemButt"],
        },
        useImage: "Step",
        label: {
            CN: {
                ItemNipples: "脚戳乳头",
                ItemVulva: "脚戳阴部",
                ItemVulvaPiercings: "脚戳阴蒂",
                ItemButt: "脚戳屁股",
            },
            EN: {
                ItemNipples: "Toe Poke Nipples",
                ItemVulva: "Toe Poke Vulva",
                ItemVulvaPiercings: "Toe Poke Clitoris",
                ItemButt: "Toe Poke Butt",
            },
        },
        dialog: {
            CN: {
                ItemNipples: "SourceCharacter用脚戳了戳DestinationCharacter的乳头。",
                ItemVulva: "SourceCharacter用脚戳了戳DestinationCharacter的阴部。",
                ItemVulvaPiercings: "SourceCharacter用脚戳了戳DestinationCharacter的阴蒂。",
                ItemButt: "SourceCharacter用脚戳了戳DestinationCharacter的屁股。",
            },
            EN: {
                ItemNipples: "SourceCharacter pokes DestinationCharacter nipples with toe.",
                ItemVulva: "SourceCharacter pokes DestinationCharacter vulva with toe.",
                ItemVulvaPiercings: "SourceCharacter pokes DestinationCharacter clitoris with toe.",
                ItemButt: "SourceCharacter pokes DestinationCharacter butt with toe.",
            },
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
