import { ActivityManager } from "../activityForward";
import { Prereqs } from "../Prereqs";

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
    Luzi_TargetHasTail: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "TailStraps"),
    Luzi_TargetHasWings: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "Wings"),
    Luzi_TargetHasLeash: (_prereq, _acting, acted, _group) => ChatRoomCanBeLeashed(acted),
    Luzi_TargetHasCatTail: Prereqs.Acted.GroupIs("TailStraps", ["TailStrap", "KittenTailStrap2", "KittenTailStrap1"]),
    Luzi_TargetHasTentacles: Prereqs.any(
        Prereqs.Acted.GroupIs("TailStraps", ["Tentacles"]),
        Prereqs.Acted.GroupIs("ItemButt", ["Tentacles"])
    ),
    Luzi_HasTentacles: Prereqs.any(
        Prereqs.Acting.GroupIs("TailStraps", ["Tentacles"]),
        Prereqs.Acting.GroupIs("ItemButt", ["Tentacles"])
    ),
    Luzi_HasPawMittens: (_prereq, acting, _acted, _group) =>
        InventoryIsItemInList(acting, "ItemHands", ["PawMittens", "ElbowLengthMittens"]),
    Luzi_HasPetSuit: Prereqs.or(
        Prereqs.Acting.GroupIs("ItemArms", [
            "ShinyPetSuit",
            "BitchSuit",
            "StrictLeatherPetCrawler",
            "乳胶宠物拘束服_Luzi",
        ]),
        Prereqs.and(Prereqs.Acting.GroupIs("ItemArms", ["宠物服上"]), Prereqs.Acting.GroupIs("ItemArms", ["宠物服下"]))
    ),
    Luzi_HasBreast: Prereqs.Acting.GroupIs("BodyUpper", ["Small", "Normal", "Large", "XLarge"]),
    Luzi_TargetHasBreast: Prereqs.Acted.GroupIs("BodyUpper", ["Small", "Normal", "Large", "XLarge"]),
    Luzi_HasKennel: (_prereq, _acting, acted, _group) => InventoryIsItemInList(acted, "ItemDevices", ["Kennel"]),
    Luzi_TargetHasItemVulvaPiercings: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "ItemVulvaPiercings"),
    Luzi_TargetHasItemVulva: (_prereq, _acting, acted, _group) => !!InventoryGet(acted, "ItemVulva"),
    Luzi_HasSword: (_prereq, acting, _acted, _group) => InventoryIsItemInList(acting, "ItemHandheld", ["Sword"]),
    Luzi_Has鱼鱼尾: Prereqs.Acting.GroupIs("ItemLegs", ["鱼鱼尾_Luzi"]),
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
    Luzi_Female: (_prereq, acting, _acted, _group) => !acting.HasPenis(),
    Luzi_CanWalk: (_prereq, acting, _acted, _group) => acting.CanWalk(),
    Luzi_IsStanding: Prereqs.Acting.PoseIsStanding(),
    Luzi_IsKneeling: Prereqs.Acting.PoseIsKneeling(),
    Luzi_IsAllFours: Prereqs.Acting.PoseIs("BodyFull", "AllFours"),
    Luzi_KneelOrAllFours: Prereqs.Acting.PoseIsKneelingOrAllFours(),
    Luzi_TargetKneelOrAllFours: Prereqs.Acted.PoseIsKneelingOrAllFours(),
};

export default function () {
    /** @type {CustomActivityPrerequisiteItem[]} */
    const prereqs = [];
    for (const [k, test] of Object.entries(prereqStorage)) {
        prereqs.push({ name: /** @type {CustomActivityPrerequisite}*/ (k), test });
    }
    ActivityManager.addPrerequisites(prereqs);
}
