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
    | 'Luzi_TargetHasTail'
    | 'Luzi_HasWings'
    | 'Luzi_TargetHasWings'
    | 'Luzi_TargetHasLeash'
    | 'Luzi_HasCatTail'
    | 'Luzi_TargetHasCatTail'
    | 'Luzi_TargetHasTentacles'
    | 'Luzi_HasTentacles'
    | 'Luzi_HasPawMittens'
    | 'Luzi_HasPetSuit'
    | 'Luzi_HasKennel'
    | 'Luzi_TargetHasItemVulvaPiercings'
    | 'Luzi_TargetHasItemVulva'
    | 'Luzi_HasSword'
    | 'Luzi_Has鱼鱼尾'
    | 'Luzi_CharacterViewWithinReach'
    | 'Luzi_Female'
    | 'Luzi_TargetFemale'
    | 'Luzi_HasBreast'
    | 'Luzi_TargetHasBreast'
    | 'Luzi_CanWalk'
    | 'Luzi_IsStanding'
    | 'Luzi_IsKneeling'
    | 'Luzi_IsAllFours'
    | 'Luzi_KneelOrAllFours'
    | 'Luzi_TargetKneelOrAllFours';

type CustomActivity = import('@sugarch/bc-activity-manager').CustomActivity<string, CustomActivityPrerequisite>;

type PrerequisiteCheckFunction =
    import('@sugarch/bc-activity-manager').PrerequisiteCheckFunction<CustomActivityPrerequisite>;

type CustomActivityPrerequisiteItem =
    import('@sugarch/bc-activity-manager').CustomActivityPrerequisiteItem<CustomActivityPrerequisite>;

type DynamicImageProvier = import('@sugarch/bc-activity-manager').DynamicActivityImageProvider;
