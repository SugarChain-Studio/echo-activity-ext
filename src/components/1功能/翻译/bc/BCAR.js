/** @type {Record<string,string>} */
const translation = {
    // BCAR
    "BCAR + Settings": "BCAR + 设置",
    "Current Version": "当前版本",
    "- BCAR+ Settings -": "- BCAR+ 设置 -",
    "Open Changelog": "打开更改日志",
    "Open Wiki": "打开维基",
    "List of all commands": "所有命令列表",
    "Ears": "耳朵",
    "Tails": "尾巴",
    "Wings": "翅膀",
    "Profiles": "配置文件",
    "Reactions": "反应",
    "Non-Binary": "非二元性别",
    "Human": "人类",
    "Lower Right": "右下",
    "Female": "女性",
    "Lower Left": "左下",
    "Fox": "狐狸",
    "Upper Left": "左上",
    "Mouse": "老鼠",
    "Male": "男性",
    "Open BCAR+ Changelog on GitHub.": "在 GitHub 上打开 BCAR+ 更改日志.",
    "Open BCAR+ Wiki on GitHub.": "在 GitHub 上打开 BCAR+ 维基.",
    "Cat": "猫",
    "Dog": "狗",
    "- BCAR+ Commands -": "- BCAR+ 命令 -",
    "General Commands": "通用命令",
    "/bcar animalhelp - Opens animal instructions and commands page.": "/bcar animalhelp - 打开动物说明和命令页面.",
    "/bcar arousalhelp - Opens arousal instructions and commands page.":
        "/bcar arousalhelp - 打开性唤醒说明和命令页面.",
    "/bcar changelog - Shows the BCAR changelog.": "/bcar changelog - 显示 BCAR 更改日志.",
    "/bcar help - Opens the help window.": "/bcar help - 打开帮助窗口.",
    "/bcar status - Opens the status window.": "/bcar status - 打开状态窗口.",
    "/bcar misc - Opens misc instructions and commands page.": "/bcar misc - 打开其他说明和命令页面.",
    "/bcar profilehelp - Opens profile instructions and commands page.":
        "/bcar profilehelp - 打开配置文件说明和命令页面.",
    "/bcar male - Lets the reactions refer to the Player as 'he'.": "/bcar male - 使反应指向玩家为“他”.",
    "/bcar female - Lets the reactions refer to the Player as 'she'.": "/bcar female - 使反应指向玩家为“她”.",
    "/bcar other - Lets the reactions refer to the Player as 'they'.": "/bcar other - 使反应指向玩家为“他们”.",
    "/bcar timerhelp - Opens timer instructions and commands page.": "/bcar timerhelp - 打开定时器说明和命令页面.",
    "/bcar reset - Resets the ears, tails and wings to the default settings.":
        "/bcar reset - 将耳朵、尾巴和翅膀重置为默认设置.",
    "/bcar versions - Shows you the version of BCAR+ you are using.": "/bcar versions - 显示您正在使用的 BCAR+ 版本.",
    "Animals Commands": "动物命令",
    "/bcar cat - Changes the reactions and sounds to cat related ones.": "/bcar cat - 将反应和声音更改为猫相关的内容.",
    "/bcar dog - Changes the reactions and sounds to dog related ones.": "/bcar dog - 将反应和声音更改为狗相关的内容.",
    "/bcar fox - Changes the reactions and sounds to fox related ones.":
        "/bcar fox - 将反应和声音更改为狐狸相关的内容.",
    "/bcar human - Literally disables the reactions and sounds.": "/bcar human - 禁用反应和声音.",
    "/bcar mouse - Changes the reactions and sounds to mouse related ones.":
        "/bcar mouse - 将反应和声音更改为老鼠相关的内容.",
    "Ear Commands": "耳朵命令",
    "/bcar ear1 - Saves the primary ears.": "/bcar ear1 - 保存主要耳朵.",
    "/bcar ear2 - Saves the secondary ears.": "/bcar ear2 - 保存次要耳朵.",
    "/bcar earwiggle - Toggles the ear wiggling on/off.": "/bcar earwiggle - 打开/关闭耳朵摇晃.",
    "/bcar earwigglecount - Determines the number of wiggles.": "/bcar earwigglecount - 确定摇晃次数.",
    "/bcar eardelay - Determines the wiggle speed.": "/bcar eardelay - 确定摇晃速度.",
    "/bcar eardelete - Removes the ears.": "/bcar eardelete - 移除耳朵.",
    "/bcar earhelp - Opens ear instructions and commands page.": "/bcar earhelp - 打开耳朵说明和命令页面.",
    "Emote Commands": "表情命令",
    "/bcar emoteear - Toggles ear wiggle emote on/off.": "/bcar emoteear - 打开/关闭耳朵摇晃表情.",
    "/bcar emotetail - Toggles tail wag emote on/off.": "/bcar emotetail - 打开/关闭尾巴摆动表情.",
    "/bcar emotehelp - Opens emote instructions and commands page.": "/bcar emotehelp - 打开表情说明和命令页面.",
    "Expression Commands": "表情命令",
    "/bcar expression - Toggles expression on/off.": "/bcar expression - 打开/关闭表情.",
    "/bcar expressions - Toggles expression on/off.": "/bcar expressions - 打开/关闭表情.",
    "/bcar expressionhelp - Opens expression instructions and commands page.":
        "/bcar expressionhelp - 打开表情说明和命令页面.",
    "Gender Commands": "性别命令",
    "Misc Commands": "其他命令",
    "/cum - Lets the player cum instantly.": "/cum - 允许玩家立即射精.",
    "/leave - Lets the player leave the room immediately.": "/leave - 允许玩家立即离开房间.",
    "/safewordspecific - Lets the player remove a certain restraint.": "/safewordspecific - 允许玩家解除特定的约束.",
    "/wardrobe - Opens the wardrobe of the player.": "/wardrobe - 打开玩家的衣柜.",
    "Profile Commands": "配置文件命令",
    "/bcar save1 - Saves current setup in Profile1.": "/bcar save1 - 将当前设置保存在配置文件1中.",
    "/bcar save2 - Saves current setup in Profile2.": "/bcar save2 - 将当前设置保存在配置文件2中.",
    "/bcar save3 - Saves current setup in Profile3.": "/bcar save3 - 将当前设置保存在配置文件3中.",
    "/bcar load1 - Loads the setup saved in Profile1.": "/bcar load1 - 加载在配置文件1中保存的设置.",
    "/bcar load2 - Loads the setup saved in Profile2.": "/bcar load2 - 加载在配置文件2中保存的设置.",
    "/bcar load3 - Loads the setup saved in Profile3.": "/bcar load3 - 加载在配置文件3中保存的设置.",
    "/bcar profile1 - Shows which setup is saved in Profile1.": "/bcar profile1 - 显示在配置文件1中保存的设置.",
    "/bcar profile2 - Shows which setup is saved in Profile2.": "/bcar profile2 - 显示在配置文件2中保存的设置.",
    "/bcar profile3 - Shows which setup is saved in Profile3.": "/bcar profile3 - 显示在配置文件3中保存的设置.",
    "Tail Commands": "尾巴命令",
    "/bcar tail1 - Saves the primary tail.": "/bcar tail1 - 保存主要尾巴.",
    "/bcar tail2 - Saves the secondary tail.": "/bcar tail2 - 保存次要尾巴.",
    "/bcar tailwag - Toggles the tail wagging on/off.": "/bcar tailwag - 打开/关闭尾巴摇晃.",
    "/bcar tailwagcount - Determines the number of wags.": "/bcar tailwagcount - 确定摇晃次数.",
    "/bcar taildelay - Determines the wag speed.": "/bcar taildelay - 确定摇晃速度.",
    "/bcar taildelete - Removes the tail.": "/bcar taildelete - 移除尾巴.",
    "/bcar tailhelp - Opens tail instructions and commands page.": "/bcar tailhelp - 打开尾巴说明和命令页面.",
    "Timer Commands": "定时器命令",
    "/bcar timer - Toggles the timer on/off.": "/bcar timer - 打开/关闭定时器.",

    "Wing Commands": "翅膀命令",
    "/bcar wing1 - Saves the primary wings.": "/bcar wing1 - 保存主要翅膀.",
    "/bcar wing2 - Saves the secondary wings.": "/bcar wing2 - 保存次要翅膀.",
    "/bcar wingflap - Toggles the wing flapping on/off.": "/bcar wingflap - 打开/关闭翅膀扇动.",
    "/bcar wingflapcount - Determines the number of flaps.": "/bcar wingflapcount - 确定扇动次数.",
    "/bcar wingdelay - Determines the flap speed.": "/bcar wingdelay - 确定扇动速度.",
    "/bcar wingdelete - Removes the wings.": "/bcar wingdelete - 移除翅膀.",
    "/bcar winghelp - Opens wing instructions and commands page.": "/bcar winghelp - 打开翅膀说明和命令页面.",
    "/bcar fly - Starts flying.": "/bcar fly - 开始飞行.",
    "/bcar land - Stops flying.": "/bcar land - 停止飞行.",

    "- BCAR+ Ears -": "- BCAR+ 耳朵 -",
    "How To Use": "如何使用",
    "First equip the main ears you want": "首先装备您想要的主要耳朵",
    'to wear primarily in the "Ears" slot': '主要放置在 "耳朵" 插槽中',
    "in your wardrobe. Use Update Ear 1": "在您的衣柜中. 使用更新耳朵 1",
    "to save the main ears.": "保存主要耳朵",
    "For your ears to wiggle follow the same": "要使您的耳朵摇晃, 请按照相同的步骤",
    "steps and equip a different type of ": "装备不同类型的",
    '"Ears" to use as your secondary.': '"耳朵" 作为您的次要佩戴品.',
    "Use Update Ear 2 to save": "使用更新耳朵 2 来保存",
    "the secondary ears.": "次要耳朵",
    "The default of Wiggle Count is 12. ": "摇晃次数的默认值为 12.",
    "You can set it to an even number ": "您可以将其设置",
    "between 0 and 40. ": "为 0 到 40 之间的偶数",
    "The default of Wiggle Delay is 175. ": "摇晃延迟的默认值为 175",
    "You can set it to a number ": "您可以将其设置为一个数字",
    "between 50 and 3000. ": "在 50 和 3000 之间",
    "Update Ear 1:": "更新耳朵 1:",
    "Update Ear 2:": "更新耳朵 2:",
    "Enable Ear Wiggle:": "启用耳朵摇晃:",
    "Wiggle Count:": "摇晃次数:",
    "Wiggle Delay (ms):": "摇晃延迟(毫秒):",
    "Clear Ears:": "清除耳朵:",
    "Clear": "清除",
    "Wiggle Ears:": "摇晃耳朵:",
    "Test": "测试",
    "Clear Ears": "清除耳朵",
    "Test Ear Wiggles": "测试耳朵摇晃",
    "Update Ear 2 to Current": "更新耳朵 2 至当前",
    "Update Ear 1 to Current": "更新耳朵 1 至当前",
    "- BCAR+ Tail -": "- BCAR+ 尾巴 -",
    "First equip the main tail you want": "首先装备您想要的主要尾巴",
    'to wear primarily in the "TailStraps"': '主要放置在 "TailStraps"',
    "slot in your wardrobe. Use Update Tail 1": "插槽中在您的衣柜中. 使用更新尾巴 1",
    "to save the main tail.": "保存主要尾巴",
    "For your tail to wag follow the same": "要使您的尾巴摆动, 请按照相同的步骤",
    '"Tail" to use as your secondary.': '"尾巴" 作为您的次要佩戴品',
    "Use Update Tail 2 to save": "使用更新尾巴 2 来保存",
    "the secondary tail.": "次要尾巴",
    "The default of Wag Count is 6. ": "摇晃次数的默认值为 6",
    "The default of Wag Delay is 800. ": "摇晃延迟的默认值为 800",
    "between 200 and 5000. ": "在 200 到 5000 之间",
    "Update Tail 1:": "更新尾巴 1:",
    "Update Tail 2:": "更新尾巴 2:",
    "Enable Tail Wag:": "启用尾巴摆动:",
    "Wag Count:": "摇晃次数:",
    "Wag Delay (ms):": "摇晃延迟(毫秒):",
    "Clear Tail:": "清除尾巴:",
    "Wag Tail:": "摇晃尾巴:",
    "Update Tail 1 to Current": "更新尾巴 1 至当前",
    "Update Tail 2 to Current": "更新尾巴 2 至当前",
    "Test Tail Wags": "测试尾巴摆动",
    "Clear Tail": "清除尾巴",
    "- BCAR+ Miscellaneous -": "- BCAR+ 杂项 -",
    "Enable Animation Buttons:": "启用动画按钮:",
    "Enable Arousal Manipulation:": "启用情绪操控:",
    "Enable BCAR+ Expressions:": "启用 BCAR+ 表情:",
    "Enable Ear Emote:": "启用耳朵表情:",
    "Enable Tail Emote:": "启用尾巴表情:",
    "Reset BCAR+": "重置 BCAR+",
    "Resets every setting to default.": "将每个设置重置为默认值",
    "- BCAR+ Profiles -": "- BCAR+ 配置文件 -",
    "Profile 1:": "配置文件 1:",
    "Save": "保存",
    "Profile 2:": "配置文件 2:",
    "Profile 3:": "配置文件 3:",
    "Save Profile 1": "保存配置文件 1",
    "Save Profile 2": "保存配置文件 2",
    "Save Profile 3": "保存配置文件 3",
    "Load Profile 1": "加载配置文件 1",
    "Load Profile 2": "加载配置文件 2",
    "Load Profile 3": "加载配置文件 3",
    "Delete Profile 3": "删除配置文件 3",
    "Delete Profile 2": "删除配置文件 2",
    "Delete Profile 1": "删除配置文件 1",
    "Invalid number of wags": "摇晃次数无效",
    "Main Tail updated": "主要尾巴已更新",
    "Secondary Tail updated": "次要尾巴已更新",
    "Invalid number of delay": "延迟数量无效",

    "- BCAR+ Wings -": "- BCAR+ 翅膀 -",
    "First equip the main wings you want": "首先装备您想要的主要翅膀",
    'to wear primarily in the "Wings" slot': '主要放置在 "翅膀" 插槽中',
    "in your wardrobe. Use Update Wing 1": "在您的衣柜中. 使用更新翅膀 1",
    "to save the main wings.": "保存主要翅膀",
    "For your wings to flap follow the same": "要使您的翅膀扇动, 请按照相同的步骤",
    '"Wings" to use as your secondary.': '"翅膀" 作为您的次要佩戴品',
    "Use Update Wing 2 to save": "使用更新翅膀 2 来保存",
    "the secondary wings.": "次要翅膀",
    "The default of Flap Count is 6. ": "扇动次数的默认值为 6",
    "The default of Flap Delay is 500. ": "扇动延迟的默认值为 500",
    "Update Wing 1:": "更新翅膀 1:",
    "Update Wing 2:": "更新翅膀 2:",
    "Enable Wing Flap:": "启用翅膀扇动:",
    "Flap Count:": "扇动次数:",
    "Flap Delay (ms):": "扇动延迟(毫秒):",
    "Clear Wing:": "清除翅膀:",
    "Flap Wing:": "扇动翅膀:",
};

/**
 * 翻译BCAR的菜单文本
 * @param {string} key
 * @returns {string | undefined} 如果翻译成功则返回翻译后的文本，否则返回undefined
 */
export function translateMenuText(key) {
    if (PreferenceExtensionsCurrent?.Identifier !== "BCAR") return undefined;
    if (CurrentScreen !== "Preference") return undefined;
    if (translation[key]) return translation[key];
    return undefined;
}

/** @type {TranslationUnit} */
export const BCAR = {
    translateMenuText,
};
