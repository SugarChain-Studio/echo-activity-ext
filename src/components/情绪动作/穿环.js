import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "钩住阴蒂环",
            Prerequisite: ["UseHands", "TargetHasItemVulvaPiercings"],
            MaxProgress: 50,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "钩住阴蒂环",
            EN: "Hook Clitoral Piercing",
            RU: "Подцепить за Пирсинг",
            UA: "Тягнути кліторальний пірсінг",
        },
        dialog: {
            CN: "SourceCharacter钩住TargetCharacter的阴蒂环.",
            EN: "SourceCharacter hooks onto DestinationCharacter clitoral piercing.",
            RU: "SourceCharacter цепляется за пирсинг на клиторе TargetCharacter.",
            UA: "SourceCharacter підтягує кліторальний пірсінг TargetCharacter дразнячи PronounPossessive.",
        },
    },
    {
        activity: {
            Name: "拉扯阴蒂环",
            Prerequisite: ["UseHands", "TargetHasItemVulvaPiercings"],
            MaxProgress: 50,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "拉扯阴蒂环",
            EN: "Tug Clitoral Piercing",
            RU: "Потянуть за Пирсинг",
            UA: "Тягнути кліторальний пірсінг",
        },
        dialog: {
            CN: "SourceCharacter拉了一下TargetCharacter的阴蒂环.",
            EN: "SourceCharacter tugs on DestinationCharacter clitoral piercing and then releases it.",
            RU: "SourceCharacter тянет за пирсинг на клиторе TargetCharacter.",
            UA: "SourceCharacter підтягує кліторальний пірсінг TargetCharacter дразнячи PronounPossessive.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
