interface Point {
    X: number;
    Y: number;
}

interface Rect {
    X: number;
    Y: number;
    W: number;
    H: number;
}

type CustomActivityPrerequisite =
    | ActivityPrerequisite
    | 'TargetHasTail'
    | 'TargetHasWings'
    | 'TargetHasLeash'
    | 'TargetHasCatTail'
    | 'TargetHasTentacles'
    | 'NeedTentacles'
    | 'NeedPawMittens'
    | 'NeedPetSuit'
    | 'NeedKennel'
    | 'TargetHasItemVulvaPiercings'
    | 'TargetHasItemVulva'
    | 'NeedSword'
    | 'NeedScissors'
    | 'NeedCloth'
    | 'NeedNoCloth'
    | 'NeedNoClothLower'
    | 'NeedBra'
    | 'NeedPanties'
    | 'NeedSocks'
    | 'NeedSuitLower鱼鱼尾_Luzi'
    | 'Need阿巴阿巴_Luzi';

type CustomActivity = import("@sugarch/bc-activity-manager").CustomActivity<CustomActivityPrerequisite>;

type PrerequisiteCheckFunction = import("@sugarch/bc-activity-manager").PrerequisiteCheckFunction<CustomActivityPrerequisite>;

type CustomActivityPrerequisiteItem = import("@sugarch/bc-activity-manager").CustomActivityPrerequisiteItem<CustomActivityPrerequisite>;