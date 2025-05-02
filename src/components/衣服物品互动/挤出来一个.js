import { ActivityManager } from "../../activityForward";
import { i18nAction } from "../../messager";

import { DynImageProviders } from "../../dynamicImage";
import { Prereqs } from "../../Prereqs";

const beedsDef = {
    AnalBeads2: 0.5,
    大号拉珠: 0.3,
};

let cooldown = true;

/** @type {CustomActivity} */
const activity = {
    activity: {
        Name: "挤出来球",
        Prerequisite: [
            "TargetZoneAccessible",
            () => cooldown,
            Prereqs.Acted.GroupIs("ItemButt", Object.keys(beedsDef)),
        ],
        MaxProgress: 90,
        Target: [],
        TargetSelf: ["ItemButt"],
    },
    mode: "SelfOnSelf",
    run: (player, _, { ActivityGroup }) => {
        const item = InventoryGet(player, ActivityGroup.Name);
        if (!item?.Property?.InsertedBeads) return;
        let basePossiblity = beedsDef[item.Asset.Name];
        if (!basePossiblity) return;

        const arousal = PreferenceGetArousalZone(player, ActivityGroup.Name);
        if (arousal) {
            // 开发越多越容易
            basePossiblity *= 0.1 + arousal.Factor * 0.9;
            if (arousal.Orgasm) {
                basePossiblity *= 1.5;
            }
        }

        cooldown = false;

        setTimeout(() => {
            const chance = Math.random();

            const post = (content) =>
                i18nAction(content, {
                    source: player,
                    destination: player,
                    asset: item.Asset,
                    activity: { name: "MasturbateItem", group: "ItemButt" },
                });

            if (chance < basePossiblity) {
                const removing = item.Property.InsertedBeads <= 1;
                if (removing) {
                    const itemGroup = item.Asset.Group.Name;
                    InventoryRemove(player, itemGroup);
                } else {
                    item.Property.InsertedBeads--;
                    item.Property.TypeRecord = { typed: item.Property.InsertedBeads - 1 };
                }

                CharacterRefresh(player, true);
                ChatRoomCharacterUpdate(player);

                if (removing) {
                    post({
                        CN: "SourceCharacter将屁股里的AssetName完全挤出来。",
                        EN: "SourceCharacter fully squeezes out AssetName from the butt.",
                    });
                } else {
                    post({
                        CN: "SourceCharacter成功将屁股里的AssetName挤出来其中一个球.",
                        EN: "SourceCharacter successfully squeezes out one ball of AssetName from the butt.",
                    });
                }
            } else {
                post({
                    CN: "SourceCharacter尝试将塞在屁股里的AssetName挤出来，但失败了.",
                    EN: "SourceCharacter tries to squeeze out AssetName stuck in the butt, but failed.",
                });
            }
            cooldown = true;
        }, 5000);
    },
    useImage: DynImageProviders.itemOnActedGroup("ItemButt"),
    item: (player) => InventoryGet(player, "ItemButt"),
    label: {
        CN: "挤出来一个球",
        EN: "Squeeze out one ball",
    },
    dialog: {
        CN: "SourceCharacter用力试图将塞在屁股里的ActivityAsset挤出来一个.",
        EN: "SourceCharacter tries to squeeze out one ActivityAsset stuck in the butt.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);
}
