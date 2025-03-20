import { ActivityManager } from "../activityForward";

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
};

export default function () {
    /** @type {CustomActivityPrerequisiteItem[]} */
    const prereqs = [];
    for (const [k, test] of Object.entries(prereqStorage)) {
        prereqs.push({ name: /** @type {CustomActivityPrerequisite}*/ (k), test });
    }
    ActivityManager.addPrerequisites(prereqs);
}
