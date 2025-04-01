import { MPAenabled } from "./enable";

const translation = {
    "SourceCharacter eats from PronounPossessive bowl.": "SourceCharacter从PronounPossessive碗里吃东西。",
    "SourceCharacter drinks from PronounPossessive bowl.": "SourceCharacter从PronounPossessive碗里喝东西。",
};

/**
 * 翻译MPA的动作文本
 * @type {TranslationFunction}
 */
export function translateActivityText(key) {
    if (!MPAenabled()) return undefined;
    if (translation[key]) return translation[key];
    return undefined;
}
