import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "挥手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: "Slap",
        label: {
            CN: "挥手",
            EN: "Wave Hand",
            RU: "Помахать Рукой",
            UA: "Помахати рукою",
        },
        dialog: {
            CN: "SourceCharacter向TargetCharacter挥手.",
            EN: "SourceCharacter waves hand at TargetCharacter.",
            RU: "SourceCharacter машет рукой в сторону TargetCharacter.",
            UA: "SourceCharacter махає рукою в сторону TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "伸出手",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
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
            CN: "SourceCharacter伸出自己的手.",
            EN: "SourceCharacter reaches out own hand.",
            RU: "SourceCharacter протягивает руку.",
            UA: "SourceCharacter протягує свою руку.",
        },
    },
    {
        activity: {
            Name: "手托起下巴",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemNeck"],
        },
        useImage: "Caress",
        label: {
            CN: "手托起下巴",
            EN: "Hand under Chin",
            RU: "Взять за Подбородок",
            UA: "Руку на підборідок",
        },
        dialog: {
            CN: "SourceCharacter用手托起TargetCharacter的下巴.",
            EN: "SourceCharacter places hand under DestinationCharacter chin.",
            RU: "SourceCharacter берет TargetCharacter рукой за подбородок.",
            UA: "SourceCharacter протягує свою руку ставиши на підборідок TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "弹额头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Pinch",
        label: {
            CN: "弹额头",
            EN: "Flick Forehead",
            RU: "Поставить Щелбан",
            UA: "Замахнути пальцем в лоб",
        },
        dialog: {
            CN: "SourceCharacter弹了一下TargetCharacter的额头.",
            EN: "SourceCharacter flicks DestinationCharacter forehead.",
            RU: "SourceCharacter ставит щелбан в лоб TargetCharacter.",
            UA: "SourceCharacter замахує пальцем в лоб TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "拍头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
        },
        useImage: "Slap",
        label: {
            CN: "拍头",
            EN: "Hit The Head",
            RU: "Ударить по Голове",
            UA: "Вдарити по голові",
        },
        dialog: {
            CN: "SourceCharacter拍打TargetCharacter的头.",
            EN: "SourceCharacter hits DestinationCharacter head.",
            RU: "SourceCharacter бьет TargetCharacter по голове.",
            UA: "SourceCharacter б'є по голові TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "戳手臂",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemArms"],
            TargetSelf: true,
        },
        useImage: "Caress",
        label: {
            CN: "戳手臂",
            EN: "Poke Arm",
            RU: "Тыкнуть в Руку",
            UA: "Тицяти руку",
        },
        dialog: {
            CN: "SourceCharacter戳了戳TargetCharacter的手臂.",
            EN: "SourceCharacter pokes DestinationCharacter arm.",
            RU: "SourceCharacter тыкает TargetCharacter в руку.",
            UA: "SourceCharacter тицяє руку TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "摇晃手臂",
            Prerequisite: ["UseHands"],
            MaxProgress: 50,
            Target: ["ItemArms"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃手臂",
            EN: "Shake Arms",
            RU: "Трясти за Плечи",
            UA: "Трусити руки",
        },
        dialog: {
            CN: "SourceCharacter摇晃TargetCharacter的手臂.",
            EN: "SourceCharacter shakes DestinationCharacter arms.",
            RU: "SourceCharacter трясет TargetCharacter за плечи .",
            UA: "SourceCharacter трусить руки TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "轻推",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        useImage: "Slap",
        label: {
            CN: "轻推",
            EN: "Light Push",
            RU: "Легонько Толкнуть",
            UA: "Ніжно штовхнути",
        },
        dialog: {
            CN: "SourceCharacter用手轻推TargetCharacter的身体.",
            EN: "SourceCharacter lightly pushes DestinationCharacter body with hand.",
            RU: "SourceCharacter легонько толкает TargetCharacter",
            UA: "SourceCharacter легенько штовхає TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "扭动手腕",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHands"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "扭动手腕",
            EN: "Twist Wrists",
            RU: "Вращать Кистями",
            UA: "Скрутити зап'ястя",
        },
        dialogSelf: {
            CN: "SourceCharacter扭动PronounPossessive的手腕.",
            EN: "SourceCharacter twists PronounPossessive wrists.",
            RU: "SourceCharacter вращает кистями.",
            UA: "SourceCharacter скручує собі зап'ястя.",
        },
    },
    {
        activity: {
            Name: "掀开裙子",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
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
            Name: "拉扯衣角",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemPelvis"],
        },
        useImage: "Pull",
        label: {
            CN: "拉扯衣角",
            EN: "Tug Clothes",
            RU: "Потянуть за Одежду",
            UA: "Тягнути одяг",
        },
        dialog: {
            CN: "SourceCharacter用手拉扯TargetCharacter的衣角.",
            EN: "SourceCharacter tugs at DestinationCharacter clothes.",
            RU: "SourceCharacter тянет TargetCharacter за одежду.",
            UA: "SourceCharacter тягне TargetCharacter за одяг.",
        },
    },
    {
        activity: {
            Name: "撩头发",
            Prerequisite: ["UseArms", "UseHands"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemHood"],
        },
        useImage: "Caress",
        labelSelf: {
            CN: "撩头发",
            EN: "Toss Hair",
            RU: "Поправить Волосы",
            UA: "Підкинути волосся",
        },
        dialogSelf: {
            CN: "SourceCharacter撩起头发挂在耳边.",
            EN: "SourceCharacter tosses PronounPossessive hair, letting it hang behind PronounPossessive ears.",
            RU: "SourceCharacter поправляет волосы, заводя их за ухо.",
            UA: "SourceCharacter Підкридує своє волосся за PronounPossessive вухами.",
        },
    },
    {
        activity: {
            Name: "盖住耳朵",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemEars"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "盖住耳朵",
            EN: "Cover Ears",
            RU: "Закрыть Уши",
            UA: "Закрити вуха",
        },
        dialog: {
            CN: "SourceCharacter用手盖住了TargetCharacter的耳朵.",
            EN: "SourceCharacter covers DestinationCharacter ears with hands.",
            RU: "SourceCharacter прикрывает уши TargetCharacter руками.",
            UA: "SourceCharacter закриває вуха TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "遮住眼睛",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
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
            CN: "SourceCharacter用手遮住了TargetCharacter的眼睛.",
            EN: "SourceCharacter covers DestinationCharacter eyes with hands.",
            RU: "SourceCharacter прикрывает глазки TargetCharacter своими руками.",
            UA: "SourceCharacter закриває очі TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "拽链子",
            Prerequisite: ["UseHands", "UseArms", "Luzi_TargetHasLeash"],
            MaxProgress: 50,
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
