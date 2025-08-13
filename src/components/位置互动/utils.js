import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";
import { Optional } from "@mod-utils/monadic";

/**
 * @param {PlayerCharacter} player
 * @param {Asset} asset
 * @param {PrevOrNextXCharacter} pair
 */
export const wearAndPair = (player, asset, pair) => {
    if (!player.Appearance.some((i) => i.Asset.Group.Name === asset.Group.Name && i.Asset.Name === asset.Name)) {
        InventoryWear(player, asset.Name, asset.Group.Name);
        ChatRoomCharacterItemUpdate(player, asset.Group.Name);
    }
    ChatRoomOrder.setDrawOrder({
        ...pair,
        associatedAsset: { group: /** @type {AssetGroupItemName}*/ (asset.Group.Name), asset: asset.Name },
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
