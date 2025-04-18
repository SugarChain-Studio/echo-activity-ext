import { ActivityManager } from "../../activityForward";
import { Prereqs } from "../../Prereqs";
import { i18nAction } from "../../messager";

/** @type {CustomGroupName[]} */
const gloves = ["Gloves", "Gloves_笨笨蛋Luzi", "Gloves_笨笨笨蛋Luzi2"];

/** @type {CustomGroupName[]} */
const shoes = ["Shoes", "Shoes_笨笨蛋Luzi", "Shoes_笨笨笨蛋Luzi2"];

/** @type {CustomGroupName[]} */
const socks = [
    "Socks",
    "SocksLeft",
    "SocksRight",
    "Socks_笨笨蛋Luzi",
    "SocksLeft_笨笨蛋Luzi",
    "SocksRight_笨笨蛋Luzi",
    "Socks_笨笨笨蛋Luzi2",
    "SocksLeft_笨笨笨蛋Luzi2",
    "SocksRight_笨笨笨蛋Luzi2",
];

/**
 * @param {Character} acting
 */
function calcuTimeAndPosi(acting) {
    let time = 1000;
    let posi = 1;

    /** @type { {name: keyof Character, time?:number, posi?:number}[]} */
    const checks = [
        { name: "IsRestrained", time: 3000, posi: -0.3 },
        { name: "IsKneeling", time: -500 },
        { name: "IsBlind", time: 4000, posi: -0.5 },
    ];

    for (const check of checks) {
        if (/** @type {(c:Character)=>boolean}*/ (acting[check.name])(acting)) {
            if (check.time) time += check.time;
            if (check.posi) posi += check.posi;
        }
    }

    time = Math.max(500, time);
    posi = Math.min(Math.max(0, posi), 1);

    return { time, posi };
}

function removingCheck(pool, { source, destination }, { time, posi }) {
    if (pool.length === 0) {
        i18nAction(
            {
                CN: "SourceCharacter没有找到可以脱掉的物品.",
                EN: "SourceCharacter did not find any items that can be taken off.",
            },
            { source, destination }
        );

        i18nAction(
            {
                CN: "SourceCharacter没有找到可以脱掉的物品.",
                EN: "SourceCharacter did not find any items that can be taken off.",
            },
            { source, destination }
        );
        return;
    }

    setTimeout(() => {
        const rdItem = pool[Math.floor(Math.random() * pool.length)];
        if (Math.random() < posi) {
            i18nAction(
                {
                    CN: "SourceCharacter成功用嘴脱掉了DestinationCharacterNameAssetName.",
                    EN: "SourceCharacter successfully took off DestinationCharacterName AssetName with mouth.",
                },
                { source, destination, asset: rdItem.Asset }
            );
            InventoryRemove(Player, rdItem.Asset.Group.Name);
            ChatRoomCharacterItemUpdate(destination, rdItem.Asset.Group.Name);
        } else {
            i18nAction(
                {
                    CN: "SourceCharacter尝试用嘴脱掉DestinationCharacterNameAssetName，但失败了.",
                    EN: "SourceCharacter tries to take off DestinationCharacterName AssetName with mouth, but failed.",
                },
                { source, destination, asset: rdItem.Asset }
            );
        }
    }, time);
}

function removeCallback(groups) {
    return function (player, sender, info) {
        if (player.MemberNumber !== info.TargetCharacter) return;
        removingCheck(
            player.Appearance.filter((item) => groups.includes(item.Asset.Group.Name)),
            { source: sender, destination: player },
            calcuTimeAndPosi(sender)
        );
    };
}

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "用嘴脱掉手套",
            Prerequisite: ["UseMouth", Prereqs.Acted.TargetGroupEmpty(), Prereqs.not(Prereqs.Acted.GroupEmpty(gloves))],
            MaxProgress: 50,
            Target: ["ItemHands"],
        },
        run: removeCallback(gloves),
        useImage: "MasturbateHand",
        label: {
            CN: "用嘴脱手套",
            EN: "Mouth off Gloves",
        },
        dialog: {
            CN: "SourceCharacter尝试用嘴脱掉TargetCharacter的手套.",
            EN: "SourceCharacter tries to take off DestinationCharacter gloves with mouth.",
        },
    },
    {
        activity: {
            Name: "用嘴脱掉鞋子",
            Prerequisite: ["UseMouth", Prereqs.Acted.TargetGroupEmpty(), Prereqs.not(Prereqs.Acted.GroupEmpty(shoes))],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        run: removeCallback(shoes),
        useImage: "MasturbateFoot",
        label: {
            CN: "用嘴脱掉鞋子",
            EN: "Mouth off Shoes",
        },
        dialog: {
            CN: "SourceCharacter尝试用嘴脱掉TargetCharacter的鞋子.",
            EN: "SourceCharacter tries to take off DestinationCharacter shoes with mouth.",
        },
    },
    {
        activity: {
            Name: "用嘴脱掉袜子",
            Prerequisite: [
                "UseMouth",
                Prereqs.Acted.TargetGroupEmpty(),
                Prereqs.Acted.GroupEmpty(shoes),
                Prereqs.not(Prereqs.Acted.GroupEmpty(socks)),
            ],
            MaxProgress: 50,
            Target: ["ItemBoots"],
        },
        run: removeCallback(socks),
        useImage: "MasturbateFoot",
        label: {
            CN: "用嘴脱掉袜子",
            EN: "Mouth off Socks",
        },
        dialog: {
            CN: "SourceCharacter尝试用嘴脱掉TargetCharacter的袜子.",
            EN: "SourceCharacter tries to take off DestinationCharacter socks with mouth.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
