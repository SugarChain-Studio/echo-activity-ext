import { ActivityManager } from "./activityForward";
import { HookManager } from "@sugarch/bc-mod-hook-manager";
import { ModInfo } from "@mod-utils/rollupHelper";
import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";

import { setup } from "./components";
import { once } from "@sugarch/bc-mod-utility";
import { Logger } from "@mod-utils/log";
import bcModSdk from "bondage-club-mod-sdk";

HookManager.setLogger(Logger);
ActivityManager.setLogger(Logger);

once(ModInfo.name, () => {
    const mod = bcModSdk.registerMod(ModInfo);
    HookManager.initWithMod(mod);
    ChatRoomOrder.setup();
    ActivityManager.init();
    setup();
});
