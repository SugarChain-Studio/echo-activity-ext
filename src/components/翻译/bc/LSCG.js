/** @type {Record<string,string>} */
const activities = {
    "Bap": "拍打",
    "SourceCharacter baps TargetCharacter.": "SourceCharacter 拍了 TargetCharacter 一下.",
    "Headbutt": "头槌",
    "SourceCharacter headbutts TargetCharacter.": "SourceCharacter 用头撞了 TargetCharacter.",
    "Nuzzle": "用鼻子轻蹭",
    "SourceCharacter nuzzles against the side of TargetCharacter's head.":
        "SourceCharacter 用鼻子轻蹭 TargetCharacter 头部的一侧.",
    "SourceCharacter nuzzles into TargetCharacter's neck.": "SourceCharacter 把鼻子轻蹭进 TargetCharacter 的脖颈.",
    "SourceCharacter nuzzles into TargetCharacter's arms.": "SourceCharacter 把鼻子轻蹭进 TargetCharacter 的胳膊.",
    "SourceCharacter nuzzles underneath TargetCharacter's hand.": "SourceCharacter 在 TargetCharacter 的手下轻蹭.",
    "SourceCharacter nuzzles into TargetCharacter's breasts.": "SourceCharacter 把鼻子轻蹭到 TargetCharacter 的胸部.",
    "SourceCharacter nuzzles snugly into TargetCharacter.": "SourceCharacter 舒适地用鼻子贴着 TargetCharacter.",
    "SourceCharacter nuzzles against TargetCharacter's thigh.": "SourceCharacter 用鼻子轻蹭 TargetCharacter 的大腿.",
    "SourceCharacter nuzzles along TargetCharacter's leg.": "SourceCharacter 沿着 TargetCharacter 的腿轻蹭.",
    "SourceCharacter nuzzles under TargetCharacter's feet.": "SourceCharacter 在 TargetCharacter 的脚下轻蹭.",
    "Hug": "拥抱",
    "SourceCharacter wraps PronounPossessive arms around TargetCharacter in a big warm hug.":
        "SourceCharacter张开双臂,给了TargetCharacter一个大大的温暖拥抱,将PronounPossessive的手臂也环绕其中.",
    "Tackle": "扑倒",
    "SourceCharacter full body tackles TargetCharacter!": "SourceCharacter 整个身体扑倒了 TargetCharacter!",
    "Flop": "瘫倒",
    "SourceCharacter flops on top of TargetCharacter.": "SourceCharacter 瘫倒在 TargetCharacter 身上.",
    "Kiss Eyes": "亲吻眼睛",
    "SourceCharacter gently kisses over TargetCharacter's eyes.": "SourceCharacter 轻柔地亲吻 TargetCharacter 的眼睛.",
    "Rub Pussy": "摩擦私处",
    "SourceCharacter grinds PronounPossessive pussy against TargetCharacter's penis.":
        "SourceCharacter用PronounPossessive的私处摩擦着TargetCharacter的阴茎.",
    "Slap Face": "扇脸",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's face.":
        "SourceCharacter 用PronounPossessive的ActivityAsset 抽打在 TargetCharacter 的脸上.",
    "Slap Mouth": "扇嘴巴",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's mouth.":
        "SourceCharacter 用PronounPossessive的ActivityAsset 抽打在 TargetCharacter 的嘴巴上.",
    "Slap against Pussy": "扇打私处",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's pussy.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的私处上.",
    "Slap Breast": "扇打乳房",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's breast.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的乳房上.",
    "Slap Thigh": "扇打大腿",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's thigh.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的大腿上.",
    "Slap Calf": "扇打小腿",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's calf.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的小腿上.",
    "Slap Feet": "扇打脚",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's feet.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的脚上.",
    "Slap Butt": "扇打屁股",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's butt.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的屁股上.",
    "Slap Neck": "扇打脖子",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's neck.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的脖子上.",
    "Slap Arms": "扇打手臂",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's arm.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的手臂上.",
    "Slap Hand": "扇打手",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's hand.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的手上.",
    "Slap Penis": "扇打阴茎",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's penis.":
        "SourceCharacter 用PronounPossessive的 ActivityAsset 抽打在 TargetCharacter 的阴茎上.",
    "Nibble Tail": "轻咬尾巴",
    "SourceCharacter nibbles on TargetCharacter's tail.": "SourceCharacter 轻咬 TargetCharacter 的尾巴.",
    "SourceCharacter nibbles on PronounPossessive own tail.": "SourceCharacter 轻咬自己的尾巴.",
    "Nibble Halo": "咬光环",
    "SourceCharacter nibbles on TargetCharacter's halo.": "SourceCharacter 咬 TargetCharacter 的光环.",
    "Nibble Wing": "轻咬翅膀",
    "SourceCharacter nibbles on TargetCharacter's wing.": "SourceCharacter 轻咬 TargetCharacter 的翅膀.",
    "SourceCharacter nibbles on PronounPossessive own wing.": "SourceCharacter 轻咬自己的翅膀.",
    "Grind with Pussy": "用阴部磨擦",
    "SourceCharacter grinds PronounPossessive pussy against TargetCharacter's.":
        "SourceCharacter 用阴部磨擦着 TargetCharacter 的阴部.",
    "Ride with Pussy": "用阴部骑乘",
    "SourceCharacter fucks TargetCharacter's penis with PronounPossessive pussy, grinding up and down.":
        "SourceCharacter 用阴部骑乘在 TargetCharacter 的阴茎, 上下磨擦.",
    "Sit on Face": "坐在脸上",
    "SourceCharacter grinds PronounPossessive pussy against TargetCharacter's face.":
        "SourceCharacter 用阴部磨擦着 TargetCharacter 的脸.",
    "Grind with Ass": "用臀部磨擦",
    "SourceCharacter grinds PronounPossessive ass against TargetCharacter's vulva.":
        "SourceCharacter 用臀部磨擦着 TargetCharacter 的阴道.",
    "Ride with Ass": "用臀部骑乘",
    "SourceCharacter fucks TargetCharacter's penis with PronounPossessive ass.":
        "SourceCharacter 用臀部骑乘在 TargetCharacter 的阴茎.",
    "Suck": "吮吸",
    "SourceCharacter wraps PronounPossessive lips around TargetCharacter's ActivityAsset and sucks.":
        "SourceCharacter 用嘴唇包裹住 TargetCharacter 的 ActivityAsset 并吮吸.",
    "Deepthroat": "深喉",
    "SourceCharacter takes TargetCharacter's ActivityAsset deep down PronounPossessive throat.":
        "SourceCharacter 将 TargetCharacter 的 ActivityAsset 深深地吞入 PronounPossessive 的喉咙.",
    "SourceCharacter wraps PronounPossessive lips around PronounPossessive own ActivityAsset and sucks.":
        "SourceCharacter 用嘴唇包裹住自己的 ActivityAsset 并吮吸.",
    "SourceCharacter takes PronounPossessive own ActivityAsset deep down PronounPossessive throat.":
        "SourceCharacter 将自己的ActivityAsset 深深地吞入PronounPossessive的喉咙.",
    "Eat": "咬一口",
    "SourceCharacter takes a big bite out of TargetCharacter's ActivityAsset.":
        "SourceCharacter 咬了 TargetCharacter 的 ActivityAsset 一大口.",
    "SourceCharacter takes a big bite out of PronounPossessive own ActivityAsset.":
        "SourceCharacter 咬了自己的 ActivityAsset 一大口.",
    "Grab Tongue": "抓舌头",
    "SourceCharacter reaches in and grabs hold of TargetCharacter's tongue with PronounPossessive fingers.":
        "SourceCharacter 伸手抓住 TargetCharacter 的舌头.",
    "Release Tongue": "松开舌头",
    "SourceCharacter lets go of TargetCharacter's tongue.": "SourceCharacter 松开了 TargetCharacter 的舌头.",
    "Hold Hands": "牵手",
    "SourceCharacter takes TargetCharacter's hand.": "SourceCharacter 牵住 TargetCharacter 的手.",
    "Release Hand": "放开手",
    "SourceCharacter lets go of TargetCharacter's hand.": "SourceCharacter 松开了 TargetCharacter 的手.",
    "Pinch Butt": "捏屁股",
    "SourceCharacter pinches TargetCharacter's butt.": "SourceCharacter捏住TargetCharacter的屁股.",
    "SourceCharacter pinches PronounPossessive own butt.": "SourceCharacter 捏住自己的屁股.",
    "Pinch Cheek": "捏脸颊",
    "SourceCharacter pinches TargetCharacter's cheek.": "SourceCharacter捏住TargetCharacter的脸颊.",
    "SourceCharacter pinches PronounPossessive own cheek.": "SourceCharacter 捏住了自己的脸颊.",
    "Release Ear": "松开耳朵",
    "SourceCharacter releases TargetCharacter's ear.": "SourceCharacter 松开了 TargetCharacter 的耳朵.",
    "Grab Horn": "抓住角",
    "SourceCharacter grabs TargetCharacter's horn.": "SourceCharacter抓住TargetCharacter的角.",
    "Release Arm": "松开手臂",
    "SourceCharacter releases TargetCharacter's arm.": "SourceCharacter 松开了 TargetCharacter 的手臂.",
    "Release Horn": "松开角",
    "SourceCharacter releases TargetCharacter's horn.": "SourceCharacter 松开了 TargetCharacter的角.",
    "Release Neck": "松开脖子",
    "SourceCharacter releases TargetCharacter's neck.": "SourceCharacter 松开了 TargetCharacter 的脖子.",
    "Release Mouth": "松开嘴巴",
    "SourceCharacter releases TargetCharacter's mouth.": "SourceCharacter 松开了 TargetCharacter 的嘴巴.",
    "Stuff with Foot": "用脚进行填塞",
    "SourceCharacter shoves PronounPossessive foot into TargetCharacter's mouth, grabbing their tongue with PronounPossessive toes.":
        "SourceCharacter 把自己的脚塞进 TargetCharacter 的嘴里, 并用脚趾夹住 TargetCharacter 的舌头.",
    "Remove Foot": "移开脚",
    "SourceCharacter removes PronounPossessive foot from TargetCharacter's mouth.":
        "SourceCharacter 从 TargetCharacter 的嘴里抽出自己的脚.",
    "Tug": "拽",
    "SourceCharacter tugs on TargetCharacter's crotch rope.": "SourceCharacter 拉扯着 TargetCharacter 胯下的绳子.",
    "SourceCharacter tugs lewdly on PronounPossessive own crotch rope.":
        "SourceCharacter 淫荡地拉扯着自己的胯下的绳子.",
    "Flick Ear": "轻弹耳朵",
    "SourceCharacter flicks TargetCharacter's ear.": "SourceCharacter 轻轻弹了 TargetCharacter 的耳朵.",
    "SourceCharacter flicks PronounPossessive own ear.": "SourceCharacter 轻轻弹了自己的耳朵.",
    "Flick Nose": "轻弹鼻子",
    "SourceCharacter flicks TargetCharacter's nose.": "SourceCharacter 轻轻弹了 TargetCharacter 的鼻子.",
    "SourceCharacter flicks PronounPossessive own nose.": "SourceCharacter 轻轻弹了自己的鼻子.",
    "Flick Nipple": "轻弹乳头",
    "SourceCharacter flicks TargetCharacter's nipple.": "SourceCharacter 轻轻弹了 TargetCharacter 的乳头.",
    "SourceCharacter flicks PronounPossessive own nipple.": "SourceCharacter 轻轻弹了自己的乳头.",
    "Flick Butt": "轻弹屁股",
    "SourceCharacter flicks TargetCharacter's butt.": "SourceCharacter 轻轻弹了 TargetCharacter的屁股.",
    "SourceCharacter flicks PronounPossessive own butt.": "SourceCharacter 轻轻弹了自己的屁股.",
    "Flick Foot": "轻弹脚底",
    "SourceCharacter flicks the bottom of TargetCharacter's feet.": "SourceCharacter 轻轻弹了 TargetCharacter的脚底.",
    "SourceCharacter flicks the bottom of PronounPossessive feet.": "SourceCharacter 轻轻弹了自己的脚底.",
    "Flick Forehead": "轻弹额头",
    "SourceCharacter flicks TargetCharacter's forehead.": "SourceCharacter 轻轻弹了 TargetCharacter的额头.",
    "SourceCharacter flicks PronounPossessive own forehead.": "SourceCharacter 轻轻弹了自己的额头.",
    "Flick Neck": "轻弹脖子",
    "SourceCharacter flicks TargetCharacter's neck.": "SourceCharacter 轻轻弹了 TargetCharacter的脖子.",
    "SourceCharacter flicks PronounPossessive own neck.": "SourceCharacter 轻轻弹了自己的脖子.",
    "Flick Thigh": "轻弹大腿",
    "SourceCharacter flicks TargetCharacter's thigh.": "SourceCharacter 轻轻弹了 TargetCharacter的大腿.",
    "SourceCharacter flicks PronounPossessive own thigh.": "SourceCharacter 轻轻弹了自己的大腿.",
    "Flick Leg": "轻弹腿",
    "SourceCharacter flicks TargetCharacter's leg.": "SourceCharacter 轻轻弹了 TargetCharacter的腿.",
    "SourceCharacter flicks PronounPossessive own leg.": "SourceCharacter 轻轻弹了自己的腿.",
    "Flick Clitoris": "轻弹阴蒂",
    "SourceCharacter flicks TargetCharacter's clitoris.": "SourceCharacter 轻轻弹了 TargetCharacter的阴蒂.",
    "SourceCharacter flicks PronounPossessive own clitoris.": "SourceCharacter 轻轻弹了自己的阴蒂.",
    "Flick Balls": "轻弹睾丸",
    "SourceCharacter flicks TargetCharacter's balls.": "SourceCharacter 轻轻弹了 TargetCharacter的睾丸.",
    "SourceCharacter flicks PronounPossessive own balls.": "SourceCharacter 轻轻弹了自己的睾丸.",
    "Flick Pussy": "轻弹阴部",
    "SourceCharacter flicks TargetCharacter's pussy.": "SourceCharacter 轻轻弹了 TargetCharacter的阴部.",
    "SourceCharacter flicks PronounPossessive own pussy.": "SourceCharacter 轻轻弹了自己的阴部.",
    "Flick Penis": "轻弹阴茎",
    "SourceCharacter flicks TargetCharacter's penis.": "SourceCharacter 轻轻弹了 TargetCharacter的阴茎.",
    "SourceCharacter flicks PronounPossessive own penis.": "SourceCharacter 轻轻弹了自己的阴茎.",
    "Chomp on Arm": "咬住手臂",
    "SourceCharacter chomps down on TargetCharacter's arm and doesn't let go.":
        "SourceCharacter 用力咬住 TargetCharacter 的手臂且不松口.",
    "Chomp on Leg": "咬住腿",
    "SourceCharacter chomps down on TargetCharacter's leg and doesn't let go.":
        "SourceCharacter 用力咬住 TargetCharacter 的腿且不松口.",
    "Chomp on Butt": "咬住屁股",
    "SourceCharacter chomps down on TargetCharacter's butt and doesn't let go.":
        "SourceCharacter 用力咬住 TargetCharacter 的屁股且不松口.",
    "Chomp on Neck": "咬住脖子",
    "SourceCharacter chomps down on TargetCharacter's neck and doesn't let go.":
        "SourceCharacter 用力咬住 TargetCharacter 的脖子且不松口.",
    "Release Chomp": "松开咬住",
    "SourceCharacter releases PronounPossessive chomp on TargetCharacter.":
        "SourceCharacter 松开对 TargetCharacter 的咬.",
    "Quaff": "畅饮",
    "SourceCharacter presses PronounPossessive ActivityAsset up against TargetCharacter's lips.":
        "SourceCharacter 将自己的 ActivityAsset 紧压在 TargetCharacter 的嘴唇上.",
    "SourceCharacter quaffs the ActivityAsset in one gulp.": "SourceCharacter 一口气将 ActivityAsset 一饮而尽.",
    "Tighten Collar": "收紧项圈",
    "Loosen Collar": "放松项圈",
    "Collar Stats": "项圈状态",
    "Shoot Netgun": "射击网枪",
    "SourceCharacter takes aim at TargetCharacter with PronounPossessive net gun.":
        "SourceCharacter 用自己的网枪瞄准 TargetCharacter.",
    "SourceCharacter turns PronounPossessive net gun on PronounSelf.": "SourceCharacter 将自己的网枪对准自己.",
    "Pour into Funnel": "倒入漏斗",
    "SourceCharacter pours PronounPossessive ActivityAsset into TargetCharacter's funnel.":
        "SourceCharacter 将自己的 ActivityAsset 倒入 TargetCharacter 的漏斗中.",
    "SourceCharacter pours PronounPossessive ActivityAsset into PronounPossessive own funnel.":
        "SourceCharacter 将自己的 ActivityAsset 倒入自己的漏斗中.",
    "Gag Mouth": "堵住嘴巴",
    "SourceCharacter gags TargetCharacter with PronounPossessive ActivityAsset.":
        "SourceCharacter 用自己的 ActivityAsset 堵住了 TargetCharacter 的嘴.",
    "SourceCharacter gags PronounSelf with PronounPossessive own ActivityAsset.":
        "SourceCharacter 用自己的 ActivityAsset 堵住了自己的嘴.",
    "Place around Neck": "放在脖子上",
    "SourceCharacter places PronounPossessive ActivityAsset around TargetCharacter's neck.":
        "SourceCharacter 把自己的 ActivityAsset 放在 TargetCharacter 的脖子周围.",
    "SourceCharacter places PronounPossessive ActivityAsset around PronounPossessive own neck.":
        "SourceCharacter 把自己的 ActivityAsset 放在自己的脖子周围.",
    "Take Gag": "取下口球",
    "SourceCharacter removes TargetCharacter's ActivityAsset.":
        "SourceCharacter 移除了 TargetCharacter 的 ActivityAsset.",
    "SourceCharacter pulls the ActivityAsset from PronounPossessive mouth.":
        "SourceCharacter从PronounPossessive的嘴里取下了ActivityAsset.",
    "SourceCharacter takes TargetCharacter's ActivityAsset from around TargetPronounPossessive neck.":
        "SourceCharacter从TargetPronounPossessive的脖子上取下了TargetCharacter的ActivityAsset.",
    "SourceCharacter takes PronounPossessive own ActivityAsset from around PronounPossessive neck.":
        "SourceCharacter从PronounPossessive的脖子上取下了PronounPossessive自己的ActivityAsset.",
    "Move to Mouth": "移至嘴边",
    "SourceCharacter moves TargetCharacter's ActivityAsset up to PronounPossessive mouth.":
        "SourceCharacter将TargetCharacter的ActivityAsset移到了PronounPossessive的嘴边.",
    "SourceCharacter moves PronounPossessive own ActivityAsset up to PronounPossessive mouth.":
        "SourceCharacter将PronounPossessive自己的ActivityAsset移到了PronounPossessive的嘴边.",
    "Wear around Neck": "挂在脖子上",
    "SourceCharacter removes TargetCharacter's ActivityAsset, letting it hang around their neck.":
        "SourceCharacter取下了TargetCharacter的ActivityAsset,让它挂在了他们的脖子上.",
    "SourceCharacter removes the ActivityAsset from Pro…h and lets it hang around PronounPossessive neck.":
        "SourceCharacter取下了PronounPossessive的ActivityAsset,并让它挂在了PronounPossessive的脖子上.",
    "Tie Up": "捆绑",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's feet, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的脚缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive feet tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的脚缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's legs, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的腿缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive legs tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的腿缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's pelvis, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的骨盆缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive pelvis tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的骨盆缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's arms, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的胳膊缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive arms tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的胳膊缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's eyes, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的眼睛缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive eyes tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的眼睛缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's neck, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的脖子缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive neck tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的脖子缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's breasts, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的胸部缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive breasts tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的胸部缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's waist, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的腰部缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive waist tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的腰部缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's toes, binding TargetPronounPossessive tightly.":
        "SourceCharacter 迅速地用自己的绳子把 TargetCharacter 的脚趾缠绕起来, 紧紧地绑住了 TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive toes tightly.":
        "SourceCharacter 紧紧地用自己的绳子把自己的脚趾缠绕起来.",
    "Steal": "抢夺",
    "SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item.":
        "SourceCharacter 抓住了 TargetCharacters 的手, 试图抢夺TargetPronounPossessive的物品.",
    "Give Item": "交出物品",
    "SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item!":
        "SourceCharacter 一把抓住 TargetCharacters 的手, 企图抢夺TargetPronounPossessive的物品!",
    "Shark Bite": "鲨鱼咬",
    "SourceCharacter's ActivityAsset bites TargetCharacter's arm.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的手臂.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's foot.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的脚.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's breast.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的乳房.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's butt.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的臀部.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's ear.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的耳朵.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's leg.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的腿.",
    "SourceCharacter's ActivityAsset bites TargetCharacter on the hand.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的手.",
    "SourceCharacter's ActivityAsset bites TargetCharacter in the thigh.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的大腿.",
    "SourceCharacter's ActivityAsset bites TargetCharacter on the neck.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的脖子.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's nipple.":
        "SourceCharacter 的 ActivityAsset 咬住了 TargetCharacter 的乳头.",
    "SourceCharacter's ActivityAsset chomps on TargetCharacter.":
        "SourceCharacter 的 ActivityAsset 狠狠地咬住了 TargetCharacter.",
    "Boop": "轻戳",
    "SourceCharacter boops TargetCharacter's nose with PronounPossessive ActivityAsset.":
        "SourceCharacter 用自己的 ActivityAsset 轻戳了 TargetCharacter 的鼻子.",
    "Squeeze": "紧紧地拥抱",
    "SourceCharacter hugs PronounPossessive ActivityAsset tightly.":
        "SourceCharacter 紧紧地拥抱着自己的 ActivityAsset.",
    "Take Photo": "拍照",
    "SourceCharacter snaps a photo of TargetCharacter.": "SourceCharacter 给 TargetCharacter 拍了张照片.",
    "SourceCharacter takes a selfie.": "SourceCharacter 自拍了一张.",
    "Wag Tail": "摇晃尾巴",
    "SourceCharacter wags PronounPossessive tail.": "SourceCharacter 摇晃着自己的尾巴.",
    "SourceCharacter wraps TargetCharacter in a therapeutic self-hug.":
        "SourceCharacter 用一个具有治疗作用的自我拥抱裹住了 TargetCharacter .",
    "SourceCharacter releases PronounPossessive own neck.": "SourceCharacter 松开了自己的脖子.",
    "Clamp Hand over Eyes": "用手捂住眼睛.",
    "SourceCharacter clamps her hand over TargetCharacter's eyes.":
        "SourceCharacter 把她的手捂在 TargetCharacter 的眼睛上.",
    "SourceCharacter clamps her hand over PronounPossessive own eyes.": "SourceCharacter 把她的手捂在自己的眼睛上.",
    "SourceCharacter releases PronounPossessive own mouth.": "SourceCharacter 放开了自己的嘴.",
    "Release Eyes": "放开眼睛",
    "SourceCharacter removes their hand from TargetCharacter's eyes.":
        "SourceCharacter 将手从 TargetCharacter 的眼睛上移开.",
    "SourceCharacter pulls their hand away from PronounPossessive eyes.": "SourceCharacter 将手从自己的眼睛旁抽走.",
    "SourceCharacter shoves PronounPossessive foot into…rabbing their tongue with PronounPossessive toes.":
        "SourceCharacter 将脚塞入……用脚趾抓挠自己的舌头.",
    "Grab Tail": "抓住尾巴",
    "SourceCharacter grabs TargetCharacter's tail.": "SourceCharacter 抓住了 TargetCharacter 的尾巴.",
    "Release Tail": "放开尾巴",
    "SourceCharacter releases TargetCharacter's tail.": "SourceCharacter 放开了 TargetCharacter 的尾巴.",
};

/** @type { Record<string,string> } */
const translation = {
    // LSCG
    "- LSCG General -": "- LSCG 通用 -",
    "- LSCG Triggered Hypnosis -": "- LSCG 触发催眠 -",
    "- LSCG Breathplay -": "- LSCG 窒息 -",
    "Now available:": "现在可用:",
    "Andrew's Collar Control Module!!": "安德鲁的颈圈控制模块!!",
    "Has your owner sent you shopping for a more controlling collar?": "你的主人有没有派你去买一个更具控制力的颈圈?",
    "Are you looking for some extra motivation for good behavior?": "你是否在寻找一些保持良好行为的额外动力?",
    "Act now and secure your Control Module now for the low low price of $500!":
        "立即行动, 现在以 500 美元的超低价格获得您的控制模块!",
    "Attach this revolutionary new device to your existing collar and it will":
        "将这个革命性的新设备连接到您现有的颈圈上,它将",
    "enhance it with the ability to tighten and loosen on command!": "增强其根据命令收紧和松开的能力!",
    "Let your dom quiet down those bratty moments and reward good behavior!":
        "让您的主人平息那些任性的时刻并奖励良好的行为!",
    "Update Collar:": "更新颈圈:",
    "Current Name: undefined": "当前名称: 未定义",
    "- LSCG Drug Enhancements -": "- LSCG 药物增强 -",
    "- LSCG Activities -": "- LSCG 活动 -",
    "Please Select a Zone": "请选择一个区域",
    "- LSCG Magic™ -": "- LSCG 魔法™ -",
    "Magic™!": "魔法™!",
    "Want to wow and amaze your friends and lovers?": "想要让你的朋友和爱人惊叹不已吗?",
    "Are you looking to impress and punish your enemies?": "你是否想要给你的敌人留下深刻印象并惩罚他们?",
    "With just a simple signature you too can experience the thrill of Magic™!":
        "只需一个简单的签名, 你也可以体验到 Magic™ 的刺激!",
    "- Reveal the ancient secrets of the arcane! -": "- 揭示神秘的古老奥秘! -",
    "- Craft your own amazing potions! -": "- 制作你自己的惊人药剂! -",
    "- Share in your powers, or dont! -": "- 分享你的力量, 或者不! -",
    "General": "一般",
    "Triggered Hypnosis": "触发催眠",
    "Breathplay": "窒息",
    "Drug Enhancements": "药物增强",
    "Activities": "活动",
    "Magic™": "魔法™",
    "Open Help": "打开帮助",
    "Export LSCG Settings": "导出 LSCG 设置",
    "Open LSCG Wiki on GitHub.": "在 GitHub 上打开 LSCG Wiki",
    "Open LSCG Latest Release on Github.": "在 Github 上打开 LSCG 最新版本",
    "Import LSCG Settings": "导入 LSCG 设置",
    "Emergency reset of LSCG": "LSCG 紧急重置",
    "LSCG Scripts Enabled:": "LSCG 脚本已启用:",
    "Block Settings While Restrained:": "在受限制时阻止设置:",
    "Immersive Conditions:": "沉浸式环境:",
    "Blur While Edged:": "寸止时模糊:",
    "Enable Lipstick Marks:": "启用口红痕迹:",
    "Dry Lipstick:": "干的口红:",
    "Enable Boop Reactions:": "启用 Boop 反应:",
    "Show Check Rolls:": "显示掷骰结果:",
    "Share Public Craftings:": "分享你的制作物品:",
    "Hide Resizing Effects:": "隐藏调整大小效果:",
    "Hide all Opacity Overrides:": "隐藏所有不透明度覆盖:",
    "Prevent Remote Opacity Changes:": "防止远程不透明度更改:",
    "Enable LSCG Features.": "启用 LSCG 功能.",
    "Prevents LSCG settings access while restrained.": "在受束缚时阻止 LSCG 设置访问.",
    "Applies a more restrictive set of conditional states while incapacitated by LSCG.":
        "在被 LSCG 致无法行动时应用一套更严格的条件状态.",
    "Apply extra blurring to the screen while edging.": "在寸止时为屏幕应用额外的模糊效果.",
    "Apply kiss marks when lipstick-wearing people kiss you on the cheek/forehead/neck.":
        "当涂口红的人亲吻你的脸颊/额头/颈部时应用吻痕.",
    "Never apply kissmarks when you are the kisser.": "当你是亲吻者时绝不应用吻痕.",
    "Auto-react when booped.": "当被戳时自动做出反应.",
    "If enabled, will display the attacker/defender roll values for activity checks.":
        "打勾的话, 将显示活动检查的攻击者/防御者掷骰值.",
    "If enabled, other LSCG users in the room will be able to use your crafted items on other people.":
        "打勾的话, 房间中的其他 LSCG 用户将能够在其他人身上使用你制作的物品.",
    "If checked, you will not see any LSCG resizing effects. (eg. from magic)":
        "打勾的话, 你将看不到任何 LSCG 的调整大小效果.(例如,来自魔法的效果)",
    "If checked, will skip any opacity override effects. (includes x-ray vision)":
        "打勾的话,将跳过任何不透明度覆盖效果.(包括透视视觉)",
    "If checked, other players will not be able to directly modify the opacity settings on your wardrobe items.":
        "打勾的话,其他玩家将无法直接修改你的衣柜物品的不透明度设置.",
    "LSCG main menu": "LSCG 主菜单",
    "Enabled:": "启用催眠:",
    "Override Trigger Words:": "覆盖触发词:",
    "Override Awaken Words:": "覆盖唤醒词:",
    "Custom list of words and/or phrases as awakener triggers. Separated by a comma.":
        "自定义单词和/或短语作为唤醒触发器的列表.用逗号分隔.",
    "Override Allowed Member IDs:": "覆盖允许的成员 ID:",
    "Hypnosis Length (min.):": "催眠时长(分钟):",
    "Cooldown (sec.):": "冷却时间(秒):",
    "Enable Cycle:": "启用循环:",
    "Trigger Cycle Time (min.):": "触发循环时间(分钟):",
    "Custom list of words and/or phrases as hypnisis triggers. Separated by a comma.":
        "自定义作为催眠触发器的单词和/或短语列表.用逗号分隔.",
    "Enabled the Triggered Hypnosis Features.": "启用触发式催眠功能.",
    "Comma separated list of member IDs. If empty will use standard Item Permissions.":
        "成员 ID 的逗号分隔列表. 如果为空, 将使用标准的物品权限.",
    "Length of hypnosis time (in minutes) before automatically recovering. Set to 0 for indefinite.":
        "自动恢复前的催眠时间长度(以分钟为单位).设置为 0 表示无期限.",
    "If checked, only one trigger will be active at a time and will cycle after use.":
        "勾选的话, 一次只有一个触发器处于激活状态, 并在使用后循环.",
    "Number of minutes after activation to wait before cycling to a new trigger.":
        "激活后等待多少分钟, 然后循环到新的触发器.",
    "Cooldown time (in seconds) before you can be hypnotized again.": "再次被催眠之前的冷却时间 (以秒为单位).",
    "Allow Remote Access:": "允许远程访问:",
    "Remote Access Requires Trance:": "远程访问需要催眠:",
    "Remote Access Limited to Hypnotizer:": "远程访问限制为催眠者:",
    "Allow Remote Override Member Modification:": "允许远程覆盖成员修改:",
    "Lockable:": "可锁定:",
    "Build arousal while hypnotized:": "催眠时兴奋:",
    "Hypnotized Eye Color:": "催眠眼睛颜色:",
    "Hypnotized Eye Type:": "催眠眼睛类型:",
    "If checked, allowed users can modify these settings.": "打勾的话, 允许的用户可以修改这些设置.",
    "If checked, remote access is only possible while actively hypnotized.":
        "打勾的话, 远程访问仅在被积极催眠时才有可.",
    "If checked, only the user who hypnotized you can access your settings (after matching other conditions).":
        "打勾的话, 只有催眠你的用户在匹配其他条件后才能访问你的设置.",
    "If checked, any remote users can change your Override Member Id list (otherwise, only owner can).":
        "打勾的话,任何远程用户都可以更改你的覆盖成员 ID 列表 (不打勾,只有主人可以).",
    "If checked, allowed users can lock you out of these settings.": "打勾的话, 允许的用户可以锁定你无法访问这些设置.",
    "If checked being hypnotized will increase arousal.": "打勾的话,被催眠时将增加兴奋感.",
    "Hex code of your eye color while hypnotized (default: #A2A2A2).":
        "催眠时你的眼睛颜色的十六进制代码 (默认: #A2A2A2).",
    "Eye type # to use while under hypnosis (default: 9).": "在催眠状态下使用的眼睛类型 #(默认:9).",
    "Allow Speech Trigger Words:": "允许语音触发词汇:",
    "Silence Trigger Words:": "禁止语音触发词汇:",
    "When spoken while hypnotized, will allow speech. Separated by a comma.":
        "在催眠状态下说出时, 将允许语音. 用逗号分隔.",
    "When spoken while hypnotized, will prevent speech. Separated by a comma.":
        "在催眠状态下说出时, 将阻止语音. 用逗号分隔.",
    "Enable Hand Choking:": "打勾的话, 启用手部窒息:",
    "Enable Gag Suffocation:": "打勾的话, 启用口球窒息:",
    "Sleep on Passout:": "昏倒时进入睡眠:",
    "Sleep time (minutes):": "睡眠时间(分钟):",
    "How long you will sleep after passout if enabled.": "打勾的话, 启用后昏倒后你将睡多久.",
    'Enables breathplay using "Choke Neck" activity. If done repeatedly will cause blackout.':
        '打勾的话, 启用 "颈部窒息" 活动进行窒息.如果反复进行,会导致晕厥.',
    "Enabled breathplay using nose plugs and sufficient gags.": "打勾的话, 启用使用鼻塞和足够的口塞进行窒息玩法.",
    "Will force sleep on passout.": "在昏倒时强制进入睡眠.",
    "Allow Self-Tightening:": "允许自我拉紧:",
    "Allow Self-Loosening:": "允许自我放松:",
    "Allowed Members IDs:": "允许的成员ID:",
    "Limit to Crafted User:": "限制为制作的用户:",
    "Tighten Trigger:": "拉紧触发:",
    "Loosen Trigger:": "放松触发:",
    "Immersive:": "沉浸式:",
    "Enable Buttons:": "启用按钮:",
    "Any Collar:": "任何项圈:",
    "Update": "更新",
    "Enabled the Choking Collar Features.": "打勾的话, 启用窒息项圈功能.",
    "Enables Remote Access to Collar Settings.": "打勾的话, 启用对项圈设置的远程访问.",
    "Allowes Remote Access Users to lock you out of these settings.":
        "打勾的话, 允许远程访问用户将您锁定在这些设置之外.",
    "Comma separated list of member IDs who can activate the collar. Leave empty for item permissions.":
        "可以激活项圈的成员 ID 的逗号分隔列表. 留空则使用物品权限.",
    "Limits collar activation to crafted user and allowed list. If no crafted user will use item permissions.":
        "将项圈激活限制为精心制作的用户和允许的列表. 如果没有精心制作的用户, 则使用物品权限.",
    "Word or phrase that, if spoken, will tighten the collar.": "如果说出, 将拉紧项圈的单词或短语.",
    "Word or phrase that, if spoken, will loosen the collar.": "如果说出, 将放松项圈的单词或短语.",
    "Allow the wearer to loosen their own collar.": "打勾的话, 允许佩戴者自己放松项圈.",
    "Allow the wearer to tighten their own collar.": "打勾的话, 允许佩戴者自己拉紧项圈.",
    "Allows activation of the collar features via buttons (activities & commands).":
        "打勾的话, 允许通过按钮(活动和命令)激活项圈功能.",
    "If enabled, any collar can trigger and activate.": "打勾的话, 任何项圈都可以触发和激活.",
    "Prevents the wearer from viewing triggers via show-triggers.": "防止佩戴者通过 show-triggers 查看触发词.",
    "Enable Sedative:": "启用镇静剂:",
    "Enable Brainwash Drug:": "启用洗脑药物:",
    "Enable Aphrodisiac:": "启用催情剂:",
    "Filled Glass Sip Limit:": "满玻璃杯饮用次数限制:",
    "Allow Continuous Delivery:": "允许乳胶呼吸器持续气体:",
    "Inexhaustible Gases:": "不会的耗尽的气体:",
    "Show Drug Levels:": "显示药物水平:",
    "Heartbeat Sound:": "心跳声:",
    "Chaotic Net Gun:": "混乱网枪:",
    "Enable Enhanced Drinks, Injectors and Net Gun.": "打勾的话, 增强饮料、注射器和网枪.",
    "If true, will allow respirators to deliver a continuous supply of drugged gas.":
        "允许乳胶呼吸器提供持续的麻醉气体.",
    'Activates for any injector or drink with "horny" or "aphrodisiac" in its crafted name or description.':
        '对于任何在其精心制作的名称或描述中包含"horny"或"aphrodisiac"的注射器或饮料,将激活.',
    'Activates for any injector or drink with "sedative" or "tranquilizer" in its crafted name or description.':
        '对于任何注射器或饮料,如果其精心制作的名称或描述中包含"sedative"或"tranquilizer",将激活.',
    "Enable Enhanced Injections and Net Gun.": "启用增强注射和网枪.",
    'Activates for any injector or drink with "mind control," "hypnotizing," or "brainwashing" in its crafted name ordescription.':
        '对于任何注射器或饮料,如果其精心制作的名称或描述中包含"mind control","hypnotizing"或"brainwashing",将激活.',
    "Number of sips before your filled glasses empty. (0 for no limit)": "玻璃杯喝空前的饮用次数.(0 表示无限制)",
    "If true, any continuous delivery (eg. respirator) on you will never run out of gas.":
        "打勾的话, 你身上的任何持续输送设备 (例如乳胶呼吸器) 都永远不会耗尽气体.",
    "If true, will display bars showing the level of each drug type.": "打勾的话, 将显示显示每种药物类型水平的条形图.",
    "If true, enables an occasional heartbeat sound while under the influence of aphrodisiac.":
        "打勾的话, 在受到催情剂影响时偶尔会启用心跳声.",
    "If true, your net gun will fire wildly and have a 50/50 chance to net a random character instead of your target.":
        "打勾的话, 你的网枪将会随意开火,并且有 50/50 的机会网住一个随机的角色,而不是你的目标.",
    "Enable Chloroform:": "启用氯仿(药棉):",
    "Chloroform Never Fades:": "氯仿(药棉)永不消逝:",
    "Fall asleep if chloroformed.": "打勾的话, 被氯仿麻醉则入睡.",
    "If enabled one rag over your mouth will last forever until removed, otherwise its potency will fade after an hour.":
        "打勾的话, 放在你嘴上的一块药棉将永远有效,直到被移除,否则其效力将在一小时后减弱.",
    "Number times within 5 minutes this activity must be done before hypnosis or sleep is triggered.":
        "在 5 分钟内必须完成此活动的次数,然后才能触发催眠或睡眠.",
    "Using this activity on this location can trigger hypnosis.": "在此位置使用此活动可以触发催眠.",
    "Arousal threshold required for this activity to trigger hypnosis. If both trance and sleep are checked, lower arousal triggers sleep.":
        "触发催眠此活动所需的性唤起阈值.如果同时选中了催眠和睡眠,较低的性唤起会触发睡眠.",
    "Using this activity on this location will awaken you from trance or deep sleep.":
        "在此位置使用此活动将把您从催眠或深度睡眠中唤醒.",
    "Using this activity on this location can cause an orgasm.": "在此位置使用此活动可能导致性高潮.",
    "Arousal threshold required for this activity to cause an orgasm.": "此活动导致性高潮所需的性唤起阈值.",
    "Member IDs who can trance/sleep/awaken/orgasm with this activity. Leave empty to use BC item permissions":
        "可以使用此活动进行催眠/睡眠/唤醒/性高潮的成员 ID.留空以使用 BC 项权限.",
    "Using this activity on this location can put them to sleep.": "在此位置使用此活动可以让他们入睡.",
    "Can Induce Trance": "可以诱发催眠",
    "Can Induce Sleep": "可以诱发睡眠",
    "Repeats Required": "所需重复次数",
    "Trance Arousal Threshold": "催眠唤起阈值",
    "Can Awaken": "可以唤醒",
    "Can Cause Orgasm": "可以引起性高潮",
    "Orgasm Arousal Threshold": "性高潮唤起阈值",
    "Allowed Member IDs": "允许的成员ID",
    "Enable Wild Magic:": "启用野性魔法:",
    "Force Wild Magic": "强制野性魔法",
    "True Wild Magic": "真实野性魔法",
    "Prevent X-Ray Vision": "防止 X 射线视觉",
    "Blocked Effects:": "被阻止的效果:",
    "Hypnotizing": "催眠",
    "Hypnotizes the target.": "催眠目标.",
    "Cast a random spell from your spell list, with a chance of a truly random spell.":
        "从你的法术列表中随机施放一个法术, 有几率施放出一个真正随机的法术.",
    "Generate a truly random spell whenever casting.": "每次施放时生成一个真正随机的法术.",
    "Lead-line all your clothing.": "给你所有的衣物加上铅衬.",
    "Toggle which spell effects you want to block on yourself.": "切换你想在自己身上屏蔽的法术效果.",
    "Prevent the ability to choose the spell you are casting.": "阻止选择你要施放的法术的能力.",
    "Enabled the use and application of Magic™.": "启用 魔法™ 的使用和应用.",
    "Allowed": "允许",
    "Slumbering": "沉睡",
    "Induces a deep slumber in the target.": "让目标陷入深度沉睡.",
    "Arousing": "唤起",
    "Arouses the target.": "唤醒目标.",
    "Blinding": "致盲",
    "Prevents the target from seeing.": "让目标无法看见.",
    "Deafening": "致聋",
    "Prevents the target from hearing.": "让目标无法听见.",
    "Gagged": "堵嘴",
    "Gags the target.": "给目标堵嘴.",
    "Petrifying": "石化",
    "Petrifies the target.": "让目标石化.",
    "Enlarging": "增大",
    "Enlarges the target to twice their size.": "将目标的大小增大一倍.",
    "Bless": "祝福",
    "Applies a +5 buff to all the target's skills for 15 minutes": "为目标的所有技能施加 +5 的增益效果, 持续 15 分钟",
    "Bane": "诅咒",
    "Applies a -5 debuff to all the target's skills for 15 minutes": "为目标的所有技能施加 -5 的减益效果, 持续 15 分钟",
    "Pairing": "配对",
    "Pair two targets, such that when one feels arousal the other also does.":
        "将两个目标配对, 使得当其中一个感到性唤起时, 另一个也会有同样的感觉.",
    "Siphoning": "吸取",
    "Redirect all of the target's orgasmic pleasure to another.": "将目标的所有性高潮快感重定向到另一个人.",
    "Outfit": "服装",
    "Magically change the target's clothing and equipment.": "用魔法改变目标的服装和装备.",
    "Polymorph": "变形",
    "Polymorph the target's body and/or cosplay items": "让目标的身体和/或角色扮演物品变形",
    "Dispell": "驱散",
    "Dispells any existing effects on the target (including anything drug induced).":
        "驱散目标上的任何现有效果(包括任何药物诱导的效果).",
    "X-Ray Vision": "X射线视觉",
    "Grants the target X-Ray vision": "赋予目标 X射线 视觉",
    "Spell Crafting": "法术制作",
    "No Spells Known...": "没有已知法术...",
    "Create new Spell": "创建新法术",
    "Create your arcane sorceries and potions.": "创建你的奥术魔法和药水.",
    "Remote Allowed Member IDs:": "远程允许的成员ID:",
    "Never Defend:": "永不防御:",
    "Defenseless Against Member IDs:": "对以下成员 ID 无防御能力:",
    "Limited Spell Duration:": "有限的法术持续时间:",
    "Maximum Spell Duration:": "最大法术持续时间:",
    "Allow Outfit Spell to Change Neck Items:": "允许装束法术更改颈部物品:",
    "Allow Polymorph Spell to Change Genitals:": "允许变形法术更改生殖器:",
    "Allow Polymorph Spell to Change Pronouns:": "允许变形法术更改代词:",
    "Require Whitelist:": "需要白名单:",
    "If checked, outfit spell effects can modify and replace your neck items.":
        "勾选的话, 装束法术效果能够修改和替换您的颈部物品.",
    "If checked, polymorph spell effects can modify your genitals.": "勾选的话, 变形法术效果能够修改您的生殖器.",
    "If checked, polymorph spell effects can modify your pronouns.": "勾选的话, 变形法术效果能够修改您的代词.",
    "If checked, only people on your whitelist can cast spells on you or teach you spells.":
        "勾选的话, 只有您白名单上的人才能对您施放法术或教授您法术.",
    "Maximum amount of time, in minutes, you will be affected by any specific spell effects. Set to 0 for no maximum.":
        "您将受到任何特定法术效果影响的最长时间(以分钟为单位).设置为 0 则表示没有最长时间限制.",
    "If checked, you will eventually break free from a detrimental spell's effects, the time variable based on how poorly you fail an activity roll against the caster.":
        "勾选的话, 您最终将摆脱有害法术的效果,时间变量取决于您在与施法者的活动检定中失败的严重程度.",
    "Comma separated list of member IDs. If empty will use standard Item Permissions. You will never defend against their spells.":
        "以逗号分隔的成员 ID 列表.如果为空,将使用标准的物品权限.您永远不会对他们的法术进行防御.",
    "If checked, you will never defend against spells cast on you.":
        "勾选的话, 您将永远不会对施加在您身上的法术进行防御.",
    "Spell Name:": "法术名称:",
    "Allow Potion:": "允许药水:",
    "None": "无",
    "Next": "下一个",
    "Previous": "上一个",
    "Name of your powerful spell": "你强大法术的名称",
    "An effect the spell has.": "该法术具有的效果",
    "Allows this spell to be brewed into a crafted potion bottles/glasses/mugs using its name.":
        "允许使用其名称将此法术酿造到精心制作的药水瓶/玻璃杯/马克杯中.",
    "LSCG Remote Settings": "LSCG 远程设置",
    "You do not have access to her mind...": "你无权访问她的思维...",
    "You do not have access to her collar...": "你无权访问她的项圈...",
    "Section is Unavailable": "该部分不可用",
    "Configure": "配置",
    "Module is deactivated": "模块已停用",
    "Poses": "姿势",
    "~Sign Here~": "~在此签名~",
    "~ Any sufficiently advanced technology is indistinguishable from magic ~":
        "~ 任何足够先进的技术都与魔法难以区分 ~",
    "* Signatory agrees to Magic™ Installation (ᴘᴀᴛ. ᴘᴇɴᴅ.) required to experience spell effects *":
        " *签署者同意进行魔法™安装（专利申请中）以体验法术效果* ",
    "Apply signature to scroll": "在卷轴上应用签名",
    "Magic": "魔法",
    "Cast Spell": "施放咒语",
    "Wild Magic": "野性魔法",
    "Teach Spell": "教授咒语",
    "Select a spell to cast...": "选择一个要施放的法术...",
    "Asleep": "睡着",
    "Aroused": "兴奋状态",
    "Deafened": "耳聋",
    "Blinded": "失明",
    "Enlarged": "变大",
    "Petrified": "石化",
    "Blessed": "受庇佑",
    "Select a paired target...": "选择一个配对的目标...",
    "Arousal Paired": "兴奋配对",
    "Orgasms Siphoned": "吸取性高潮",
    "Baned": "被诅咒",
    "Paste Outfit Code:": "粘贴服装代码:",
    "Redressed": "更衣",
    "Whole Body:": "整体:",
    "Hair:": "头发:",
    "Skin/Jewelry/Makeup:": "皮肤/珠宝/化妆:",
    "Genitals:": "生殖器:",
    "Polymorphed": "变形",
    "Polymorph applies cosplay items from the outfit code.": "变形会应用来自服装代码中的角色扮演道具.",
    "Polymorph changes the target's skin.": "变形会改变目标的皮肤.",
    "Polymorph changes the target's genitals.": "变形会改变目标的生殖器.",
    "Polymorph modifies the whole body.": "变形会修改整个身体.",
    "Cosplay:": "角色装扮:",
    "Hypnotized": "被催眠",

    "Needs BC item permission": "需要BC项权限",
    "Enable Clothed Erection Detection:": "启用穿着勃起检测:",
    "If checked, you will get a private message if you can feel an erection during certain activities.":
        "勾选的话,  您将在某些活动中感受到勃起时会收到私信.",
    "Show whisper button on chat messages": "在聊天消息中显示密语按钮",
    "Adds a whisper button to chat messages, allowing you to whisper to the sender more conveniently.":
        "在聊天消息中添加一个密语按钮,使您能够更便捷地与发送者进行密语交流.",
    "Control Collar": "控制项圈",
    "Update Collar to Current": "将项圈更新为当前",
    "View next items": "查看下一项物品",
    "Mode: Preview": "模式: 预览",
    "Sold": "已售出",
    "Mode: Shop": "模式: 商店",
    "Player money": "玩家金钱",
    "Underwear": "内衣",
    "Nude": "裸体",
    "View previous items": "查看上一项",
    "Cosplay": "角色装扮",
    "Allow LSCG Leashing:": "允许 LSCG 束缚:",
    "Allow custom leashing from LSCG activities such as hand-holding, hypnosis, etc.":
        "允许来自 LSCG 活动（如牵手、催眠等）的自定义束缚.",
    "Enable Suggestion Programming": "启用暗示修改",
    "Allow Suggestion Removal": "允许移除暗示",
    "Always Submit to Suggestions:": "始终服从暗示:",
    "Always Submit to Member IDs:": "始终服从的玩家 ID:",
    "Blocked Instructions:": "阻止的功能:",
    "Orgasm": "高潮",
    "Induce overwhelming pleasure in the subject.": "在受测目标身上引发极度的愉悦.",
    "If checked, your hypnotizer may induce hypnotic suggestions within you.":
        "勾选的话, 你的催眠师可能会在你体内诱导催眠暗示.",
    "If checked, you can remove suggestions installed in you with '/lscg remove-suggestion' if you are not immersive and not on extreme difficulty.":
        "勾选的话, 如果你不是处于沉浸式状态且不在极端难度下，你可以使用'/lscg remove-suggestion'来移除安装在你身上的暗示.",
    "If checked, you will always submit to suggestions.": "勾选的话, 你将始终服从暗示.",
    "Comma separated list of member IDs. If empty will use standard Item Permissions. You will always submit to their suggestions.":
        "以逗号分隔的成员 ID 列表.如果为空，则使用标准项目权限.你将始终服从他们的暗示.",
    "Toggle which suggestion instructions you want to block on yourself.": "切换你想要自行阻止的暗示指令.",
    "Forget": "忘记",
    "Remove a previous instruction from the subject.": "从目标身上移除之前的指令.",
    "Serve": "服务",
    "Compel the subject to serve drinks.": "强迫目标去提供饮料.",
    "Speak Phrase": "说出短语",
    "Compel the subject to speak a phrase.": "强迫目标说出一个短语.",
    "Follow": "跟随",
    "Compel the subject to follow someone. (Requires LSCG leashing enabled on both)":
        "强迫目标跟随某人.(需要双方都启用 LSCG 捆绑)",
    "Assume Pose": "采取姿势",
    "Compel the subject to assume a pose.": "强迫目标采取一个姿势.",
    "Strip": "脱衣",
    "Make the subjects clothing uncomfortable.": "使目标的衣服变得不舒服.",
    "Perform Activity": "执行活动",
    "Compel the subject to perform an activity.": "强迫目标进行一项活动.",
    "Insatiable": "永不满足",
    "Infuse the subject with an endless arousal.": "给目标注入无尽的兴奋感.",
    "Denial": "拒绝",
    "Prevent the subject from achieving orgasm.": "阻止目标达到性高潮.",
    "[WCE] clear and reload the drawing cache of all characters": "[WCE] 清除并重新加载所有角色的绘图缓存.",
    "Enable tamperproof features on crafted items you wear.": "在你所佩戴的手工制作物品上启用防篡改功能.",
    "Suggestions": "暗示",
    "- LSCG Suggestions -": "- LSCG 暗示 -",
    "Induce Suggestion": "诱导暗示",
    "No Suggestions Yet...": "目前还没有暗示……",
    "Induce New Suggestion": "添加暗示",
    "Induce a new hypnotic suggestion into the subject.": "向受试者诱导一个新的催眠暗示.",
    "Trigger phrase for this suggestion.": "这个是暗示的触发短语",
    "If checked, only the creator of this suggestion can view, edit, or trigger it.":
        "如果勾选,只有此建议的创建者可以查看、编辑或触发它.",
    "A suggested instruction.": "一个催眠指令",
    "Target": "目标",
    "Self": "自己",
    "Subject will always target themselves": "主体总是会以自身为目标",
    "Speaker Only": "直接对施法者使用动作",
    "Subject will always target the speaker": "这个勾了就是直接以是施法者为目标,下面就不用填id了",
    "Configure specific target member id number or name": "配置特定目标成员的ID编号或名称",
    "Phrase": "短语",
    "Configure specific phrase": "设置特定短语",
    "All Instructions": "全选指令",
    "Selest Instructions to Forget:": "忘记某项指令",
    "Selest Activity": "选择活动",
    "Rename Suggestion": "暗示名字",
    "Upper Pose:": "上身姿势:",
    "Lower Pose:": "下身姿势:",
    "Full Pose:": "全身姿势:",
    "BaseUpper": "基础上身姿势",
    "BaseLower": "基础下身姿势",
    "Yoked": "举手",
    "OverTheHead": "手高举头顶",
    "BackBoxTie": "背部箱式捆绑",
    "BackElbowTouch": "背部肘部触碰",
    "BackCuffs": "背部手铐束缚",
    "Hogtied": "四马攒蹄式捆绑",
    "KneelingSpread": "跪姿张开",
    "LegsClosed": "双腿闭合",
    "Spread": "张开",
    "LegsOpen": "双腿张开",
    "Allow Suggestion Removal:": "允许删除暗示:",
    "Locked:": "锁定:",
    "If checked, the user will be allowed to remove installed suggestions.": "若此项被勾选,用户将获准删除已有的暗示.",
    "If checked, the user out of their own hypnosis settings.": "若勾选此项,用户将退出其自身的催眠设置.",
    "Exclusive:": "专属:",
    "Trigger Phrase:": "触发短语:",
    "Select Activity:": "选择动作:",
    "Target:": "目标:",
    "Phrase:": "短语:",
    "Enable Tamperproof Items:": "启用防篡改物品:",
    "Denying": "拒绝性高潮",
    "Denies the target any orgasms.": "剥夺目标任何性高潮",
    "Forced Orgasm:": "强制性高潮",
    "Forced an orgasm upon the target.": "强制给目标带来性高潮",
    "Name:": "名称:",
    "Name": "名称:",

    "Enable Chaotic/Evolving Items:": "启用混沌/进化物品：",
    "Purchase - $500": "购买 - $500",
    "- Andrew co.® makes no guarantees as to the behavior of the wearer -": "- 安德鲁公司®对佩戴者的行为不作任何保证 -",
    "Unlock Andrew's Collar Module": "解锁安德鲁的项圈模块",
    "Block": "格挡",
    "Magic Barrier": "魔法屏障",
    "Create a magic barrier that protect and reflect incoming spell": "创造一个魔法屏障，保护并反射来袭的法术",
    "Disarming": "移除手持物品",
    "Disarm the target": "移除目标的手持物品",
};

export { activities, translation };
