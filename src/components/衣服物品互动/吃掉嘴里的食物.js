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
            Name: `吃掉嘴里食物_Luzi`,
            Prerequisite: [
                "UseMouth",
                () => playerStomach.canEat(),
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
        label: {
            CN: "吃掉食物",
            EN: "Eat Food",
        },
        dialog: {
            CN: "SourceCharacter将塞在嘴里的AssetName吃掉了.",
            EN: "SourceCharacter eats the AssetName that was stuffed in the mouth.",
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
        label: {
            CN: "吃掉食物",
            EN: "Eat Food",
        },
        dialog: {
            CN: "SourceCharacter因为肚子太饱，吃不下嘴里的AssetName.",
            EN: "SourceCharacter is too full to eat the AssetName in the mouth.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivity(activity);
}
