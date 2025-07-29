import { sleepFor } from "@sugarch/bc-mod-utility";
import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";
import { ActivityExt } from "../../activityext";

/**@type {Partial<Record<AssetGroupItemName, CustomGroupName[]>>} */
const groupMap = {
    ItemTorso: ["Cloth", "Cloth_笨笨蛋Luzi", "Cloth_笨笨笨蛋Luzi2", "Suit", "Suit_笨笨蛋Luzi"],
    ItemLegs: ["ClothLower", "ClothLower_笨笨蛋Luzi", "ClothLower_笨笨笨蛋Luzi2", "SuitLower", "SuitLower_笨笨蛋Luzi"],
    ItemBreast: ["Bra", "ClothAccessory", "Corset"],
    ItemVulvaPiercings: ["Panties"],
    ItemFeet: ["Socks", "SocksLeft", "SocksRight"],
    ItemBoots: ["Shoes"],
};

/** @type { CustomActivity } */
const activity = ActivityExt.fromTemplateActivity(
    {
        activity: {
            Name: "剪刀剪掉上衣",
            Prerequisite: ["UseHands", "UseArms", Prereqs.Acting.GroupIs("ItemHandheld", "Scissors")],
            MaxProgress: 50,
            Target: ["ItemTorso", "ItemLegs", "ItemBreast", "ItemVulvaPiercings", "ItemFeet", "ItemBoots"],
            TargetSelf: true,
        },
        useImage: ["ItemHandheld", "Scissors"],
        mode: "AnyOnSelf",
        run: async (player, sender, info) => {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;
            await sleepFor(100);

            // 使用动作拓展才会被剪衣服，可以只处理收到消息的情况
            const groups = groupMap[info.ActivityGroup.Name];
            if (groups) {
                player.Appearance = player.Appearance.filter((i) => !groups.includes(i.Asset.Group.Name));
                ChatRoomCharacterUpdate(player);
            }
        },
    },
    {
        CN: {
            ItemTorso: "上衣",
            ItemLegs: "下衣",
            ItemBreast: "胸罩",
            ItemVulvaPiercings: "内裤",
            ItemFeet: "袜子",
            ItemBoots: "鞋子",
        },
        EN: {
            ItemTorso: "Top",
            ItemLegs: "Bottom",
            ItemBreast: "Bra",
            ItemVulvaPiercings: "Underwear",
            ItemFeet: "Socks",
            ItemBoots: "Shoes",
        },
        UA: {
            ItemTorso: "Верхній одяг",
            ItemLegs: "Нижній одяг",
            ItemBreast: "Ліфчик",
            ItemVulvaPiercings: "Трусики",
            ItemFeet: "Шкарпетки",
            ItemBoots: "Взуття",
        },
    },
    {
        label: {
            CN: "剪刀剪掉$group",
            EN: "Scissors Cut the $group",
            UA: "Відрізати $group ножицями",
        },
        dialog: {
            CN: "SourceCharacter用剪刀剪掉了DestinationCharacter$group。",
            EN: "SourceCharacter Cuts Off DestinationCharacter $group with Scissors.",
            UA: "SourceCharacter ріже $group TargetCharacter ножицями.",
        },
    }
);

export default function () {
    ActivityManager.addCustomActivity(activity);
}
