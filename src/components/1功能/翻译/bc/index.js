import { HookManager } from "@sugarch/bc-mod-hook-manager";
import { translation as BCAR } from "./BCAR";
import { translation as BCX } from "./BCX";
import { translation as FBC } from "./FBC";
import { activities, translation as LSCG } from "./LSCG";
import { translation as MBS } from "./MBS";
import { translation as WCE } from "./WCE";
import { translation as MPA } from "./MPA";
import { translation as DOGS } from "./DOGS";
import { translation as BCTweaks } from "./BCTweaks";
import { translationsDTF, translationsDTF2, act_dialogs, pronouns } from "./regexRep";

const translations = [BCAR, BCX, FBC, LSCG, MBS, WCE, MPA, DOGS, BCTweaks].reduce(
    (pv, cv) => Object.assign(pv, cv),
    {}
);

function tryReplaceWithNames(key) {
    let nKey = key;
    const PName = Player?.Name;
    const SName = InformationSheetSelection?.Name;
    if (!PName || !SName) return nKey;
    if (nKey.includes(PName) || nKey.includes(SName)) {
        translationsDTF.forEach(({ regex, replacement }) => (nKey = nKey.replace(regex, replacement)));
    } else {
        // TODO 不知道这样写对不对 0 0    这个是翻译不带玩家名字的文本的
        translationsDTF2.forEach(({ regex, replacement }) => (nKey = nKey.replace(regex, replacement)));
    }
    return nKey;
}

/**
 *
 * @param {string} key
 * @returns {string}
 */
function replaceTranslate(key) {
    if (!key) return key;
    if (TranslationLanguage !== "CN" && TranslationLanguage !== "TW") return key;

    let nKey = key;
    nKey = tryReplaceWithNames(nKey);
    return translations[nKey] || nKey;
}

export function setup() {
    let insideCharacterDraw = false;

    HookManager.hookFunction("CommonDrawAppearanceBuild", 10, (args, next) => {
        insideCharacterDraw = true;
        const ret = next(args);
        insideCharacterDraw = false;
        return ret;
    });

    HookManager.hookFunction("DrawText", 10, (args, next) => {
        if (!insideCharacterDraw) args[0] = replaceTranslate(args[0]);
        next(args);
    });

    HookManager.hookFunction("DrawTextFit", 10, (args, next) => {
        if (!insideCharacterDraw) args[0] = replaceTranslate(args[0]);
        next(args);
    });

    HookManager.hookFunction("DrawTextWrap", 10, (args, next) => {
        if (!insideCharacterDraw) args[0] = replaceTranslate(args[0]);
        next(args);
    });

    HookManager.hookFunction("DynamicDrawText", 10, (args, next) => {
        if (!insideCharacterDraw) args[0] = replaceTranslate(args[0]);
        next(args);
    });

    HookManager.hookFunction("ActivityDictionaryText", 1, (args, next) => {
        const ret = next(args);
        if (TranslationLanguage === "CN" || TranslationLanguage === "TW") return activities[ret] || ret;
        return ret;
    });

    HookManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        if (TranslationLanguage === "CN" || TranslationLanguage === "TW") {
            const { Content, Type, Dictionary } = args[0];
            if (Content === "Beep" && Type === "Action") {
                // 旧式BCX自定义动作
                const target = /** @type {TextDictionaryEntry | undefined}*/ (
                    Dictionary.find((item) => {
                        const dtag = /** @type {TextDictionaryEntry}*/ (item);
                        return dtag.Tag === "msg";
                    })
                );

                if (target) {
                    act_dialogs.forEach(({ regex, replacement }) => {
                        target.Text = target.Text.replace(regex, replacement);
                    });
                    pronouns.forEach(({ regex, replacement }) => {
                        target.Text = target.Text.replace(regex, replacement);
                    });
                }
            }
        }

        next(args);
    });
}
