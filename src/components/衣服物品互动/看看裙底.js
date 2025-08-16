import { ActivityManager } from "../../activityForward";
import { DynImageProviders } from "../../dynamicImage";
import { Prereqs } from "../../prereqs";
import { Path } from "../../resouce";

/** @type {CustomGroupName[]} */
const groups = ["Panties", "Panties_笨笨蛋Luzi"];

/** @type {CustomActivity[]} */
const activity = [
    {
        activity: {
            Name: "看看裙底",
            Prerequisite: [
                "UseMouth",
                Prereqs.ActedCheck(
                    (acted) =>
                        !InventoryDoItemsBlockGroup(acted, "ItemPelvis", ["Cloth", "ClothLower"]) ||
                        InventoryDoItemsExposeGroup(acted, "ItemVulva", ["ClothLower"])
                ),
                Prereqs.not(Prereqs.Acted.GroupEmpty(groups)),
            ],
            MaxProgress: 0,
            Target: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
        },
        useImage: DynImageProviders.itemOnActedGroup(groups),
        item: (_, acted) => acted.Appearance.filter((item) => groups.includes(item.Asset.Group.Name))[0],
        label: {
            CN: "看看裙底",
            EN: "Look under the skirt",
        },
        dialog: {
            CN: "SourceCharacter附下身看DestinationCharacter裙底，发现TargetCharacter穿着AcitivityAsset.",
            EN: "SourceCharacter looks under DestinationCharacter skirt and finds that TargetCharacter is wearing ActivityAsset.",
        },
    },
    {
        activity: {
            Name: "看看裙底真空",
            Prerequisite: [
                "UseMouth",
                Prereqs.ActedCheck(
                    (acted) =>
                        !InventoryDoItemsBlockGroup(acted, "ItemPelvis", ["Cloth", "ClothLower"]) &&
                        InventoryDoItemsExposeGroup(acted, "ItemVulva", ["ClothLower"])
                ),
                Prereqs.Acted.GroupEmpty(groups),
            ],
            MaxProgress: 40,
            Target: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
        },
        useImage: Path.resolve("activities/nopan.png"),
        label: {
            CN: "看看裙底",
            EN: "Look under the skirt",
        },
        dialog: {
            CN: "SourceCharacter附下身看DestinationCharacter裙底，发现TargetCharacter竟然没有穿内裤。",
            EN: "SourceCharacter looks under DestinationCharacter skirt and finds that TargetCharacter is not wearing any underwear.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivity(activity);
}
