import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";
import { DynImageProviders } from "../../dynamicImage";

/** @type {CustomActivity} */
const activity = {
    activity: {
        Name: `塞食物_Luzi`,
        Prerequisite: [
            Prereqs.Acted.GroupEmpty(["ItemMouth"]),
            Prereqs.Acting.GroupIs("ItemHandheld", ["棒棒糖_Luzi", "烤鱼_Luzi", "鸡腿_Luzi"]),
        ],
        MaxProgress: 50,
        Target: ["ItemMouth"],
        TargetSelf: true,
    },
    useImage: DynImageProviders.itemOnActingGroup("ItemHandheld"),
    run: (player, sender, info) => {
        if (info.SourceCharacter === player.MemberNumber) {
            const heldItem = InventoryGet(player, "ItemHandheld");
            if (!heldItem) return;

            const asset = AssetGet("Female3DCG", "ItemMouth", heldItem.Asset.Name);
            if (!asset) return;

            // 获取 TargetCharacter 玩家信息
            const target = ChatRoomCharacter.find((obj) => obj.MemberNumber === info.TargetCharacter);
            if (!target) return;

            // 给棒棒糖
            InventoryWear(target, heldItem.Asset.Name, info.ActivityGroup.Name);
            InventoryRemove(player, "ItemHandheld");

            // 更新外观
            ChatRoomCharacterItemUpdate(target, info.ActivityGroup.Name);
            ChatRoomCharacterItemUpdate(player, "ItemHandheld");
            CharacterRefresh(player, true);
        }
    },
    label: {
        CN: "塞食物",
        EN: "Stuff with Food",
    },
    dialog: {
        CN: "SourceCharacter将手里的AssetName塞进TargetCharacter的嘴里.",
        EN: "SourceCharacter stuffs DestinationCharacter mouth with AssetName.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
