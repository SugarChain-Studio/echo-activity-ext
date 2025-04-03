import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "鱼尾揉脸",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾揉脸",
            EN: "Rub Face with Tail",
            UA: "Терти лице риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter rubs DestinationCharacter face with a fish tail.",
            UA: "SourceCharacter тре лице TargetCharacter своїм риб'ячим хвостом.",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的脸.",
            EN: "SourceCharacter rubs PronounPossessive face with a fish tail.",
            UA: "SourceCharacter тре своє лице риб'ячим хвостом.",
        },
    },
    {
        activity: {
            Name: "鱼尾戳脸",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾戳脸",
            EN: "Fish Tail Pokes Face",
            UA: "Тицьнути лице риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes DestinationCharacter face with a fish tail.",
            UA: "SourceCharacter тицяє лице TargetCharacter риб'ячим хвостом.",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾戳了戳PronounPossessive自己的脸.",
            EN: "SourceCharacter pokes PronounPossessive face with a fish tail.",
            UA: "SourceCharacter тицяє собі лице своїм риб'ячим хвостом.",
        },
    },
    {
        activity: {
            Name: "鱼尾抚脸",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾抚脸",
            EN: "Fish Tail Caresses Face",
            UA: "Гладити лице риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾轻抚TargetCharacter的脸颊.",
            EN: "SourceCharacter gently strokes DestinationCharacter cheek with a fish tail.",
            UA: "SourceCharacter ніжно гладить лице TargetCharacter своїм риб'ячим хвостом.",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾轻抚PronounPossessive自己的脸颊.",
            EN: "SourceCharacter gently strokes PronounPossessive cheek with a fish tail.",
            UA: "SourceCharacter ніжно гладить своє лице риб'ячим хвостом.",
        },
    },
    {
        activity: {
            Name: "鱼尾担膝盖",
            Prerequisite: ["Luzi_Has鱼鱼尾", "TargetKneeling"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾担膝盖",
            EN: "Fish Tail Rests on Knee",
            UA: "Покласти риб'ячий хвіст на стегна",
        },
        dialog: {
            CN: "SourceCharacter将鱼尾担在了TargetCharacter的膝盖上.",
            EN: "SourceCharacter rests PronounPossessive fish tail on DestinationCharacter thighs.",
            UA: "SourceCharacter кладе свій риб'ячий хвіст на стегна TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "鱼尾揉乳房",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemBreast"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾揉乳房",
            EN: "Fish Tail Rubs Chest",
            UA: "Терти груди риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾揉了揉TargetCharacter的乳房.",
            EN: "SourceCharacter rubs DestinationCharacter breasts with PronounPossessive fish tail.",
            UA: "SourceCharacter тре груди TargetCharacter своїм риб'ячим хвостом.",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾揉了揉PronounPossessive自己的乳房.",
            EN: "SourceCharacter rubs PronounPossessive own breasts with PronounPossessive fish tail.",
            UA: "SourceCharacter тре свої груди своїм риб'ячим хвостом.",
        },
    },
    {
        activity: {
            Name: "鱼尾扇风",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾扇风",
            EN: "Fish Tail Fans",
            UA: "Подути риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾给TargetCharacter的脸扇了扇风.",
            EN: "SourceCharacter fanned DestinationCharacter face with PronounPossessive fish tail.",
            UA: "SourceCharacter піддуває лице TargetCharacter своїм риб'ячим хвостом.",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾给自己扇了扇风.",
            EN: "SourceCharacter fanned PronounPossessive own face with fish tail.",
            UA: "SourceCharacter піддуває собі лице своїм риб'ячим хвостом.",
        },
    },
    {
        activity: {
            Name: "鱼尾戳乳头",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemNipples"],
            TargetSelf: true,
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾戳乳头",
            EN: "Fish Tail Pokes Nipple",
            UA: "Тикати в сосок риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾戳了戳TargetCharacter的乳头.",
            EN: "SourceCharacter pokes DestinationCharacter nipples with PronounPossessive fish tail.",
            UA: "SourceCharacter тицяє своїм хвостом в соски TargetCharacter.",
        },
        dialogSelf: {
            CN: "SourceCharacter用鱼尾戳了戳自己的乳头.",
            EN: "SourceCharacter pokes PronounPossessive own nipples with PronounPossessive fish tail.",
            UA: "SourceCharacter тицяє собі в соски своїм хвостом.",
        },
    },
    {
        activity: {
            Name: "鱼尾碰手",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾碰手",
            EN: "Fish Tail Touches Hand",
            UA: "торкунись руки риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter将鱼尾踝搭在了TargetCharacter的手心上.",
            EN: "SourceCharacter touches TargetCharacter with PronounPossessive fish tail.",
            UA: "SourceCharacter TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "鱼尾抚弄大腿",
            Prerequisite: ["Luzi_Has鱼鱼尾"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: ["ItemLegs", "MermaidTail"],
        label: {
            CN: "鱼尾抚弄大腿",
            EN: "Fish Tail Strokes Thigh",
            UA: "Гладити стегно риб'ячим хвостом",
        },
        dialog: {
            CN: "SourceCharacter用鱼尾抚弄TargetCharacter的大腿.",
            EN: "SourceCharacter strokes DestinationCharacter thigh with PronounPossessive fish tail.",
            UA: "SourceCharacter глядить стегна TargetCharacter своїм риб'ячим хвостом.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
