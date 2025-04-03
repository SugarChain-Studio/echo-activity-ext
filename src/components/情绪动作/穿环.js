import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "钩住阴蒂环",
            Prerequisite: ["UseHands", "Luzi_TargetHasItemVulvaPiercings"],
            MaxProgress: 100,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "勾弄阴蒂环",
            EN: "Hook Clitoral Ring",
            RU: "Зацепить клиторальное кольцо",
            UA: "Зачіпити кліторальне кільце",
        },
        dialog: {
            CN: "SourceCharacter 用手指轻轻勾住了 TargetCharacter 的阴蒂环。",
            EN: "SourceCharacter hooks a finger around DestinationCharacter clitoral ring.",
            RU: "SourceCharacter зацепляет палец за клиторальное кольцо TargetCharacter.",
            UA: "SourceCharacter зачіпляє палець за кліторальне кільце TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "拉扯阴蒂环",
            Prerequisite: ["UseHands", "Luzi_TargetHasItemVulvaPiercings"],
            MaxProgress: 100,
            Target: ["ItemVulvaPiercings"],
            TargetSelf: true,
        },
        useImage: "Pinch",
        label: {
            CN: "轻扯阴蒂环",
            EN: "Tug Clitoral Ring",
            RU: "Потянуть клиторальное кольцо",
            UA: "Потягнути кліторальне кільце",
        },
        dialog: {
            CN: "SourceCharacter 用手指轻轻拉扯了一下 TargetCharacter 的阴蒂环。",
            EN: "SourceCharacter gives a gentle tug to DestinationCharacter clitoral ring.",
            RU: "SourceCharacter слегка тянет за клиторальное кольцо TargetCharacter.",
            UA: "SourceCharacter ніжно потягає за кліторальне кільце TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "用手观察阴蒂环",
            Prerequisite: ["UseHands", "Luzi_TargetHasItemVulvaPiercings"],
            MaxProgress: 60,
            Target: ["ItemVulvaPiercings"],
        },
        useImage: "Pinch",
        label: {
            CN: "检视阴蒂环",
            EN: "Inspect Piercing",
            RU: "Осмотр пирсинга",
            UA: "Огляд пірсингу",
        },
        dialog: {
            CN: "SourceCharacter 用指尖轻轻托起 TargetCharacter 的阴蒂环，仔细端详着金属环的做工和光泽。",
            EN: "SourceCharacter lifts the clitoral piercing with fingertips, carefully examining the craftsmanship and luster of the metal.",
            RU: "SourceCharacter кончиками пальцев бережно приподнимает клиторальный пирсинг, внимательно изучая качество металла и работу мастера.",
            UA: "SourceCharacter подібрав пірсинг клітора кінчиками пальців, уважно вивчаючи якість металу та майстерність виконання.",
        },
    },
    {
        activity: {
            Name: "拨弄阴蒂环",
            Prerequisite: ["UseHands", "Luzi_TargetHasItemVulvaPiercings"],
            MaxProgress: 100,
            Target: ["ItemVulvaPiercings"],
        },
        useImage: "Pinch",
        label: {
            CN: "把玩阴蒂环",
            EN: "Toy with Piercing",
            RU: "Играть с пирсингом",
            UA: "Побавитися з пірсингом",
        },
        dialog: {
            CN: "SourceCharacter 用手指缓缓转动 TargetCharacter 的金属环，观察对方的反应。",
            EN: "SourceCharacter slowly rotates the metal ring with fingers, observing the partner's reaction.",
            RU: "SourceCharacter медленно проворачивает металлическое кольцо пальцами, наблюдая за реакцией партнера.",
            UA: "SourceCharacter повільно обертає металеве кільце пальцями, спостерігаючи за реакцією партнера.",
        },
    },
    {
        activity: {
            Name: "拉扯阴蒂环",
            Prerequisite: ["UseHands", "Luzi_TargetHasItemVulvaPiercings"],
            MaxProgress: 100,
            Target: ["ItemVulvaPiercings"],
        },
        useImage: "Pinch",
        label: {
            CN: "轻拉阴蒂环",
            EN: "Tug Piercing",
            RU: "Потянуть пирсинг",
            UA: "Потягнути пірсинг",
        },
        dialog: {
            CN: "SourceCharacter 用手指轻轻拉扯 TargetCharacter 的阴蒂环，金属的凉意和轻微的拉力形成奇妙的触感。",
            EN: "SourceCharacter gives a gentle tug to the piercing, creating a peculiar sensation between the cool metal and slight tension.",
            RU: "SourceCharacter слегка тянет за пирсинг, создавая необычное ощущение от прохладного металла и легкого натяжения.",
            UA: "SourceCharacter ніжно тягне за пірсинг, створюючи особливе відчуття від прохолодного металу та легкого натягу.",
        },
    },
    {
        activity: {
            Name: "调整阴蒂环",
            Prerequisite: ["UseHands", "Luzi_TargetHasItemVulvaPiercings"],
            MaxProgress: 40,
            Target: ["ItemVulvaPiercings"],
        },
        useImage: "Pinch",
        label: {
            CN: "调整阴蒂环位置",
            EN: "Adjust Piercing",
            RU: "Поправить пирсинг",
            UA: "Вирівняти пірсинг",
        },
        dialog: {
            CN: "SourceCharacter 熟练地调整 TargetCharacter 饰品的位置，确保佩戴舒适度。",
            EN: "SourceCharacter skillfully adjusts the jewelry position to ensure wearing comfort.",
            RU: "SourceCharacter умело корректирует положение украшения для обеспечения комфорта.",
            UA: "SourceCharacter уміло коригує положення прикраси для забезпечення комфорту.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}



