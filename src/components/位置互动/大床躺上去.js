import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";
import { ActivityManager } from "../../activityForward";
import { DrawMods, SharedCenterModifier } from "@mod-utils/ChatRoomOrder";
import { Prereqs } from "../../prereqs";
import { findDrawOrderPair } from "@mod-utils/ChatRoomOrder/XCharacterDrawlist";

/**
 * @param {object} arg
 * @param {XCharacter} arg.next
 * @param {XCharacter} arg.prev
 */
function playerLiesInBed({ next, prev }) {
    if (prev.MemberNumber === Player.MemberNumber) {
        const asset = AssetGet("Female3DCG", "ItemDevices", "床左边-Luzi");
        if (!asset) return;
        InventoryWear(Player, "床左边-Luzi", "ItemDevices");
        InventoryWear(Player, "被子左边-Luzi", "ItemAddon");

        ChatRoomOrder.setDrawOrder({
            nextCharacter: next.MemberNumber,
            associatedAsset: {
                group: "ItemDevices",
                asset: "床左边-Luzi",
            },
        });

        ChatRoomCharacterUpdate(Player);
    } else if (next.MemberNumber === Player.MemberNumber) {
        const asset = AssetGet("Female3DCG", "ItemDevices", "床右边-Luzi");
        if (!asset) return;
        InventoryWear(Player, "床右边-Luzi", "ItemDevices");
        InventoryWear(Player, "被子右边-Luzi", "ItemAddon");

        ChatRoomOrder.setDrawOrder({
            prevCharacter: prev.MemberNumber,
            associatedAsset: {
                group: "ItemDevices",
                asset: "床右边-Luzi",
            },
        });

        ChatRoomCharacterUpdate(Player);
    }
}

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "躺上去",
            Prerequisite: [
                Prereqs.Acted.GroupIs("ItemDevices", ["Bed", "床左边-Luzi", "床右边-Luzi"]),
                Prereqs.ActedCheck((C) => !findDrawOrderPair(C, ChatRoomCharacter)),
            ],
            MaxProgress: 0,
            Target: ["ItemTorso"],
        },
        run: (player, sender, { SourceCharacter, SourceCharacterC, TargetCharacter }) => {
            if (TargetCharacter === player.MemberNumber) {
                if (!ServerChatRoomGetAllowItem(sender, player)) return;
                playerLiesInBed(
                    InventoryIsItemInList(Player, "ItemDevices", ["Bed", "床左边-Luzi"])
                        ? { next: SourceCharacterC, prev: Player }
                        : { next: player, prev: SourceCharacterC }
                );
            } else if (SourceCharacter === player.MemberNumber) {
                const targetC = ChatRoomCharacter.find((c) => c.MemberNumber === TargetCharacter);
                if (!targetC) return;
                playerLiesInBed(
                    InventoryIsItemInList(targetC, "ItemDevices", ["Bed", "床左边-Luzi"])
                        ? { next: player, prev: targetC }
                        : { next: targetC, prev: Player }
                );
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
    {
        activity: {
            Name: "拉上床",
            Prerequisite: [
                "UseHands",
                Prereqs.or(Prereqs.Relation.Lover(), Prereqs.Relation.ActingOwnActed()),
                Prereqs.Acting.GroupIs("ItemDevices", ["Bed", "床左边-Luzi", "床右边-Luzi"]),
                Prereqs.ActingCheck((C) => !findDrawOrderPair(C, ChatRoomCharacter)),
            ],
            MaxProgress: 0,
            Target: ["ItemTorso", "ItemArms"],
        },
        useImage: ["ItemDevices", "Bed"],
        run: (player, sender, { SourceCharacter, SourceCharacterC, TargetCharacter }) => {
            if (TargetCharacter === player.MemberNumber) {
                if (!ServerChatRoomGetAllowItem(sender, player)) return;
                playerLiesInBed(
                    InventoryIsItemInList(SourceCharacterC, "ItemDevices", ["Bed", "床左边-Luzi"])
                        ? { next: Player, prev: SourceCharacterC }
                        : { next: SourceCharacterC, prev: Player }
                );
            } else if (SourceCharacter === player.MemberNumber) {
                const targetC = ChatRoomCharacter.find((c) => c.MemberNumber === TargetCharacter);
                if (!targetC) return;
                playerLiesInBed(
                    InventoryIsItemInList(Player, "ItemDevices", ["Bed", "床左边-Luzi"])
                        ? { next: targetC, prev: Player }
                        : { next: Player, prev: targetC }
                );
            }
        },
        label: {
            CN: "拉到床上",
            EN: "Pull to Bed",
            RU: "Затащить в кровать",
            UA: "Затягти в ліжко",
        },
        dialog: {
            CN: "SourceCharacter把TargetCharacter拉进床.",
            EN: "SourceCharacter pulls TargetCharacter into bed.",
            RU: "SourceCharacter затаскивает TargetCharacter в кровать.",
            UA: "SourceCharacter затягує TargetCharacter в ліжко.",
        },
    },
];

const items = [{ prev: "床左边-Luzi", next: "床右边-Luzi" }];

export default function () {
    ActivityManager.addCustomActivities(activities);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, ["center", { X: -100, Y: 0 }], ["center", { X: 100, Y: 0 }])
    );
}
