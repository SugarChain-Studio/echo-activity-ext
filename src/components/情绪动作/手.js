import { ActivityManager } from "../../activityForward";
import { Path } from "../../resouce";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "挥手致意",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 0,
            Target: ["ItemHands"],
        },
        useImage: "Slap",
        label: {
            CN: "挥手致意",
            EN: "Wave Greeting",
            RU: "Приветственный жест",
            UA: "Привітальний жест",
        },
        dialog: {
            CN: "SourceCharacter朝TargetCharacter的方向友好地挥了挥手。",
            EN: "SourceCharacter gives DestinationCharacter a friendly wave.",
            RU: "SourceCharacter дружелюбно машет рукой TargetCharacter.",
            UA: "SourceCharacter дружньо махає рукою TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "伸出手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 10,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: "Caress",
        labelSelf: {
            CN: "伸出手",
            EN: "Reach Out Hand",
            RU: "Протянуть Руку",
            UA: "Тягнутись рукою",
        },
        dialogSelf: {
            CN: "SourceCharacter缓缓伸出手，掌心向上。",
            EN: "SourceCharacter slowly extends a hand, palm upward.",
            RU: "SourceCharacter медленно протягивает руку ладонью вверх.",
            UA: "SourceCharacter повільно простягає руку долонею догори.",
        },
    },
    {
        activity: {
            Name: "轻抬下巴",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 60,
            Target: ["ItemNeck"],
        },
        useImage: "Caress",
        label: {
            CN: "轻抬下巴",
            EN: "Chin Lift",
            RU: "Приподнять подбородок",
            UA: "Підняти підборіддя",
        },
        dialog: {
            CN: "SourceCharacter用指尖轻轻托起TargetCharacter的下巴。",
            EN: "SourceCharacter gently lifts DestinationCharacter chin with fingertips.",
            RU: "SourceCharacter нежно приподнимает подбородок TargetCharacter кончиками пальцев.",
            UA: "SourceCharacter ніжно піднімає підборіддя TargetCharacter кінчиками пальців.",
        },
    },
    {
        activity: {
            Name: "轻弹额头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 30,
            Target: ["ItemHead"],
        },
        useImage: "Pinch",
        label: {
            CN: "轻弹额头",
            EN: "Forehead Flick",
            RU: "Шутливый щелбан",
            UA: "Жартівливий лобовий клац",
        },
        dialog: {
            CN: "SourceCharacter轻弹了一下TargetCharacter的额头。",
            EN: "SourceCharacter gives DestinationCharacter forehead a light flick.",
            RU: "SourceCharacter делает лёгкий щелбан по лбу TargetCharacter.",
            UA: "SourceCharacter робить легкий клац по лобу TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "轻拍脑袋",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 20,
            Target: ["ItemHead"],
        },
        useImage: "Slap",
        label: {
            CN: "轻拍脑袋",
            EN: "Head Pat",
            RU: "Похлопывание по голове",
            UA: "Поплескування по голові",
        },
        dialog: {
            CN: "SourceCharacter轻拍TargetCharacter的脑袋。",
            EN: "SourceCharacter gives DestinationCharacter head a gentle pat.",
            RU: "SourceCharacter слегка похлопывает TargetCharacter по голове.",
            UA: "SourceCharacter легко поплескує TargetCharacter по голові.",
        },
    },
    {
        activity: {
            Name: "戳脸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 0,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳脸",
            EN: "Poke Face",
            RU: "Тыкнуть в Лицо",
            UA: "Тицяти обличчя.",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes DestinationCharacter face with the tip of PronounPossessive finger.",
            RU: "SourceCharacter тыкает в лицо TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в обличчя.",
        },
    },
    {
        activity: {
            Name: "戳手臂",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 0,
            Target: ["ItemArms"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳手臂",
            EN: "Poke Arm",
            RU: "Тыкнуть в Руку",
            UA: "Тицяти руку",
        },
        dialog: {
            CN: "SourceCharacter戳了戳TargetCharacter的手臂.",
            EN: "SourceCharacter pokes DestinationCharacter arm with the tip of PronounPossessive finger.",
            RU: "SourceCharacter тыкает в руку TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в руку.",
        },
    },
    {
        activity: {
            Name: "戳胸部",
            Prerequisite: ["UseHands", "UseArms", "Luzi_TargetHasBreast"],
            MaxProgress: 30,
            Target: ["ItemBreast"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳胸部",
            EN: "Poke Breast",
            RU: "Тыкнуть в Грудь",
            UA: "Тицяти груди",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的胸部.",
            EN: "SourceCharacter pokes DestinationCharacter breast with the tip of PronounPossessive finger.",
            RU: "SourceCharacter тыкает в грудь TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в груди.",
        },
    },
    {
        activity: {
            Name: "戳乳头",
            Prerequisite: ["UseHands", "UseArms", "Luzi_TargetHasBreast", "Luzi_ActedZoneNaked"],
            MaxProgress: 60,
            Target: ["ItemNipples"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳乳头",
            EN: "Poke Nipple",
            RU: "Тыкнуть в Сосок",
            UA: "Тицяти сосок",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的乳头.",
            EN: "SourceCharacter pokes DestinationCharacter nipple with the tip of PronounPossessive finger.",
            RU: "SourceCharacter тыкает в сосок TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в сосок.",
        },
    },
    {
        activity: {
            Name: "戳阴部",
            Prerequisite: ["UseHands", "UseArms", "Luzi_TargetFemale", "Luzi_ActedZoneNaked"],
            MaxProgress: 60,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳阴部",
            EN: "Poke Groin",
            RU: "Тыкнуть в Промежность",
            UA: "Тицяти в пах",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的阴部.",
            EN: "SourceCharacter pokes DestinationCharacter groin with the tip of PronounPossessive finger.",
            RU: "SourceCharacter тыкает в промежность TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в пах.",
        },
    },
    {
        activity: {
            Name: "戳阴蒂",
            Prerequisite: ["UseHands", "UseArms", "Luzi_TargetFemale", "Luzi_ActedZoneNaked"],
            MaxProgress: 80,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳阴蒂",
            EN: "Poke Clitoris",
            RU: "Тыкнуть в Клиторальное Кольцо",
            UA: "Тицяти в клітор",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的阴蒂.",
            EN: "SourceCharacter pokes DestinationCharacter clitoris with the tip of PronounPossessive finger.",
            RU: "SourceCharacter тыкает пальцем в клитор TargetCharacter.",
            UA: "SourceCharacter тицяє клітор TargetCharacter кінчиком пальця.",
        },
    },
    {
        activity: {
            Name: "戳臀部",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 40,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: Path.resolve("activities/poke.png"),
        label: {
            CN: "戳臀部",
            EN: "Poke Butt",
            RU: "Тыкнуть в Попу",
            UA: "Тицяти в дупу",
        },
        dialog: {
            CN: "SourceCharacter用指尖戳了戳TargetCharacter的臀部.",
            EN: "SourceCharacter pokes DestinationCharacter butt with a finger.",
            RU: "SourceCharacter тыкает в попу TargetCharacter.",
            UA: "SourceCharacter тицяє TargetCharacter в дупу.",
        },
    },
    {
        activity: {
            Name: "摇晃手臂",
            Prerequisite: ["UseHands"],
            MaxProgress: 10,
            Target: ["ItemArms"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃手臂",
            EN: "Arm Shake",
            RU: "Потрясти за руки",
            UA: "Потрусити руками",
        },
        dialog: {
            CN: "SourceCharacter轻轻摇晃着TargetCharacter的手臂。",
            EN: "SourceCharacter gently shakes DestinationCharacter arms.",
            RU: "SourceCharacter аккуратно трясёт TargetCharacter за руки.",
            UA: "SourceCharacter обережно трусить руками TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "轻推",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 10,
            Target: ["ItemTorso"],
        },
        useImage: "Slap",
        label: {
            CN: "轻推身体",
            EN: "Gentle Nudge",
            RU: "Лёгкий толчок",
            UA: "Легенький поштовх",
        },
        dialog: {
            CN: "SourceCharacter用手轻轻推了推TargetCharacter的身体。",
            EN: "SourceCharacter gives DestinationCharacter a light nudge with hand.",
            RU: "SourceCharacter слегка подталкивает TargetCharacter.",
            UA: "SourceCharacter злегка підштовхує TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "扭动手腕",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 10,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "扭动手腕",
            EN: "Twist Wrists",
            RU: "Вращение запястьями",
            UA: "Крутіння зап'ястями",
        },
        dialogSelf: {
            CN: "SourceCharacter扭动着自己的手腕。",
            EN: "SourceCharacter twists own wrists.",
            RU: "SourceCharacter вращает своими запястьями.",
            UA: "SourceCharacter крутить своїми зап'ястями.",
        },
    },
    {
        activity: {
            Name: "掀开裙子",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 30,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "MasturbateHand",
        label: {
            CN: "掀开裙子",
            EN: "Lift Skirt",
            RU: "Приподнять Юбку",
            UA: "Підняти спідницю",
        },
        dialog: {
            CN: "SourceCharacter掀开TargetCharacter的裙子.",
            EN: "SourceCharacter lifts DestinationCharacter skirt.",
            RU: "SourceCharacter приподнимает юбку TargetCharacter.",
            UA: "SourceCharacter піднімає спідничку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "轻扯衣角",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 0,
            Target: ["ItemPelvis"],
        },
        useImage: "Pull",
        label: {
            CN: "轻扯衣角",
            EN: "Cloth Tug",
            RU: "Потянуть за край одежды",
            UA: "Потягнути за край одягу",
        },
        dialog: {
            CN: "SourceCharacter用手指轻轻拽了拽TargetCharacter的衣角。",
            EN: "SourceCharacter gently tugs at the hem of DestinationCharacter clothes.",
            RU: "SourceCharacter осторожно тянет TargetCharacter за край одежды.",
            UA: "SourceCharacter ніжно потягує TargetCharacter за край одягу.",
        },
    },
    {
        activity: {
            Name: "拨弄发丝",
            Prerequisite: ["UseArms", "UseHands"],
            MaxProgress: 10,
            Target: [],
            TargetSelf: ["ItemHood"],
        },
        useImage: "Caress",
        labelSelf: {
            CN: "拨弄发丝",
            EN: "Hair Flip",
            RU: "Поправить причёску",
            UA: "Поправити зачіску",
        },
        dialogSelf: {
            CN: "SourceCharacter纤指轻撩，将几缕发丝别至耳后。",
            EN: "SourceCharacter flips hair back with slender fingers, tucking strands behind ears.",
            RU: "SourceCharacter изящно поправляет причёску, убирая пряди за уши.",
            UA: "SourceCharacter витончено поправляє зачіску, закидаючи пасма за вуха.",
        },
    },
    {
        activity: {
            Name: "盖住耳朵",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 10,
            Target: ["ItemEars"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "盖住耳朵",
            EN: "Ear Muff",
            RU: "Заткнуть уши",
            UA: "Затулити вуха",
        },
        dialog: {
            CN: "SourceCharacter双手轻掩，盖住了TargetCharacter的耳朵。",
            EN: "SourceCharacter softly covers DestinationCharacter ears with both hands.",
            RU: "SourceCharacter нежно прикрывает уши TargetCharacter ладонями.",
            UA: "SourceCharacter ніжно затуляє вуха TargetCharacter долонями.",
        },
    },
    {
        activity: {
            Name: "遮住眼睛",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 10,
            Target: ["ItemHead"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "遮住眼睛",
            EN: "Cover Eyes",
            RU: "Прикрыть Глазки",
            UA: "Прикрити очі",
        },
        dialog: {
            CN: "SourceCharacter掌心轻覆，遮住了TargetCharacter的双眼。",
            EN: "SourceCharacter places palms over DestinationCharacter eyes gently.",
            RU: "SourceCharacter ласково прикрывает глазки TargetCharacter ладонями.",
            UA: "SourceCharacter ніжно закриває очі TargetCharacter долонями.",
        },
    },
    {
        activity: {
            Name: "拽链子",
            Prerequisite: ["UseHands", "UseArms", "Luzi_TargetHasLeash"],
            MaxProgress: 30,
            Target: ["ItemNeck"],
        },
        useImage: "MasturbateHand",
        label: {
            CN: "拽链子",
            EN: "Pull Chain",
            RU: "Потянуть за Поводок",
            UA: "Тягнути ланцюг",
        },
        dialog: {
            CN: "SourceCharacter拽TargetCharacter的链子.",
            EN: "SourceCharacter pulls DestinationCharacter chain.",
            RU: "SourceCharacter тянет TargetCharacter за поводок.",
            UA: "SourceCharacter тягне TargetCharacter за ланцюг.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
