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
