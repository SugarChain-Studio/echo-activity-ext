import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "舔触手",
            Prerequisite: ["Luzi_TargetHasTentacles"],
            MaxProgress: 80,
            Target: [],
            TargetSelf: ["ItemMouth"],
        },
        useImage: ["TailStraps", "Tentacles"],
        labelSelf: {
            CN: "舔触手",
            EN: "Lick Tentacles",
            RU: "Облизать Тентакли",
            UA: "Вилизати Щупальця",
        },
        dialogSelf: {
            CN: "SourceCharacter轻轻舔舐着TargetCharacter的触手。",
            EN: "SourceCharacter gently licks DestinationCharacter tentacles.",
            RU: "SourceCharacter нежно облизывает щупальца.",
            UA: "SourceCharacter ніжно облизує щупальця.",
        },
    },
    {
        activity: {
            Name: "触手摸头",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 20,
            Target: ["ItemHead"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手摸头",
            EN: "Pet Head with Tentacles",
            RU: "Погладить Тентаклями по Голове",
            UA: "Гладити щупальцями по голові",
        },
        dialog: {
            CN: "SourceCharacter用触手轻轻抚摸TargetCharacter的头部。",
            EN: "SourceCharacter gently pats DestinationCharacter head with tentacles.",
            RU: "SourceCharacter нежно гладит голову TargetCharacter щупальцами.",
            UA: "SourceCharacter ніжно гладить голову TargetCharacter щупальцями.",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手轻轻抚摸自己的头部。",
            EN: "SourceCharacter gently pats own head with tentacles.",
            RU: "SourceCharacter нежно гладит свою голову щупальцами.",
            UA: "SourceCharacter ніжно гладить свою голову щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手戳鼻子",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 20,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手戳鼻子",
            EN: "Poke Nose with Tentacles",
            RU: "Коснуться Носа Тентаклями",
            UA: "Тицьнути ніс щупальцями",
        },
        dialog: {
            CN: "SourceCharacter用触手戳了戳TargetCharacter的鼻子.",
            EN: "SourceCharacter pokes DestinationCharacter nose with tentacles.",
            RU: "SourceCharacter косается носа TargetCharacter своими тентаклями.",
            UA: "SourceCharacter тицяє ніс TargetCharacter своїми щупальцями.",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的鼻子。",
            EN: "SourceCharacter pokes own nose with tentacles.",
            RU: "SourceCharacter тыкает щупальцами в свой нос.",
            UA: "SourceCharacter тицяє щупальцями у свій ніс.",
        },
    },
    {
        activity: {
            Name: "触手轻抚鼻尖",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 30,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手轻抚鼻尖",
            EN: "Tentacle Nose Stroke",
            RU: "Поглаживание носа щупальцем",
            UA: "Погладжування носа щупальцем",
        },
        dialog: {
            CN: "SourceCharacter用触手轻轻触碰TargetCharacter的鼻尖。",
            EN: "SourceCharacter gently touches DestinationCharacter nose with tentacles.",
            RU: "SourceCharacter нежно касается носа TargetCharacter щупальцами.",
            UA: "SourceCharacter ніжно торкається носа TargetCharacter щупальцями.",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手轻轻触碰自己的鼻尖。",
            EN: "SourceCharacter gently touches own nose with tentacles.",
            RU: "SourceCharacter нежно касается своего носа щупальцами.",
            UA: "SourceCharacter ніжно торкається свого носа щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手戳脸",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 20,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手轻触脸颊",
            EN: "Tentacle Caress",
            RU: "Нежное касание щупальцем",
            UA: "Ніжний дотик щупальцем",
        },
        dialog: {
            CN: "SourceCharacter用触手尖端轻轻触碰TargetCharacter的脸颊。",
            EN: "SourceCharacter gently touches DestinationCharacter cheek with the tip of a tentacle.",
            RU: "SourceCharacter нежно касается щеки TargetCharacter кончиком щупальца.",
            UA: "SourceCharacter ніжно торкається щоки TargetCharacter кінчиком щупальця.",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手轻轻碰触自己的脸颊。",
            EN: "SourceCharacter lightly touches own cheek with a tentacle.",
            RU: "SourceCharacter легко касается своей щеки щупальцем.",
            UA: "SourceCharacter легко торкається власної щоки щупальцем.",
        },
    },
    {
        activity: {
            Name: "触手揉鼻子",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 30,
            Target: ["ItemNose"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手揉鼻子",
            EN: "Rub Nose with Tentacles",
            RU: "Потрогать Нос Тентаклями",
            UA: "Терти ніс щупальцями",
        },
        dialog: {
            CN: "SourceCharacter用触手揉了揉TargetCharacter的鼻子.",
            EN: "SourceCharacter rubs DestinationCharacter nose with tentacles.",
            RU: "SourceCharacter трогает нос TargetCharacter своими тентаклями.",
            UA: "SourceCharacter тре ніс TargetCharacter своїми щупальцями.",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的鼻子.",
            EN: "SourceCharacter rubs own nose with tentacles.",
            RU: "SourceCharacter трогает свой нос тентаклями.",
            UA: "SourceCharacter тре свій ніс щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手掀裙子",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 50,
            Target: ["ItemButt"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手掀裙子",
            EN: "Lift skirt with tentacles",
            RU: "Поднять Юбку Тентаклями",
            UA: "Припідняти спідницю щупальцями",
        },
        dialog: {
            CN: "SourceCharacter用触手掀开TargetCharacter的裙子.",
            EN: "SourceCharacter lifts DestinationCharacter skirt with PronounPossessive tentacles.",
            RU: "SourceCharacter приподнимает юбку TargetCharacter с помощью своих тентаклей.",
            UA: "SourceCharacter піднямає спідницю TargetCharacter своїми щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手揉脸",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手揉脸",
            EN: "Rub Face with Tentacles",
            RU: "Потрогать Тентаклями Лицо",
            UA: "Терти лице щупальцями",
        },
        dialog: {
            CN: "SourceCharacter用触手揉了揉TargetCharacter的脸.",
            EN: "SourceCharacter rubs DestinationCharacter face with PronounPossessive tentacles.",
            RU: "SourceCharacter трогает лицо TargetCharacter своими тентаклями.",
            UA: "SourceCharacter тре лице TargetCharacter своїми щупальцями.",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的脸.",
            EN: "SourceCharacter rubs own face with tentacles.",
            RU: "SourceCharacter трогает свое лицо тентаклями.",
            UA: "SourceCharacter тре своє лице щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手缠绕手腕",
            Prerequisite: ["Luzi_HasTentacles"],
            MaxProgress: 60,
            Target: ["ItemHands"],
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手缠绕手腕",
            EN: "Tentacle Wrist Wrap",
            RU: "Обвитие щупальцами запястья",
            UA: "Обвиття щупальцями зап'ястя",
        },
        dialog: {
            CN: "SourceCharacter用触手轻轻缠绕住TargetCharacter的手腕。",
            EN: "SourceCharacter gently wraps tentacles around DestinationCharacter wrist.",
            RU: "SourceCharacter нежно обвивает щупальцами запястье TargetCharacter.",
            UA: "SourceCharacter ніжно обвиває щупальцями зап'ястя TargetCharacter.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
