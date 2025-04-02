import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "扇动翅膀",
            Prerequisite: ["Luzi_TargetHasWings"],
            MaxProgress: 20,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "振翅",
            EN: "Wing Flutter",
            RU: "Взмах крыльев",
            UA: "Помах крилами",
        },
        dialogSelf: {
            CN: "SourceCharacter轻轻扇动着自己的翅膀。",
            EN: "SourceCharacter gently flutters PronounPossessive wings.",
            RU: "SourceCharacter легко взмахивает своими крыльями.",
            UA: "SourceCharacter легко помахає своїми крилами.",
        },
    },
    {
        activity: {
            Name: "翅膀轻拍",
            Prerequisite: ["Luzi_TargetHasWings"],
            MaxProgress: 30,
            Target: ["ItemArms"],
        },
        useImage: "Wiggle",
        label: {
            CN: "翅膀轻拍",
            EN: "Wing Pat",
            RU: "Легкий шлепок крылом",
            UA: "Легкий ляск крилом",
        },
        dialog: {
            CN: "SourceCharacter用翅膀轻轻拍了拍TargetCharacter的手臂。",
            EN: "SourceCharacter gently pats DestinationCharacter arm with a wing.",
            RU: "SourceCharacter нежно шлёпает крылом по руке TargetCharacter.",
            UA: "SourceCharacter ніжно ляскає крилом по руці TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "翅膀环绕",
            Prerequisite: ["Luzi_TargetHasWings"],
            MaxProgress: 60,
            Target: ["ItemArms"],
        },
        useImage: "Wiggle",
        label: {
            CN: "翅膀环绕",
            EN: "Wing Embrace",
            RU: "Объятие крыльями",
            UA: "Обійми крилами",
        },
        dialog: {
            CN: "SourceCharacter用翅膀轻轻环绕住TargetCharacter。",
            EN: "SourceCharacter gently wraps wings around DestinationCharacter.",
            RU: "SourceCharacter нежно обнимает TargetCharacter своими крыльями.",
            UA: "SourceCharacter ніжно обіймає TargetCharacter своїми крилами.",
        },
    },
    {
        activity: {
            Name: "翅膀扇风",
            Prerequisite: ["Luzi_TargetHasWings"],
            MaxProgress: 45,
            Target: ["ItemHead"],
        },
        useImage: "Wiggle",
        label: {
            CN: "翅膀扇风",
            EN: "Wing Fan",
            RU: "Обмахивание крыльями",
            UA: "Обмахування крилами",
        },
        dialog: {
            CN: "SourceCharacter轻轻扇动翅膀为TargetCharacter带来凉风。",
            EN: "SourceCharacter gently fans DestinationCharacter with wings.",
            RU: "SourceCharacter нежно обмахивает TargetCharacter своими крыльями.",
            UA: "SourceCharacter ніжно обмахує TargetCharacter своїми крилами.",
        },
    },
    {
        activity: {
            Name: "收拢翅膀",
            Prerequisite: ["Luzi_TargetHasWings"],
            MaxProgress: 20,
            Target: [],
            TargetSelf: ["ItemArms"],
        },
        useImage: "Wiggle",
        labelSelf: {
            CN: "收拢翅膀",
            EN: "Fold Wings",
            RU: "Сложить крылья",
            UA: "Скласти крила",
        },
        dialogSelf: {
            CN: "SourceCharacter收拢起自己的翅膀。",
            EN: "SourceCharacter folds PronounPossessive wings.",
            RU: "SourceCharacter складывает свои крылья。",
            UA: "SourceCharacter складає свої крила。",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
