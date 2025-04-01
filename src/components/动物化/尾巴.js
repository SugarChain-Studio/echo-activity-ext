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
            Prerequisite: ["Luzi_TargetHasTail"],
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
            CN: "SourceCharacter轻轻摇晃着尾巴。",
            EN: "SourceCharacter gently wags PronounPossessive tail.",
            RU: "SourceCharacter нежно виляет хвостом.",
            UA: "SourceCharacter ніжно виляє хвостом.",
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
            CN: "SourceCharacter轻轻摇晃着耳朵。",
            EN: "SourceCharacter gently wiggles PronounPossessive ears.",
            RU: "SourceCharacter слегка шевелит ушами.",
            UA: "SourceCharacter ледько поводить вухами.",
        },
    },
    {
        activity: {
            Name: "竖起尾巴",
            Prerequisite: ["Luzi_TargetHasCatTail"],
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
            CN: "SourceCharacter竖起尾巴。",
            EN: "SourceCharacter raises PronounPossessive tail.",
            RU: "SourceCharacter поднимает хвост。",
            UA: "SourceCharacter піднімає хвіст。",
        },
    },
    {
        activity: {
            Name: "炸毛",
            Prerequisite: ["Luzi_TargetHasCatTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "炸毛",
            EN: "Fur Puffed",
            RU: "Шерсть Дыбом",
            UA: "Шерсть Диби",
        },
        dialogSelf: {
            CN: "SourceCharacter猛地弓起后背，全身毛发炸开，发出威胁的嘶嘶声。",
            EN: "SourceCharacter suddenly arches PronounPossessive back, fur standing on end while emitting a threatening hiss.",
            RU: "SourceCharacter резко выгибает спину, шерсть встаёт дыбом, сопровождая это угрожающим шипением.",
            UA: "SourceCharacter різко вигинає спину, шерсть стає дибки, супроводжуючи це загрозливим шипінням.",
        },
    },
    {
        activity: {
            Name: "舔尾巴",
            Prerequisite: ["Luzi_TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "舔尾巴",
            EN: "Lick Tail",
            RU: "Облизать Хвост",
            UA: "Вилизати хвіст",
        },
        dialog: {
            CN: "SourceCharacter温柔地舔舐着TargetCharacter的尾巴，细心地梳理每一根毛发。",
            EN: "SourceCharacter gently licks DestinationCharacter's tail, carefully grooming each strand of fur.",
            RU: "SourceCharacter нежно вылизывает хвост TargetCharacter, тщательно причёсывая каждый волосок.",
            UA: "SourceCharacter ніжно вилизує хвіст TargetCharacter, ретельно причісуючи кожну шерстинку.",
        },
        dialogSelf: {
            CN: "SourceCharacter灵活地弯过身子，开始仔细地舔舐自己的尾巴。",
            EN: "SourceCharacter bends flexibly to attentively groom PronounPossessive own tail.",
            RU: "SourceCharacter гибко изгибается, чтобы тщательно вылизать собственный хвост.",
            UA: "SourceCharacter гнучко згинається, щоб ретельно вилизати свій власний хвіст.",
        },
    },
    {
        activity: {
            Name: "轻抚尾巴",
            Prerequisite: ["Luzi_TargetHasTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "爱抚尾巴",
            EN: "Tail Caress",
            RU: "Ласка Хвоста",
            UA: "Пестощі Хвоста",
        },
        dialog: {
            CN: "SourceCharacter的手指轻柔地顺着TargetCharacter的尾巴滑下，动作充满爱意。",
            EN: "SourceCharacter's fingers glide tenderly along DestinationCharacter's tail in a loving motion.",
            RU: "Пальцы SourceCharacter нежно скользят по хвосту TargetCharacter, полные нежности.",
            UA: "Пальці SourceCharacter ніжно ковзають по хвосту TargetCharacter, сповнені ніжності.",
        },
        dialogSelf: {
            CN: "SourceCharacter惬意地抚摸着自己的尾巴，享受着柔软的触感。",
            EN: "SourceCharacter contentedly strokes PronounPossessive own tail, enjoying its soft texture.",
            RU: "SourceCharacter с удовольствием поглаживает собственный хвост, наслаждаясь его мягкостью.",
            UA: "SourceCharacter із задоволенням пестить свій власний хвіст, насолоджуючись його м'якістю.",
        },
    },
    {
        activity: {
            Name: "衔尾",
            Prerequisite: ["Luzi_TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: "Wiggle",
        label: {
            CN: "衔尾",
            EN: "Tail Holding",
            RU: "Хвост во Рту",
            UA: "Хвіст у Роті",
        },
        dialog: {
            CN: "SourceCharacter轻轻咬住TargetCharacter的尾巴尖，顽皮地拉扯着。",
            EN: "SourceCharacter playfully nips the tip of DestinationCharacter's tail, giving it a gentle tug.",
            RU: "SourceCharacter игриво прикусывает кончик хвоста TargetCharacter, слегка потягивая.",
            UA: "SourceCharacter жартівливо прикушує кінчик хвоста TargetCharacter, злегка потягуючи.",
        },
        dialogSelf: {
            CN: "SourceCharacter蜷成一团，将尾巴末端含在嘴里轻轻啃咬。",
            EN: "SourceCharacter curls up, holding the tip of PronounPossessive tail in mouth with gentle nibbles.",
            RU: "SourceCharacter сворачивается клубком, зажав кончик собственного хвоста во рту и слегка покусывая.",
            UA: "SourceCharacter згортається клубком, тримаючи кінчик власного хвоста в роті і злегка покусуючи.",
        },
    },
    {
        activity: {
            Name: "尾巴缠绕",
            Prerequisite: ["Luzi_TargetHasCatTail"],
            MaxProgress: 50,
            Target: ["ItemArms"],
        },
        useImage: "Wiggle",
        label: {
            CN: "尾巴缠绕",
            EN: "Tail Wrap",
            RU: "Обвить Хвостом",
            UA: "Обхопити Хвостом",
        },
        dialog: {
            CN: "SourceCharacter的尾巴悄悄缠上TargetCharacter的手腕，像一条柔软的绳索。",
            EN: "SourceCharacter's tail coils around DestinationCharacter's wrist like a soft, living rope.",
            RU: "Хвост SourceCharacter нежно обвивает запястье TargetCharacter, словно мягкая верёвка.",
            UA: "Хвіст SourceCharacter ніжно обвиває зап'ястя TargetCharacter, наче м'яка жива мотузка.",
        },
    },
    {
        activity: {
            Name: "尾巴拍打地面",
            Prerequisite: ["Luzi_TargetHasCatTail"],
            MaxProgress: 30,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "尾巴拍打地面",
            EN: "Tail Thumping",
            RU: "Хвост бьёт по полу",
            UA: "Хвіст б'є об підлогу",
        },
        dialogSelf: {
            CN: "SourceCharacter的尾巴焦躁地拍打着地面，发出轻微的啪啪声。",
            EN: "SourceCharacter's tail lashes back and forth impatiently, making soft thumping sounds.",
            RU: "Хвост SourceCharacter нервно бьёт по полу, издавая лёгкие шлепки.",
            UA: "Хвіст SourceCharacter нетерпляче б'є туди-сюди, видаючи тихі ляскітливі звуки.",
        },
    },
    {
        activity: {
            Name: "尾巴炸毛",
            Prerequisite: ["Luzi_TargetHasCatTail"],
            MaxProgress: 20,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "尾巴炸毛",
            EN: "Tail Fluff Up",
            RU: "Хвост Ёжиком",
            UA: "Хвіст Диби",
        },
        dialogSelf: {
            CN: "SourceCharacter的尾巴突然炸开，变得蓬松无比，像一把小扫帚。",
            EN: "SourceCharacter's tail suddenly puffs up, becoming twice its size like a tiny broom.",
            RU: "Хвост SourceCharacter внезапно распушается, становясь вдвое больше, словно маленькая метёлка.",
            UA: "Хвіст SourceCharacter раптом стає дибки, збільшуючись вдвічі, наче маленька мітла.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
