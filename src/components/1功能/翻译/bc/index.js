import { HookManager } from "@sugarch/bc-mod-hook-manager";
import { MPA } from "./MPA";

function shouldTranslate() {
    return ["CN", "TW"].includes(TranslationLanguage);
}

function translateMenuText(key) {
    for (const { translateMenuText } of [MPA]) {
        const translated = translateMenuText?.(key);
        if (translated) return translated;
    }
    return key;
}

/**
 *
 * @template T
 * @param {string} key
 * @param {(arg:string)=>T} callback
 */
function translateActivityText(key, callback) {
    for (const { translateActivityText } of [MPA]) {
        const translated = translateActivityText?.(key);
        if (translated) return callback(translated);
    }
}

export function setup() {
    const insideDrawCharaApp = HookManager.insideFlag("CommonDrawAppearanceBuild");
    const insideDrawCharacter = HookManager.insideFlag("DrawCharacter");
    const inside = () => insideDrawCharaApp.inside || insideDrawCharacter.inside;

    ["DrawText", "DrawTextFit", "DrawTextWrap", "DynamicDrawText"].forEach((name) => {
        HookManager.hookFunction(name, 10, (args, next) => {
            if (!inside() && shouldTranslate() && args[0])
                // @ts-ignore
                args[0] = translateMenuText(args[0]);
            return next(args);
        });
    });

    HookManager.hookFunction("ActivityDictionaryText", 1, (args, next) => {
        let ret = next(args);
        if (shouldTranslate()) {
            translateActivityText(ret, (text) => {
                ret = text;
            });
        }
        return ret;
    });

    HookManager.hookFunction("ChatRoomMessage", 0, (args, next) => {
        if (shouldTranslate()) {
            const { Content, Type, Dictionary } = args[0];

            const targetTag = (() => {
                if (Type === "Action") {
                    if (Content === "Beep") return "msg";
                    return `MISSING TEXT IN "Interface.csv": ${Content}`;
                } else if (Type === "Activity") {
                    return `MISSING ACTIVITY DESCRIPTION FOR KEYWORD ${Content}`;
                }
                return undefined;
            })();

            const target = /** @type {TextDictionaryEntry | undefined}*/ (
                Dictionary.find((item) => {
                    return /** @type {any} */ (item)?.Tag === targetTag;
                })
            );

            if (target) {
                translateActivityText(target.Text, (translated) => {
                    target.Text = translated;
                });

                if (Content === "Beep") {
                    // BCAR+ deliberately remove this tag to prevent CN support
                    if (!Dictionary.find((item) => /** @type {any} */ (item)?.Tag === "(发送私聊)")) {
                        Dictionary.push({
                            Tag: "(发送私聊)",
                            Text: "msg",
                        });
                    }
                }
            }
        }

        next(args);
    });
}
