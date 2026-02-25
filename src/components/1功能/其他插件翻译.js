import { HookManager } from "@sugarch/bc-mod-hook-manager";
import { once } from "@sugarch/bc-mod-utility";
import { debugFlag, ModInfo, resourceBaseURL } from "@mod-utils/rollupHelper";
import { Logger } from "@mod-utils/log";

function tryLoadTranslationModule() {
    if (["CN", "TW"].includes(TranslationLanguage)) {
        once(`Echo-Translation@${ModInfo.version}`, async () => {
            const moduleURL = `${resourceBaseURL}translation.js?v=${debugFlag ? Date.now() : ModInfo.version}`;
            try {
                Logger.info(`Loading translation module...`);
                const { setupInvasiveTranslation } = await import(moduleURL);
                if (typeof setupInvasiveTranslation === "function") setupInvasiveTranslation(HookManager);
                else throw new Error("setupInvasiveTranslation is not a function");
            } catch (error) {
                Logger.error(`Failed to load translation module: ${error.message}`);
            }
        });
    }
}

export default function () {
    tryLoadTranslationModule();

    HookManager.hookFunction("TranslationLoad", 0, (args, next) => {
        const ret = next(args);
        tryLoadTranslationModule();
        return ret;
    });

    HookManager.hookFunction("TranslationSwitchLanguage", 0, (args, next) => {
        const ret = next(args);
        tryLoadTranslationModule();
        return ret;
    });
}
