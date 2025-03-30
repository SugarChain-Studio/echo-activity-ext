import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "舔触手",
            Prerequisite: ["TargetHasTentacles"],
            MaxProgress: 50,
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
            CN: "SourceCharacter舔PronounPossessive的触手.",
            EN: "SourceCharacter licks PronounPossessive tentacles.",
            RU: "SourceCharacter облизывает свои тентакли.",
            UA: "SourceCharacter вилизує свої ж щупальця.",
        },
    },
    {
        activity: {
            Name: "触手摸头",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
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
            CN: "SourceCharacter用触手摸了摸TargetCharacter的头.",
            EN: "SourceCharacter pets TargetCharacter's head with tentacles.",
            RU: "SourceCharacter гладит TargetCharacter по голове тентаклями.",
            UA: "SourceCharacter гладить TargetCharacter по голові щупальцями.",
        },
        labelSelf: {
            CN: "触手摸头",
            EN: "Pet Head with Tentacles ",
            RU: "Погладить Тентаклями по Голове",
            UA: "Гладити щупальцями по голові",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手摸了摸自己的头.",
            EN: "SourceCharacter pets own head with tentacles.",
            RU: "SourceCharacter гладит себя тентаклями по голове.",
            UA: "SourceCharacter гладить себе по голові щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手戳鼻子",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
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
            EN: "SourceCharacter pokes TargetCharacter's nose with tentacles.",
            RU: "SourceCharacter косается носа TargetCharacter своими тентаклями.",
            UA: "SourceCharacter тицяє ніс TargetCharacter своїми щупальцями.",
        },
        labelSelf: {
            CN: "触手戳鼻子",
            EN: "Poke Nose with Tentacles",
            RU: "Коснуться Носа Тентаклями",
            UA: "Тицяти ніс щупальцями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的鼻子.",
            EN: "SourceCharacter Pokes own Nose with Tentacles.",
            RU: "SourceCharacter косается своего носа тентаклями.",
            UA: "SourceCharacter тицяє свій ніс щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手戳脸",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
            Target: ["ItemMouth"],
            TargetSelf: true,
        },
        useImage: ["TailStraps", "Tentacles"],
        label: {
            CN: "触手戳脸",
            EN: "Poke Face with Tentacles",
            RU: "Коснуться Лица Тентаклями",
            UA: "Тицяти лице щупальцями",
        },
        dialog: {
            CN: "SourceCharacter用触手戳了戳TargetCharacter的脸.",
            EN: "SourceCharacter pokes TargetCharacter's face with tentacles.",
            RU: "SourceCharacter касается лица TargetCharacter своими тентаклями.",
            UA: "SourceCharacter ніжно гладить щічку TargetCharacter своїми щупальцями.",
        },
        labelSelf: {
            CN: "触手戳脸",
            EN: "Poke Face with Tentacles",
            RU: "Коснуться Лица Тентаклями",
            UA: "Тицяти лице щупальцями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手戳了戳自己的脸.",
            EN: "SourceCharacter pokes own face with tentacles.",
            RU: "SourceCharacter касается своего лицо тентаклями.",
            UA: "SourceCharacter ніжно гладить свою щічку щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手揉鼻子",
            Prerequisite: ["NeedTentacles"],
            MaxProgress: 50,
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
            EN: "SourceCharacter rubs TargetCharacter's nose with tentacles.",
            RU: "SourceCharacter трогает нос TargetCharacter своими тентаклями.",
            UA: "SourceCharacter тре ніс TargetCharacter своїми щупальцями.",
        },
        labelSelf: {
            CN: "触手揉鼻子",
            EN: "Rub Nose with Tentacles",
            RU: "Потрогать нос Тентаклями",
            UA: "Терти ніс щупальцями",
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
            Prerequisite: ["NeedTentacles"],
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
            EN: "SourceCharacter lifts TargetCharacter's skirt with PronounPossessive tentacles.",
            RU: "SourceCharacter приподнимает юбку TargetCharacter с помощью своих тентаклей.",
            UA: "SourceCharacter піднямає спідницю TargetCharacter своїми щупальцями.",
        },
        labelSelf: {
            CN: "触手掀裙子",
            EN: "Lift skirt with tentacles",
            RU: "Поднять Юбку Тентаклями",
            UA: "Припідняти спідницю щупальцями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手掀开PronounPossessive的裙子.",
            EN: "SourceCharacter lifts PronounPossessive skirt with PronounPossessive tentacles.",
            RU: "SourceCharacter приподнимает свою юбку с помощью тентаклей.",
            UA: "SourceCharacter піднямає собі спідницю щупальцями.",
        },
    },
    {
        activity: {
            Name: "触手揉脸",
            Prerequisite: ["NeedTentacles"],
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
            EN: "SourceCharacter rubs TargetCharacter's face with PronounPossessive tentacles.",
            RU: "SourceCharacter трогает лицо TargetCharacter своими тентаклями.",
            UA: "SourceCharacter тре лице TargetCharacter своїми щупальцями.",
        },
        labelSelf: {
            CN: "触手揉脸",
            EN: "Rub Face with Tentacles",
            RU: "Потрогать Тентаклями Лицо",
            UA: "Терти лице щупальцями",
        },
        dialogSelf: {
            CN: "SourceCharacter用触手揉了揉自己的脸.",
            EN: "SourceCharacter rubs own face with tentacles.",
            RU: "SourceCharacter трогает свое лицо тентаклями.",
            UA: "SourceCharacter тре своє лице щупальцями.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
