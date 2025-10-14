import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";
import { Pick } from "@mod-utils/ChatRoomOrder/checks";
import { Optional } from "@mod-utils/monadic";

/**
 * @param {PlayerCharacter} player
 * @param {Asset} asset
 * @param {PrevOrNextXCharacter} pair
 * @param {XCharacterDrawOrderBase["leash"]} [leash] 如果提供，则设置牵引状态
 */
export const wearAndPair = (player, asset, pair, leash) => {
    if (!player.Appearance.some((i) => i.Asset.Group.Name === asset.Group.Name && i.Asset.Name === asset.Name)) {
        InventoryWear(player, asset.Name, asset.Group.Name);
        ChatRoomCharacterItemUpdate(player, asset.Group.Name);
    }
    ChatRoomOrder.setDrawOrder({
        ...pair,
        associatedAsset: { group: /** @type {AssetGroupItemName}*/ (asset.Group.Name), asset: asset.Name },
        leash,
    });
};

/**
 * @template {string} K
 * @param {K} key
 * @param {number} memberNumber
 */
export const findCharacter = (key, memberNumber) => {
    const c = ChatRoomCharacter.find((c) => c.MemberNumber === memberNumber);
    return new Optional(c, /** @type {{[k in K]: Character}}*/ ({ [key]: c }));
};

/**
 * @param {Character} target
 */
export const leashTarget = (target) => {
    const prevOther = Pick.other(Player);
    if (prevOther) ChatRoomLeashList = ChatRoomLeashList.filter((id) => id !== prevOther);

    if (!ChatRoomLeashList.some((id) => id === target.MemberNumber)) {
        ChatRoomLeashList.push(target.MemberNumber);
    }
};

/**
 * @param {Character} from
 * @param {false} [refresh] 有的时候并不是可牵物品，避免refresh
 */
export const leashPlayer = (from, refresh) => {
    ChatRoomLeashPlayer = from.MemberNumber;
    if (refresh !== false) CharacterRefreshLeash(Player);
};

/**
 * @param {[AssetGroupItemName, string]} followItem
 * @param {[AssetGroupItemName, string]} leadItem
 * @param {"prev"|"next"} leadMode
 * @returns {CustomActivity["run"]}
 */
export function createFollowLeadRunner(followItem, leadItem, leadMode) {
    const follow = (C) =>
        /** @type {PrevOrNextXCharacter}*/ ({
            [leadMode === "next" ? "prevCharacter" : "nextCharacter"]: C.MemberNumber,
        });
    const lead = (C) =>
        /** @type {PrevOrNextXCharacter}*/ ({
            [leadMode === "next" ? "nextCharacter" : "prevCharacter"]: C.MemberNumber,
        });

    return (player, sender, { SourceCharacter, TargetCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            if (!ServerChatRoomGetAllowItem(sender, player)) return;
            findCharacter("SourceC", SourceCharacter)
                .then(() => AssetGet("Female3DCG", followItem[0], followItem[1]))
                .then((asset, { SourceC }) => wearAndPair(player, asset, follow(SourceC), "follow"));
        } else if (SourceCharacter === player.MemberNumber) {
            findCharacter("TargetC", TargetCharacter)
                .then(() => AssetGet("Female3DCG", leadItem[0], leadItem[1]))
                .then((asset, { TargetC }) => wearAndPair(player, asset, lead(TargetC), "lead"));
        }
    };
}
