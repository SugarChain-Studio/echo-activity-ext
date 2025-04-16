import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";
import { DynImageProviders } from "../../dynamicImage";

const stomachValueSetting = {
    棒棒糖_Luzi: 0.1,
    烤鱼_Luzi: 0.5,
    鸡腿_Luzi: 0.6,
    煎包_Luzi: 0.4,
    蛋糕卷_Luzi: 0.8,
};

class StomachValue {
    constructor() {
        this.value = 0;
        this.latestUpdate = Date.now();
        setInterval(() => {
            const now = Date.now();
            const delta = now - this.latestUpdate;
            this.latestUpdate = now;

            // 每分钟减少 0.1
            this.value = Math.max(this.value - delta / 600000, 0);
        }, 1000);
    }

    canEat() {
        return this.value < 1;
    }

    eat(assetName) {
        /** @type {number | undefined} */
        const v = stomachValueSetting[assetName];
        if (v) {
            this.value = this.value + v; // 可以超过1
        }
        return v;
    }
}

const playerStomach = new StomachValue();

/** @type {CustomActivity[]} */
const activity = [
    {
        activity: {
            Name: `咬走食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                Prereqs.Acting.GroupEmpty(["ItemMouth"]),
                Prereqs.Acted.GroupIs("ItemMouth", Object.keys(stomachValueSetting)),
            ],
            MaxProgress: 50,
            Target: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActedGroup("ItemMouth"),
        run: (player, sender, { SourceCharacter, TargetCharacter, ActivityGroup }) => {
            if (SourceCharacter === player.MemberNumber) {
                const target = ChatRoomCharacter.find((obj) => obj.MemberNumber === TargetCharacter);
                if (!target) return;

                const targetItem = InventoryGet(target, ActivityGroup.Name);
                if (!targetItem) return;

                const nItem = InventoryWear(player, targetItem.Asset.Name, "ItemMouth");
                if (!nItem) return;

                InventoryRemove(target, ActivityGroup.Name);
                Object.assign(nItem, targetItem);

                ChatRoomCharacterUpdate(target);
                ChatRoomCharacterUpdate(player);
                CharacterRefresh(player, true);
            }
        },
        item: (_, acted) => InventoryGet(acted, "ItemMouth"),
        label: {
            CN: "咬走",
            EN: "Bite off",
        },
        dialog: {
            CN: "SourceCharacter从TargetCharacter嘴里咬走ActivityAsset.",
            EN: "SourceCharacter bites off ActivityAsset from DestinationCharacter mouth.",
        },
    },
    {
        activity: {
            Name: `吃掉嘴里食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                () => playerStomach.canEat(),
                Prereqs.not(Prereqs.Acting.GroupIs("动物身体_Luzi", ["幽灵人形_Luzi"])), // 不允许幽灵人形吃东西
                Prereqs.Acting.GroupIs("ItemMouth", [
                    "棒棒糖_Luzi",
                    "烤鱼_Luzi",
                    "鸡腿_Luzi",
                    "煎包_Luzi",
                    "蛋糕卷_Luzi",
                ]),
            ],
            MaxProgress: 0,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActedGroup("ItemMouth"),
        mode: "SelfOnSelf",
        run: (player) => {
            const item = InventoryGet(player, "ItemMouth");
            if (!item) return;
            playerStomach.eat(item.Asset.Name);
            InventoryRemove(player, "ItemMouth");
            ChatRoomCharacterItemUpdate(player, "ItemMouth");
        },
        item: (player) => InventoryGet(player, "ItemMouth"),
        label: {
            CN: "吃掉食物",
            EN: "Eat Food",
        },
        dialog: {
            CN: "SourceCharacter将塞在嘴里的ActivityAsset吃掉了.",
            EN: "SourceCharacter eats the ActivityAsset that was stuffed in the mouth.",
        },
    },
    {
        activity: {
            Name: `吃不下嘴里食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                () => !playerStomach.canEat(),
                Prereqs.Acting.GroupIs("ItemMouth", [
                    "棒棒糖_Luzi",
                    "烤鱼_Luzi",
                    "鸡腿_Luzi",
                    "煎包_Luzi",
                    "蛋糕卷_Luzi",
                ]),
            ],
            MaxProgress: 0,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: DynImageProviders.itemOnActedGroup("ItemMouth"),
        item: (player) => InventoryGet(player, "ItemMouth"),
        label: {
            CN: "吃掉食物",
            EN: "Eat Food",
        },
        dialog: {
            CN: "SourceCharacter因为肚子太饱，吃不下嘴里的ActivityAsset.",
            EN: "SourceCharacter is too full to eat the ActivityAsset in the mouth.",
        },
    },
    {
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
        item: (actor) => InventoryGet(actor, "ItemHandheld"),
        label: {
            CN: "塞食物",
            EN: "Stuff with Food",
        },
        dialog: {
            CN: "SourceCharacter将手里的ActivityAsset塞进TargetCharacter的嘴里.",
            EN: "SourceCharacter stuffs DestinationCharacter mouth with ActivityAsset.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivity(activity);
}
