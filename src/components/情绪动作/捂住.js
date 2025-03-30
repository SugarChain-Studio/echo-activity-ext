import { ActivityManager } from "../../activityForward";

/** @type { CustomActivity []} */
const activities = [
    {
        activity: {
            Name: "捂住头",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemHead"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "捂住头",
            EN: "Cover Head",
            RU: "Прикрыть Голову",
            UA: "Прикрити голову",
        },
        dialog: {
            CN: "SourceCharacter捂住TargetCharacter的头，试图遮掩自己的脸。",
            EN: "SourceCharacter covers DestinationCharacter head with hands, trying to hide PronounPossessive face.",
            RU: "SourceCharacter закрывает голову TargetCharacter руками.",
            UA: "SourceCharacter прикриває голову TargetCharacter своїми руками.",
        },
    },
    {
        activity: {
            Name: "捂住下体",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: ["ItemVulva"],
            TargetSelf: true,
        },
        useImage: "HandGag",
        label: {
            CN: "捂住下体",
            EN: "Cover Groin",
            RU: "Прикрыть Промежность",
            UA: "Прикрити пах",
        },
        dialog: {
            CN: "SourceCharacter捂住TargetCharacter的下体，试图遮掩自己的身体。",
            EN: "SourceCharacter covers DestinationCharacter groin with hands, trying to hide PronounPossessive body.",
            RU: "SourceCharacter прикрывает промежность TargetCharacter своими руками.",
            UA: "SourceCharacter прикриває пах TargetCharacter.",
        },
    },
    {
        activity: {
            Name: "捂住胸",
            Prerequisite: ["UseHands", "UseArms"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemBreast"],
        },
        useImage: "Pull",
        labelSelf: {
            CN: "捂住胸",
            EN: "Cover Chest",
            RU: "Прикрыть Грудь",
            UA: "Прикрити груди",
        },
        dialogSelf: {
            CN: "SourceCharacter用手捂住自己的胸，试图遮掩自己的身体。",
            EN: "SourceCharacter covers PronounPossessive chest with hands, trying to hide PronounPossessive body.",
            RU: "SourceCharacter прикрывает свою грудь.",
            UA: "SourceCharacter прикриває свої груди.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
