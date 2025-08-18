import { ActivityManager } from "./activityForward";
import { HookManager } from "@sugarch/bc-mod-hook-manager";
import { ModInfo } from "@mod-utils/rollupHelper";
import { ChatRoomOrder } from "@mod-utils/ChatRoomOrder";

import { setup } from "./components";
import { once } from "@sugarch/bc-mod-utility";
import { Logger } from "@mod-utils/log";

HookManager.setLogger(Logger);
ActivityManager.setLogger(Logger);

once(ModInfo.name, () => {
    HookManager.init(ModInfo);
    ChatRoomOrder.setup();
    ActivityManager.init();
    setup();
});
