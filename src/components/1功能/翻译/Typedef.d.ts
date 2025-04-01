/**
 * 翻译函数
 * @param src 要翻译的原文本
 * @returns 翻译后的字符串，如果没有找到对应的翻译，则返回 undefined
 */
type TranslationFunction = (src: string) => string | undefined;

/**
 * 翻译单元
 * @param translateActivityText 翻译活动文本的函数
 * @param translateMenuText 翻译菜单文本的函数
 */
type TranslationUnit = {
    translateActivityText?: TranslationFunction;
    translateMenuText?: TranslationFunction;
};
