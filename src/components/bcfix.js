import { HookManager } from "@sugarch/bc-mod-hook-manager";

export default function () {
    // suppress redundant character update from BC 71d2b1d29a657038c38ce8b8d0baed32b273f3ad
    // if this patch is not applied
    // assume that `DialogLeave` will send `character update A`, and in this dialog
    // user clicked some feature that will send `character update B`
    // also the message sent by dialog will trigger `character update C`
    // since character update will be sent back to itself, the following situation may happen:
    // send `A` -> send `B` -> receive `A` -> send `C` -> receive `B` -> receive `C`
    // which would cause the character state seems to "rollback" to previous states
    HookManager.progressiveHook("ChatRoomCharacterUpdate")
        .inside("DialogLeave")
        .override(() => {});
}
