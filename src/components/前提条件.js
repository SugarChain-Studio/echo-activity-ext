import { ActivityManager } from "../activityForward";

/** @type {Partial<Record<AssetGroupItemName, Record<string,number>>>} */
const chainLength = {
    ItemNeckRestraints: {
        CollarChainShort: 0,
        CollarChainMedium: 1,
        CollarChainLong: 2,
        CollarRopeShort: 0,
        CollarRopeMedium: 1,
        CollarRopeLong: 2,
        Post: 1,
        CollarLeash: 1,
        ChainLeash: 1,
        PetPost: 2,
        哥布哥布_Luzi: 2,
        监控机器人_Luzi: 1,
    },
    ItemMouth: {
        PonyGag: 1,
    },
};

/** @type { Record<Exclude<CustomActivityPrerequisite,ActivityPrerequisite>, PrerequisiteCheckFunction> }  */
const prereqStorage = {
    TargetHasTail: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "TailStraps"),
    TargetHasWings: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "Wings"),
    TargetHasLeash: (_prereq, _acting, acted, _group) => ChatRoomCanBeLeashed(acted),
    TargetHasCatTail: (_prereq, _acting, acted, _group) =>
        InventoryIsItemInList(acted, "TailStraps", ["TailStrap", "KittenTailStrap2", "KittenTailStrap1"]),
    TargetHasTentacles: (_prereq, _acting, acted, _group) =>
        InventoryIsItemInList(acted, "TailStraps", ["Tentacles"]) ||
        InventoryIsItemInList(acted, "ItemButt", ["Tentacles"]),
    NeedTentacles: (_prereq, acting, _acted, _group) =>
        InventoryIsItemInList(acting, "TailStraps", ["Tentacles"]) ||
        InventoryIsItemInList(acting, "ItemButt", ["Tentacles"]),
    NeedPawMittens: (_prereq, acting, _acted, _group) =>
        InventoryIsItemInList(acting, "ItemHands", ["PawMittens", "ElbowLengthMittens"]),
    NeedPetSuit: (_prereq, acting, _acted, _group) =>
        InventoryIsItemInList(acting, "ItemArms", ["ShinyPetSuit", "BitchSuit", "StrictLeatherPetCrawler"]),
    NeedKennel: (_prereq, _acting, acted, _group) => InventoryIsItemInList(acted, "ItemDevices", ["Kennel"]),
    KneelOrAllFours: (_prereq, acting, _acted, _group) =>
        acting.PoseMapping?.BodyLower === "Kneel" ||
        acting.PoseMapping?.BodyLower === "KneelingSpread" ||
        acting.PoseMapping?.BodyFull === "AllFours",
    TargetKneelOrAllFours: (_prereq, _acting, acted, _group) =>
        acted.PoseMapping?.BodyLower === "Kneel" ||
        acted.PoseMapping?.BodyLower === "KneelingSpread" ||
        acted.PoseMapping?.BodyFull === "AllFours",
    TargetHasItemVulvaPiercings: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "ItemVulvaPiercings"),
    TargetHasItemVulva: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "ItemVulva"),
    NeedSword: (_prereq, acting, _acted, _group) => InventoryIsItemInList(acting, "ItemHandheld", ["Sword"]),
    NeedScissors: (_prereq, acting, _acted, _group) => InventoryIsItemInList(acting, "ItemHandheld", ["Scissors"]),
    NeedCloth: (_prereq, acting, _acted, _group) => !!InventoryGet(acting, "Cloth"),
    NeedNoCloth: (_prereq, acting, _acted, _group) => !InventoryGet(acting, "Cloth"),
    NeedNoClothLower: (_prereq, acting, _acted, _group) => !InventoryGet(acting, "ClothLower"),
    NeedBra: (_prereq, acting, _acted, _group) => !!InventoryGet(acting, "Bra"),
    NeedPanties: (_prereq, acting, _acted, _group) => !!InventoryGet(acting, "Panties"),
    NeedSocks: (_prereq, acting, _acted, _group) => !!InventoryGet(acting, "Socks"),
    NeedSuitLower鱼鱼尾_Luzi: (_prereq, acting, _acted, _group) =>
        InventoryIsItemInList(acting, "ItemLegs", ["鱼鱼尾_Luzi"]),
    Need阿巴阿巴_Luzi: (_prereq, acting, _acted, _group) =>
        InventoryIsItemInList(acting, "ItemHandheld", ["阿巴阿巴_Luzi"]),
    Luzi_CharacterViewWithinReach: (_prereq, acting, acted, _group) => {
        if (!ServerPlayerIsInChatRoom()) return false;
        if (!ChatRoomCharacterViewIsActive()) return true;
        if (acting.CanWalk()) return true;
        if (acting.IsMounted()) return false;

        const actedIdx = ChatRoomCharacter.findIndex((C) => C.MemberNumber === acted.MemberNumber);
        const actingIdx = ChatRoomCharacter.findIndex((C) => C.MemberNumber === acting.MemberNumber);
        if (actedIdx < 0 || actingIdx < 0) return false;
        const idxDiff = Math.abs(actedIdx - actingIdx);

        for (const item of acting.Appearance) {
            if (item.Asset.Group.Name in chainLength) {
                const chain = chainLength[item.Asset.Group.Name][item.Asset.Name];
                if (chain !== undefined) {
                    if (idxDiff > chain) return false;
                }
            }
        }

        return true;
    },
    IsStanding: (_prereq, acting, _acted, _group) =>
        /** @type {AssetPoseName[]}*/ (PoseAllStanding).includes(acting.PoseMapping.BodyLower),
};

export default function () {
    /** @type {CustomActivityPrerequisiteItem[]} */
    const prereqs = [];
    for (const [k, test] of Object.entries(prereqStorage)) {
        prereqs.push({ name: /** @type {CustomActivityPrerequisite}*/ (k), test });
    }
    ActivityManager.addPrerequisites(prereqs);
}
