import { ActivityManager } from "../../activityForward";
import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";
import { Prereqs } from "../../prereqs";
import { DrawMods, SharedCenterModifier } from "./drawMods";
import { DynImageProviders } from "../../dynamicImage";
import { monadic } from "@mod-utils/monadic";

/** @type { CustomActivity } */
const activity = {
    activity: {
        Name: "手推车",
        Prerequisite: [
            "UseHands",
            (_, acted, acting, _2) =>
                ChatRoomLeashList.includes(acted.MemberNumber) || ChatRoomCanBeLeashedBy(acted.MemberNumber, acting),
            () => !!AssetGet("Female3DCG", "ItemMisc", "抓住推车"),
            Prereqs.Acted.GroupIs("ItemDevices", ["Trolley"]),
            Prereqs.or(Prereqs.Acting.GroupEmpty("ItemMisc"), Prereqs.Acting.GroupIs("ItemMisc", ["抓住推车"])),
        ],
        MaxProgress: 50,
        Target: ["ItemTorso"],
    },
    run: (player, sender, { TargetCharacter, SourceCharacter }) => {
        if (TargetCharacter === player.MemberNumber) {
            // 遵守物品权限
            if (!ServerChatRoomGetAllowItem(sender, player)) return;
            monadic(
                "SourceC",
                ChatRoomCharacter.find((C) => C.MemberNumber === SourceCharacter)
            ).then((_, { SourceC }) => {
                ChatRoomOrder.setDrawOrder({
                    prevCharacter: SourceC.MemberNumber,
                    associatedAsset: {
                        group: "ItemDevices",
                        asset: "Trolley",
                    },
                });
                if (ChatRoomLeashList.indexOf(SourceC.MemberNumber) < 0) ChatRoomLeashList.push(SourceC.MemberNumber);
            });
        } else if (SourceCharacter === player.MemberNumber) {
            const group = "ItemMisc";
            monadic(
                "TargetC",
                ChatRoomCharacter.find((C) => C.MemberNumber === TargetCharacter)
            )
                .then(() => AssetGet("Female3DCG", group, "抓住推车"))
                .then((asset, { TargetC }) => {
                    InventoryWear(player, asset.Name, group);
                    ChatRoomCharacterItemUpdate(player, group);
                    ChatRoomOrder.setDrawOrder({
                        nextCharacter: TargetC.MemberNumber,
                        associatedAsset: { group, asset: "抓住推车" },
                    });
                    ChatRoomLeashPlayer = TargetC.MemberNumber;
                    CharacterRefreshLeash(Player);
                });
        }
    },
    useImage: DynImageProviders.itemOnActedGroup("ItemDevices"),
    label: {
        CN: "抓住推车",
        EN: "Grab the Trolley",
    },
    dialog: {
        CN: "SourceCharacter抓住了TargetCharacter的推车.",
        EN: "SourceCharacter grabs the Trolley of TargetCharacter.",
    },
};

const items = [{ prev: "抓住推车", next: "Trolley" }];

export default function () {
    ActivityManager.addCustomActivity(activity);

    SharedCenterModifier.addModifier(
        DrawMods.asset(items, (_, { sharedC, initState, C }) => {
            const { Zoom } = initState;
            if (sharedC.prev.MemberNumber === C.MemberNumber) {
                return { C, X: sharedC.center.X, Y: sharedC.center.Y - 50 * Zoom, Zoom };
            }
            if (sharedC.next.MemberNumber === C.MemberNumber) {
                return { C, X: sharedC.center.X, Y: sharedC.center.Y, Zoom };
            }
        })
    );
}
