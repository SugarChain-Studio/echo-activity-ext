import { nodeIsHTML, translateNode } from "./utils/utils";

const baseDOM = {
    "Addon Manager": "插件管理器",
    "SAVE": "保存",
    "Debug": "调试",
    "Device": "本设备启用",
    "Account": "当前账户启用",
    "None": "无",
    "stable": "稳定版",
    "dev": "开发版",
};

const translation = {
    "\n\t\t\t\t\tA note on security: while addons that are found to be malicious\n\t\t\t\t\twill be removed from the Addon Manager, it is still possible for\n\t\t\t\t\tsome to slip through the cracks.\n\t\t\t\t":
        "关于安全性的说明:虽然发现恶意插件会从插件管理器中删除, 但仍然可能会有一些插件漏网之鱼.",

    "website": "网站",
    "repository": "代码库",

    "For Better Club (FBC)": "更好的俱乐部 (FBC)",
    "Smarter, extensible facial animation and posing engine, instant messaging, appearance layering and a collection of quality of life improvements.":
        "智能、可扩展的面部动画和姿势引擎、即时消息、外观分层以及一系列提升游戏品质的改进",
    "by the authors of the Addon Manager": "由插件管理器的作者编写",

    "Wholesome Club Extensions (WCE)": "健康俱乐部扩展 (WCE)",
    "by Sidious & Stella": "由 Sidious & Stella 编写",
    "Smarter, extensible facial animation and posing engine, instant messaging, appearance layering and a collection of quality of life improvements - A fork of FBC 5.8":
        "智能、可扩展的面部动画和姿势引擎、即时消息、外观分层以及一系列提升游戏品质的改进 - FBC 5.8 的分支",

    "Universal Remote": "通用远程控制器 (Universal Remote)",
    "This remote works across chat rooms, but requires both players to have it. /ur or friends list to use.":
        "该远程控制器可以跨聊天室使用, 但需要双方玩家都拥有它./ur 或 好友列表中使用.",

    "Bondage Club Extended (BCX)": "束缚俱乐部扩展 (BCX)",
    "by Jomshir98 & Claudia": "由 Jomshir98 & Claudia 编写",
    "Adds rules, curses, and more to enhance D/s play alongside a handful of quality of life improvements":
        "添加规则、诅咒等, 以增强 D/s 游戏体验, 并提供一些提升游戏品质的改进",

    "Themed": "主题 (Themed)",
    "by dDeepLb": "由 dDeepLb 编写",
    "Adds custom themes to BC along with other features": "为 BC 添加自定义主题以及其他功能",

    "Advanced Drone Control System (ADCS)": "先进仆从机控制系统 (ADCS)",
    "by SaotomeToyStore": "由 SaotomeToyStore 制作",
    "Expansion of Drone gameplay": "提供一些主人语言指令控制ADCS束缚套装的功能",

    "BCX Reset Button Disabler": "BCX 重置按钮禁用器 (BCX Reset Button Disabler)",
    "by Ciber": "由 Ciber 制作",
    "A very simple addon that disables the Module and Reset Buttons from BCX. That means you can have a new layer of helplessness.":
        "一个非常简单的插件, 可以禁用 BCX 的模块和重置按钮.这意味着你可以增加一层新的无助感.",

    "Bondage Club Auto React (BCAR)": "束缚俱乐部自动回应 (BCAR)",
    "by Dr Branestawm": "由 Dr Branestawm 制作",
    "Automatically reacts to messages in the Bondage Club": "自动回应束缚俱乐部的消息",

    "Bondage Club X-Toys Integration": "束缚俱乐部 X-Toys 集成 (Bondage Club X-Toys Integration)",
    "by ItsNorin": "由 ItsNorin 制作",
    "Sync club interactions and toys with IRL remote-controlled toys, recommended use with https://github.com/itsFro/BCBridge":
        "将俱乐部互动和玩具与现实生活中的远程控制玩具同步, 建议与 https://github.com/itsFro/BCBridge 一起使用",

    "BCTweaks": "BC调整 (BCTweaks)",
    "by Crimsonfox & agicitag": "由 Crimsonfox & agicitag 制作",
    "Split arousal and orgasm bars, tail wagging, and Best Friends": "分割兴奋和高潮条, 摇尾巴和最好的朋友",

    "CIA (Community Information Addon)": "CIA (社区信息插件)",
    "by JD & Ramona": "由 JD & Ramona 制作",
    "This set of scripts adds several chat commands to BC. The commands work in conjunction with a central database of players managed by members of the community of the Slave Helpline room and the BCCA":
        "这个脚本集为 BC 添加了几个聊天命令.这些命令与由 Slave Helpline 房间和 BCCA 的成员管理的玩家中央数据库结合使用",

    "Eli's Bondage Club Helper (EBCH)": "Eli 的束缚俱乐部助手 (EBCH)",
    "by Elicia": "由 Elicia 制作",
    "Ungarble, custom notifications, altering other player's poses": "解除混淆, 自定义通知, 修改其他玩家的姿势",

    "Little Sera's Club Games (LSCG)": "Little Sera 的俱乐部游戏 (LSCG)",
    "by Little Sera": "由 Little Sera 制作",
    "Adds large gamified systems for hypnotism and breathplay": "添加了大型游戏化系统, 用于催眠和呼吸游戏.",

    "Mute's Bondage Club Hacks Collection (MBCHC)": "Mute 的束缚俱乐部黑客收藏 (MBCHC)",
    "by Mute": "由 Mute 制作",
    "Autohack, local time, some keyboard goodies etc.": "自动黑客, 本地时间, 一些键盘上的东西等等",

    "Maid's Bondage Scripts (MBS)": "Maid的束缚脚本 (MBS)",
    "by Rama": "由 Rama 制作",
    "Additional crafting slots, additional options in wheel of fortune, and custom outfits in wheel of fortune":
        "额外的制作槽, 命运之轮中的额外选项, 以及命运之轮中的定制服装",

    "Responsive": "回应 (Responsive)",
    "by SaotomeToyStore, dDeepLb": "由 SaotomeToyStore, dDeepLb 制作",
    "Automatically sends messages when the user reaches a certain state (slapped, orgasm, etc).":
        "当用户达到特定状态(被打, 高潮等)时自动发送消息.",

    "ULTRAbc": "ULTRA Bondage Club (ULTRAbc)",
    "by Nemesea": "由 Nemesea 制作",
    "A large collection of cheats, quality of life improvements, and a moaner script":
        "一大堆作弊、提高游戏品质的改进和呻吟者脚本.",

    "NotifyPlus": "改进提醒 (NotifyPlus)",
    "Improve the Name Mentioned notification in the original BC. Use keywords for mentioning names according to different roles.":
        "改进原始 BC 中提到的名称通知.根据不同角色使用关键字提及名称.",

    "TTS and Morse": "TTS 和 Morse (TTS and Morse)",
    "by KatKammand": "由 KatKammand 制作",
    "Text-to-speech reading for chat messages, and some buttplug.io + morse functionalities.":
        "聊天文字转语音阅读, 以及一些 buttplug.io + morse 功能.",

    "Chat Auto Translator Script": "聊天自动翻译脚本 (Chat Auto Translator Script)",
    "by Ciber, dDeepLb and KatKammand": "由 Ciber, dDeepLb 和 KatKammand 制作",
    "Addon that auto-translates the chat to the language you want. 130+ Languages available. Commands: /ttoggle to toggle the translator on and off. And /tlang <lang_code>用于更改所使用的语言.</lang_code>":
        "插件自动将聊天翻译成您想要的语言. 130 多种语言可用. 命令: /ttoggle 切换翻译器开和关. 以及 /tlang &lt;lang_code&gt;用于更改所使用的语言.",

    "Displays user Fetish and Arousal preferences in Bios, and calculates compatibility between players.":
        "在个人简介中显示用户的癖好和动作偏好, 并计算玩家之间的癖好相似度",
    "Maple's BC FetishShare": "Maple 的 BC 癖好分享(个人资料拓展)",
    "Moon Cards Editor BC": "BC 月亮卡牌编辑",
    "Adds the ability to view and edit your cards decks from online room": "从在线房间中查看和编辑您的卡牌牌组功能",
};

/** @type {TranslationFunction} */
function baseDOMTranslate(text) {
    return baseDOM[text];
}

/** @type {TranslationFunction} */
function fusamTranslate(text) {
    return translation[text] || baseDOM[text];
}

/** @type {DOMObserverModifier[]} */
export const FUSAM = [
    {
        filter: (node) => nodeIsHTML(node) && node.matches("#fusam-show-button"),
        action: (node) => {
            if (nodeIsHTML(node)) translateNode(node, baseDOMTranslate);
        },
    },
    {
        filter: (node) => nodeIsHTML(node) && node.matches("#fusam-addon-manager-body"),
        action: (node) => {
            if (nodeIsHTML(node)) node.querySelectorAll("*").forEach((child) => translateNode(child, fusamTranslate));
        },
    },
    {
        filter: (node) => nodeIsHTML(node) && node.matches("#fusam-addon-manager-header"),
        action: (node) => {
            if (nodeIsHTML(node)) node.querySelectorAll("*").forEach((child) => translateNode(child, baseDOMTranslate));
        },
    },
];
