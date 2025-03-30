class Acting {
    /**
     * 动作目标身体部位为空
     * @returns {PrerequisiteCheckFunction}
     */
    static TargetGroupEmpty() {
        return (_, acting, _1, group) => acting.Appearance.every((item) => item.Asset.Group.Name !== group.Name);
    }

    /**
     * 动作目标身体部位物品范围
     * @param {string[]} assetNames
     * @returns {PrerequisiteCheckFunction}
     */
    static TargetGroupIs(assetNames) {
        const assetNameSet = new Set(assetNames);

        return (_, acting, _1, group) => {
            const item = acting.Appearance.find((item) => item.Asset.Group.Name === group.Name);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位物品范围
     * @param {CustomGroupName} group
     * @param {string[]} assetNames
     * @returns {PrerequisiteCheckFunction}
     */
    static GroupIs(group, assetNames) {
        const assetNameSet = new Set(assetNames);

        return (_, acting, _1, _2) => {
            const item = acting.Appearance.find((item) => item.Asset.Group.Name === group);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位为空
     * @param {CustomGroupName[]} groups
     * @returns {PrerequisiteCheckFunction}
     */
    static GroupEmpty(groups) {
        const groupNameSet = new Set(groups);

        return (_, acting, _1, _2) => acting.Appearance.every((item) => !groupNameSet.has(item.Asset.Group.Name));
    }

    /**
     * 身体部位是否可用
     * @param { AssetGroupItemName } group
     */
    static GroupAccessible(group) {
        return (_, acting, _1, _2) => !InventoryGroupIsBlocked(acting, group);
    }
}

class Acted {
    /**
     * 动作目标身体部位为空
     * @returns {PrerequisiteCheckFunction}
     */
    static TargetGroupEmpty() {
        return (_, _1, acted, group) => acted.Appearance.every((item) => item.Asset.Group.Name !== group.Name);
    }

    /**
     * 动作目标身体部位物品范围
     * @param {string[]} assetNames
     * @returns {PrerequisiteCheckFunction}
     */
    static TargetGroupIs(assetNames) {
        const assetNameSet = new Set(assetNames);

        return (_, _1, acted, group) => {
            const item = acted.Appearance.find((item) => item.Asset.Group.Name === group.Name);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位物品范围
     * @param {CustomGroupName} group
     * @param {string[]} assetNames
     * @returns {PrerequisiteCheckFunction}
     */
    static GroupIs(group, assetNames) {
        const assetNameSet = new Set(assetNames);
        return (_, _1, acted, _2) => {
            const item = acted.Appearance.find((item) => item.Asset.Group.Name === group);
            return item && assetNameSet.has(item.Asset.Name);
        };
    }

    /**
     * 身体部位为空
     * @param {CustomGroupName[]} groups
     * @returns {PrerequisiteCheckFunction}
     */
    static GroupEmpty(groups) {
        const groupNameSet = new Set(groups);

        return (_, _1, acted, _2) => acted.Appearance.every((item) => !groupNameSet.has(item.Asset.Group.Name));
    }

    /**
     * 身体部位是否可用
     * @param { AssetGroupItemName } group
     */
    static GroupAccessible(group) {
        return (_, _1, acted, _2) => !InventoryGroupIsBlocked(acted, group);
    }
}

export class Prereqs {
    /** 动作发起者 */
    static Acting = Acting;

    /** 动作目标 */
    static Acted = Acted;

    /**
     * 获得一个只检查动作发起者的函数
     * @param {(acting:Character)=>boolean} prereqFunc
     * @returns {PrerequisiteCheckFunction}
     */
    static ActingCheck = (prereqFunc) => {
        return (_, acting, _1, _2) => prereqFunc(acting);
    };

    /**
     * 获得一个只检查动作目标的函数
     * @param {(acted:Character)=>boolean} prereqFunc
     * @returns {PrerequisiteCheckFunction}
     */
    static ActedCheck = (prereqFunc) => {
        return (_, _1, acted, _2) => prereqFunc(acted);
    };

    /**
     * @param {PrerequisiteCheckFunction} prereqFunc
     * @returns {PrerequisiteCheckFunction}
     */
    static not(prereqFunc) {
        return (...args) => !prereqFunc(...args);
    }

    /**
     * @param {PrerequisiteCheckFunction} lhs
     * @param {PrerequisiteCheckFunction} rhs
     * @returns {PrerequisiteCheckFunction}
     */
    static and(lhs, rhs) {
        return (...args) => lhs(...args) && rhs(...args);
    }

    /**
     * @param {PrerequisiteCheckFunction} lhs
     * @param {PrerequisiteCheckFunction} rhs
     * @returns {PrerequisiteCheckFunction}
     */
    static or(lhs, rhs) {
        return (...args) => lhs(...args) || rhs(...args);
    }

    /**
     * @param {PrerequisiteCheckFunction} lhs
     * @param {PrerequisiteCheckFunction} rhs
     * @returns {PrerequisiteCheckFunction}
     */
    static xor(lhs, rhs) {
        return (...args) => lhs(...args) !== rhs(...args);
    }
}
