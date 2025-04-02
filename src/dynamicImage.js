import { PathTools } from "@sugarch/bc-mod-utility";

export class DynImageProviders {
    /**
     * 使用动作发起者位于group的物品作为动作图片
     * @param {CustomGroupName} group
     * @returns {DynamicImageProvier}
     */
    static itemOnActingGroup = (group) => () => {
        const item = InventoryGet(Player, /** @type {AssetGroupName}*/ (group));
        if (item) return PathTools.assetPreviewIconPath(item);
    };

    /**
     * 使用动作接受者位于group的物品作为动作图片
     * @param {CustomGroupName} group
     * @returns {DynamicImageProvier}
     */
    static itemOnActedGroup = (group) => (_, target) => {
        const item = InventoryGet(target, /** @type {AssetGroupName}*/ (group));
        if (item) return PathTools.assetPreviewIconPath(item);
    };
}
