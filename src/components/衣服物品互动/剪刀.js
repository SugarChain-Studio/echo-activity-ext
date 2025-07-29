import { sleepFor } from "@sugarch/bc-mod-utility";
import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";

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
const activity = {
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
    label: {
        CN: {
            ItemTorso: "剪刀剪掉上衣",
            ItemLegs: "剪刀剪掉下衣",
            ItemBreast: "剪刀剪掉胸罩",
            ItemVulvaPiercings: "剪刀剪掉内裤",
            ItemFeet: "剪刀剪掉袜子",
            ItemBoots: "剪刀剪掉鞋子",
        },
        EN: {
            ItemTorso: "Scissors Cut Off the Top",
            ItemLegs: "Scissors Cut Off the Bottom",
            ItemBreast: "Scissors Cut Off the Bra",
            ItemVulvaPiercings: "Scissors Cut Off the Underwear",
            ItemFeet: "Scissors Cut Off the Socks",
            ItemBoots: "Scissors Cut Off the Shoes",
        },
        UA: {
            ItemTorso: "Відрізати верхній одяг ножицями",
            ItemLegs: "Відрізати нижній одяг ножицями",
            ItemBreast: "Відрізати лівчик ножицями",
            ItemVulvaPiercings: "Відрізати трусики ножицями",
            ItemFeet: "Відрізати шкарпетки ножицями",
            ItemBoots: "Відрізати взуття ножицями",
        },
    },
    dialog: {
        CN: {
            ItemTorso: "SourceCharacter用剪刀剪掉了DestinationCharacter上衣.",
            ItemLegs: "SourceCharacter用剪刀剪掉了DestinationCharacter下衣.",
            ItemBreast: "SourceCharacter用剪刀剪掉了DestinationCharacter胸罩.",
            ItemVulvaPiercings: "SourceCharacter用剪刀剪掉了DestinationCharacter内裤.",
            ItemFeet: "SourceCharacter用剪刀剪掉了DestinationCharacter袜子.",
            ItemBoots: "SourceCharacter用剪刀剪掉了DestinationCharacter鞋子.",
        },
        EN: {
            ItemTorso: "SourceCharacter Cuts Off DestinationCharacter Top with Scissors.",
            ItemLegs: "SourceCharacter Cuts Off DestinationCharacter Bottom with Scissors.",
            ItemBreast: "SourceCharacter Cuts Off DestinationCharacter Bra with Scissors.",
            ItemVulvaPiercings: "SourceCharacter Cuts Off DestinationCharacter Underwear with Scissors.",
            ItemFeet: "SourceCharacter Cuts Off DestinationCharacter Socks with Scissors.",
            ItemBoots: "SourceCharacter Cuts Off DestinationCharacter Shoes with Scissors.",
        },
        UA: {
            ItemTorso: "SourceCharacter ріже верхній одяг TargetCharacter ножицями.",
            ItemLegs: "SourceCharacter ріже нижній одяг TargetCharacter ножицями.",
            ItemBreast: "SourceCharacter ріже лівчик TargetCharacter ножицями.",
            ItemVulvaPiercings: "SourceCharacter ріже трусики TargetCharacter ножицями.",
            ItemFeet: "SourceCharacter ріже шкарпетки TargetCharacter ножицями.",
            ItemBoots: "SourceCharacter ріже взуття TargetCharacter ножицями.",
        },
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
