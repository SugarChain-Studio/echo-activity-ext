import { ActivityManager } from "../../activityForward";

/**
 * 道具切换
 * @param {string} item1 - 道具名称 1
 * @param {string} item2 - 道具名称 2
 */ // @ts-ignore
function shakeTail(player, itemgroup, item1, item2) {
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            if (InventoryGet(player, itemgroup).Asset.Name === item1) {
                const propColor = InventoryGet(player, itemgroup).Color;

                InventoryWear(player, item2, itemgroup, propColor);
                ChatRoomCharacterUpdate(player); // Update appearance
            } else if (InventoryGet(player, itemgroup).Asset.Name === item2) {
                const propColor = InventoryGet(player, itemgroup).Color;

                InventoryWear(player, item1, itemgroup, propColor);
                ChatRoomCharacterUpdate(player); // Update appearance
            }
        }, 200 * i);
    }
}

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "摇晃尾巴",
            Prerequisite: ["TargetHasTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "TailStraps", "穿戴式猫尾镜像_Luzi");
                if (!asset) return;
                shakeTail(player, "TailStraps", "TailStrap", "穿戴式猫尾镜像_Luzi");
                shakeTail(player, "TailStraps", "PuppyTailStrap", "穿戴式狗尾镜像_Luzi");
                shakeTail(player, "TailStraps", "PuppyTailStrap1", "穿戴式软小狗尾镜像_Luzi");
                shakeTail(player, "TailStraps", "KittenTailStrap1", "穿戴式浅色猫尾镜像_Luzi");
                shakeTail(player, "TailStraps", "KittenTailStrap2", "小型穿戴式软猫尾镜像_Luzi");
                shakeTail(player, "TailStraps", "FoxTailStrap1", "FoxTailStrap2");
                shakeTail(player, "TailStraps", "WolfTailStrap1", "大型穿戴式狼尾镜像_Luzi");
                shakeTail(player, "TailStraps", "WolfTailStrap2", "小型穿戴式狼尾镜像_Luzi");
                shakeTail(player, "TailStraps", "WolfTailStrap3", "白色穿戴式狼尾镜像_Luzi");
                shakeTail(player, "TailStraps", "DragonTailStrap2Left", "DragonTailStrap2Right");
            }
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃尾巴",
            EN: "Wag Tail",
            RU: "Вилять хвостом",
        },
        dialog: {
            CN: "SourceCharacter 摇晃 PronounPossessive 的尾巴.",
            EN: "SourceCharacter wags PronounPossessive tail.",
            RU: "SourceCharacter виляет хвостом.",
        },
    },
    {
        activity: {
            Name: "摇晃耳朵",
            Prerequisite: [(_prereq, _acting, acted, _group) => !!InventoryGet(acted, "HairAccessory2")],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemEars"],
        },
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "HairAccessory2", "黑猫耳镜像_Luzi");
                if (!asset) return;
                shakeTail(player, "HairAccessory2", "KittenEars1", "黑猫耳镜像_Luzi");
            }
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃耳朵",
            EN: "Wag Ears",
            RU: "Вилять ушами",
            UA: "Махати вухами",
        },
        dialog: {
            CN: "SourceCharacter 摇晃 PronounPossessive 的耳朵.",
            EN: "SourceCharacter wags PronounPossessive's ears.",
            RU: "SourceCharacter виляет ушами.",
            UA: "SourceCharacter махає вухами.",
        },
    },
    {
        activity: {
            Name: "竖起尾巴",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "竖起尾巴",
            EN: "Raise Tail",
            RU: "Поднять Хвост",
            UA: "Підняти хвіст",
        },
        dialogSelf: {
            CN: "SourceCharacter的尾巴竖了起来.",
            EN: "SourceCharacter raises PronounPossessive tail.",
            RU: "SourceCharacter поднимает свой хвост.",
            UA: "SourceCharacter припіднімає свій хвіст.",
        },
    },
    {
        activity: {
            Name: "炸毛",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Bite",
        labelSelf: {
            CN: "炸毛",
            EN: "Puff Up",
            RU: "Распушиться",
            UA: "Насторожитись",
        },
        dialogSelf: {
            CN: "SourceCharacter弓起后背, 身体的毛发立了起来, 发出嘶的声音.",
            EN: "SourceCharacter arches back, body hair stands up, emitting a hissing sound.",
            RU: "Волосы SourceCharacter встают дыбом пока SourceCharacter шипит, выгибая спину.",
            UA: "SourceCharacter насторожує своє волосся на тілі як лунає гучний звук шипіння.",
        },
    },
    {
        activity: {
            Name: "舔尾巴",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "MasturbateTongue",
        label: {
            CN: "舔尾巴",
            EN: "Lick Tail",
            RU: "Облизать Хвост",
            UA: "Вилизати хвіст",
        },
        dialog: {
            CN: "SourceCharacter舔TargetCharacter的尾巴.",
            EN: "SourceCharacter licks DestinationCharacter tail.",
            RU: "SourceCharacter облизывает хвост TargetCharacter.",
            UA: "SourceCharacter вилизує хвіст TargetCharacter.",
        },
        labelSelf: {
            CN: "舔尾巴",
            EN: "Lick Tail",
            RU: "Вылизать Хвост",
            UA: "Вилизати хвіст",
        },
        dialogSelf: {
            CN: "SourceCharacter舔自己的尾巴.",
            EN: "SourceCharacter licks own tail.",
            RU: "SourceCharacter вылизывает собственный хвост.",
            UA: "SourceCharacter вилизує свій хвіст.",
        },
    },
    {
        activity: {
            Name: "轻抚尾巴",
            Prerequisite: ["TargetHasTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Caress",
        label: {
            CN: "轻抚尾巴",
            EN: "Gently Stroke Tail",
            RU: "Нежно Погладить Хвостик",
            UA: "Ніжно погладити хвіст",
        },
        dialog: {
            CN: "SourceCharacter轻抚TargetCharacter的尾巴.",
            EN: "SourceCharacter gently strokes DestinationCharacter tail.",
            RU: "SourceCharacter нежно гладит TargetCharacter за хвостик.",
            UA: "SourceCharacter ніжно гладить хвіст TargetCharacter.",
        },
        labelSelf: {
            CN: "轻抚尾巴",
            EN: "Gently Stroke Tail",
            RU: "Нежно Подрочить Хвостик",
            UA: "Ніжно погладити хвіст",
        },
        dialogSelf: {
            CN: "SourceCharacter轻抚PronounPossessive的尾巴.",
            EN: "SourceCharacter gently strokes PronounPossessive's tail.",
            RU: "SourceCharacter нежно дрочит свой хвостик.",
            UA: "SourceCharacter ніжно погдаджує свій свіст.",
        },
    },
    {
        activity: {
            Name: "尾巴叼在嘴里",
            Prerequisite: ["TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Kiss",
        label: {
            CN: "尾巴叼在嘴里",
            EN: "Hold Tail in Mouth",
            RU: "Взять Хвост в Рот",
            UA: "Тримати хвіст в роті",
        },
        dialog: {
            CN: "SourceCharacter叼起TargetCharacter的尾巴.",
            EN: "SourceCharacter holds DestinationCharacter tail in mouth.",
            RU: "SourceCharacter сует хвост TargetCharacter себе в рот.",
            UA: "SourceCharacter всовує хвіст TargetCharacter собі в рот і тримає ніжно.",
        },
        labelSelf: {
            CN: "尾巴叼在嘴里",
            EN: "Hold Tail in Mouth",
            RU: "Взять Хвост в Рот",
            UA: "Тримати хвіст в роті",
        },
        dialogSelf: {
            CN: "SourceCharacter叼起自己的尾巴.",
            EN: "SourceCharacter holds own tail in mouth.",
            RU: "SourceCharacter сует собственный хвост себе в рот.",
            UA: "SourceCharacter всовує і тримає свій хвіст в роті.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
