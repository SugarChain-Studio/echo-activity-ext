import { ChatRoomOrder, DrawCharacterModifier } from "@mod-utils/ChatRoomOrder";
import { ActivityManager } from "../../activityForward";
import { sleepFor } from "@sugarch/bc-mod-utility";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "躺上去",
            Prerequisite: [
                (_prereq, _acting, acted, _group) =>
                    InventoryIsItemInList(acted, "ItemDevices", ["Bed", "床左边_Luzi"]),
            ],
            MaxProgress: 50,
            Target: ["ItemTorso"],
        },
        run: async (player, sender, info) => {
            if (info.TargetCharacter === player.MemberNumber) {
                await sleepFor(100);
                // 遵守物品权限
                if (!ServerChatRoomGetAllowItem(sender, player)) return;

                const asset = AssetGet("Female3DCG", "ItemDevices", "床左边_Luzi");
                if (!asset) return;
                InventoryWear(player, "床左边_Luzi", "ItemDevices");
                InventoryWear(player, "被子左边_Luzi", "ItemAddon");

                ChatRoomOrder.setDrawOrder({
                    nextCharacter: info.SourceCharacter,
                    associatedAsset: {
                        group: "ItemDevices",
                        asset: "床左边_Luzi",
                    },
                });

                ChatRoomCharacterUpdate(player);
            } else if (info.SourceCharacter === player.MemberNumber) {
                await sleepFor(100);
                const asset = AssetGet("Female3DCG", "ItemDevices", "床右边_Luzi");
                if (!asset) return;
                InventoryWear(player, "床右边_Luzi", "ItemDevices");
                InventoryWear(player, "被子右边_Luzi", "ItemAddon");

                ChatRoomOrder.setDrawOrder({
                    prevCharacter: info.TargetCharacter,
                    associatedAsset: {
                        group: "ItemDevices",
                        asset: "床右边_Luzi",
                    },
                });

                ChatRoomCharacterUpdate(player);
            }
        },
        useImage: ["ItemDevices", "Bed"],
        label: {
            CN: "躺上去",
            EN: "Lie Down",
            RU: "Лечь рядом",
            UA: "Лягти поряд",
        },
        dialog: {
            CN: "SourceCharacter躺在TargetCharacter身边.",
            EN: "SourceCharacter lies down on TargetCharacter.",
            RU: "SourceCharacter ложится рядом с TargetCharacter.",
            UA: "SourceCharacter лягає поряд TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);

    DrawCharacterModifier.addModifier((C, arg) => {
        const { Zoom } = arg;
        const sharedC = ChatRoomOrder.requireSharedCenter(C);
        if (!sharedC) return arg;

        if (sharedC.prev.MemberNumber === C.MemberNumber && InventoryIsItemInList(C, "ItemDevices", ["床左边_Luzi"])) {
            return { X: sharedC.center.X - 100 * Zoom, Y: sharedC.center.Y, Zoom };
        }

        if (sharedC.next.MemberNumber === C.MemberNumber && InventoryIsItemInList(C, "ItemDevices", ["床右边_Luzi"])) {
            return { X: sharedC.center.X + 100 * Zoom, Y: sharedC.center.Y, Zoom };
        }
    });
}
