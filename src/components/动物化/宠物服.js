import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "宠物服爬到脚边",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服爬到脚边",
            EN: "Crawl to Feet Like a Pet",
            RU: "Игриво Ползти к Ногам",
            UA: "Повзти на чотирьох",
        },
        dialog: {
            CN: "SourceCharacter爬到TargetCharacter脚边.",
            EN: "SourceCharacter crawls to TargetCharacter's feet like a pet.",
            RU: "SourceCharacter игриво ползет к ногам TargetCharacter.",
            UA: "SourceCharacter повзе на чотирьох до TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "宠物服蹭小腿",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemFeet"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服蹭小腿",
            EN: "Rub Legs Like a Pet",
            RU: "Игриво Тереться об Ляшки",
            UA: "Тертись об стегна",
        },
        dialog: {
            CN: "SourceCharacter蹭TargetCharacter的腿.",
            EN: "SourceCharacter rubs against TargetCharacter's legs like a pet.",
            RU: "SourceCharacter игриво трется головой об ляжки TargetCharacter.",
            UA: "SourceCharacter грайливо треться об стегна TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "宠物服蹭大腿",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemLegs"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服蹭大腿",
            EN: "Rub Legs Like a pet",
            RU: "Игриво Тереться об Ноги",
            UA: "Тертись об ноги",
        },
        dialog: {
            CN: "SourceCharacter蹭TargetCharacter的腿.",
            EN: "SourceCharacter rubs against TargetCharacter's legs like a pet.",
            RU: "SourceCharacter игриво трется об ноги TargetCharacter.",
            UA: "SourceCharacter грайливо треться об ноги TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "宠物服趴下",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "宠物服趴下",
            EN: "Lie Down Like a Pet",
            RU: "На Четвереньки",
            UA: "Стати на чотирьох",
        },
        dialogSelf: {
            CN: "SourceCharacter四肢着地趴在地上.",
            EN: "SourceCharacter lies down on all fours like a pet.",
            RU: "SourceCharacter игриво ложится на четвереньки.",
            UA: "SourceCharacter грайливо падає на всі чотири.",
        },
    },
    {
        activity: {
            Name: "宠物服跪立",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemLegs"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "宠物服跪立",
            EN: "Kneel Like a Pet",
            RU: "Встать на Колени",
            UA: "Всістись на коліна",
        },
        dialogSelf: {
            CN: "SourceCharacter手臂离地跪立.",
            EN: "SourceCharacter kneels with PronounPossessive arms off the ground like a pet.",
            RU: "SourceCharacter поднимается с четверенек на коленки.",
            UA: "SourceCharacter всідається на всі чотири ставлячи руки між ногами як тваринка.",
        },
    },
    {
        activity: {
            Name: "宠物服扑",
            Prerequisite: ["NeedPetSuit"],
            MaxProgress: 50,
            Target: ["ItemArms"],
        },
        useImage: "Wiggle",
        label: {
            CN: "宠物服扑",
            EN: "Pounces Like a Pet",
            RU: "Игриво Наброситься",
            UA: "Підстрибувати",
        },
        dialog: {
            CN: "SourceCharacter扑到TargetCharacter身上.",
            EN: "SourceCharacter pounces on TargetCharacter like a pet.",
            RU: "SourceCharacter игриво набрасывается на TargetCharacter.",
            UA: "SourceCharacter грайливо накидається на TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
