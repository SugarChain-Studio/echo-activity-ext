import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";
import { Path } from "../../resouce";
import { sleepFor } from "@sugarch/bc-mod-utility";
import { DrawMods, SharedCenterModifier } from "./drawMods";
import { Prereqs } from "../../prereqs";

const items = [
    { prev: "CollarLeash", next: "拉紧的牵绳_Luzi" },
    { prev: "ChainLeash", next: "拉紧的链子_Luzi" },
];

/** @type { CustomActivity} */
const activity = {
    activity: {
        Name: "拉到身边",
        Prerequisite: [
            Prereqs.any(
                ...items.map((i) =>
                    Prereqs.and(
                        Prereqs.Acting.GroupEmpty("ItemHandheld"),
                        Prereqs.Acted.GroupIs("ItemNeckRestraints", i.prev)
                    )
                ),
                ...items.map((i) =>
                    Prereqs.and(
                        Prereqs.Acting.GroupIs("ItemHandheld", i.next),
                        Prereqs.Acted.GroupIs("ItemNeckRestraints", i.prev)
                    )
                )
            ),
        ],
        MaxProgress: 0,
        Target: ["ItemTorso", "ItemNeckRestraints", "ItemNeck"],
    },
    run: async (player, sender, info) => {
        if (info.TargetCharacter === player.MemberNumber) {
            await sleepFor(100);
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;

            const SrcChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.SourceCharacter);
            if (!SrcChara) return;
            const item = InventoryGet(player, "ItemNeckRestraints");
            if (!item) return;
            ChatRoomOrder.setDrawOrder({
                nextCharacter: SrcChara.MemberNumber,
                associatedAsset: {
                    group: "ItemNeckRestraints",
                    asset: item.Asset.Name,
                },
            });
            if (!item.Property) item.Property = {};
            if (!Array.isArray(item.Property.Effect)) item.Property.Effect = [];
            if (item.Property.Effect.indexOf("IsLeashed") < 0) {
                item.Property.Effect.push("IsLeashed");
                ChatRoomCharacterUpdate(Player);
            }
            ChatRoomLeashPlayer = SrcChara.MemberNumber;
        } else if (info.SourceCharacter === player.MemberNumber) {
            await sleepFor(100);
            const TgtChara = ChatRoomCharacter.find((C) => C.MemberNumber === info.TargetCharacter);
            if (!TgtChara) return;
            const item = InventoryGet(TgtChara, "ItemNeckRestraints");
            if (!item) return;
            const dItemName = {
                CollarLeash: "拉紧的牵绳_Luzi",
                ChainLeash: "拉紧的链子_Luzi",
            }[item.Asset.Name];
            if (!dItemName) return;

            InventoryWear(player, dItemName, "ItemHandheld");
            ChatRoomCharacterItemUpdate(player, "ItemHandheld");

            ChatRoomOrder.setDrawOrder({
                prevCharacter: TgtChara.MemberNumber,
                associatedAsset: {
                    group: "ItemHandheld",
                    asset: dItemName,
                },
            });
            if (ChatRoomLeashList.indexOf(TgtChara.MemberNumber) < 0) ChatRoomLeashList.push(TgtChara.MemberNumber);
        }
    },
    useImage: Path.resolve("activities/pull_to_side.png"),
    label: {
        CN: "拉到身边",
        EN: "Pull to One's Side",
        RU: "Притащить к себе",
        UA: "Притягнути до себе",
    },
    dialog: {
        CN: "SourceCharacter将TargetCharacter拉到身边.",
        EN: "SourceCharacter pulls TargetCharacter to PronounPossessive side.",
        RU: "SourceCharacter притаскивает TargetCharacter к себе.",
        UA: "SourceCharacter притягує TargetCharacter ближче до себе.",
    },
};

export default function () {
    ActivityManager.addCustomActivity(activity);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, (_, { sharedC, initState, C }) => {
            const { Zoom } = initState;
            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                return {
                    X: sharedC.center.X - 75 * Zoom,
                    Y: sharedC.center.Y,
                    Zoom,
                };
            }
            if (sharedC.next.MemberNumber === C.MemberNumber) {
                return { X: sharedC.center.X + 75 * Zoom, Y: sharedC.center.Y, Zoom };
            }
        })
    );
}
