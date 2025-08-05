import { Path, playItemAudio } from "../../resouce";
import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../prereqs";
import { ActivityExt } from "../../activityext";

/** @type { CustomActivity } */
const activity = ActivityExt.fromTemplateActivity(
    {
        activity: {
            Name: "阿巴阿巴",
            Prerequisite: ["UseArms", "UseHands", Prereqs.Acting.GroupIs("ItemHandheld", ["阿巴阿巴_Luzi"])],
            MaxProgress: 50,
            Target: [
                "ItemBreast",
                "ItemButt",
                "ItemMouth",
                "ItemTorso",
                "ItemEars",
                "ItemArms",
                "ItemNeck",
                "ItemHead",
                "ItemHood",
                "ItemNose",
                "ItemPelvis",
                "ItemHands",
                "ItemLegs",
                "ItemFeet",
                "ItemBoots",
            ],
            TargetSelf: true,
        },
        mode: "AnyInvolved",
        run: (player, _, { SourceCharacter, TargetCharacter }) =>
            playItemAudio(
                Path.resolve("audio/阿巴阿巴.mp3"),
                SourceCharacter === player.MemberNumber || TargetCharacter === player.MemberNumber
            ),
        useImage: ["ItemHandheld", "阿巴阿巴_Luzi"],
    },
    {
        CN: {
            ItemBreast: "乳房",
            ItemButt: "屁股",
            ItemMouth: "脸",
            ItemTorso: "腰",
            ItemEars: "耳朵",
            ItemArms: "手臂",
            ItemNeck: "脖子",
            ItemHood: "头",
            ItemHead: "眉心",
            ItemNose: "鼻子",
            ItemPelvis: "肚子",
            ItemHands: "手",
            ItemLegs: "大腿",
            ItemFeet: "小腿",
            ItemBoots: "脚",
        },
        EN: {
            ItemBreast: "Breast",
            ItemButt: "Butt",
            ItemMouth: "Mouth",
            ItemTorso: "Torso",
            ItemEars: "Ears",
            ItemArms: "Arms",
            ItemNeck: "Neck",
            ItemHood: "Hood",
            ItemHead: "Head",
            ItemNose: "Nose",
            ItemPelvis: "Abdomen",
            ItemHands: "Hands",
            ItemLegs: "Thighs",
            ItemFeet: "Calves",
            ItemBoots: "Feet",
        },
    },
    {
        label: {
            CN: "射击$group",
            EN: "Shoot $group",
        },
        dialog: {
            CN: "SourceCharacter举起枪瞄准, 水弹直直击中了DestinationCharacter$group。",
            EN: "SourceCharacter raised the gun and aimed, the water bullet hit DestinationCharacter $group directly.",
        },
    }
);

export default function () {
    ActivityManager.addCustomActivity(activity);
}
