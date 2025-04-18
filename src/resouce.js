import { Logger } from "@mod-utils/log";
import { resourceBaseURL } from "@mod-utils/rollupHelper";
import { fetchAssetOverrides } from "@mod-utils/fetchAssetOverrides";
import { resolveAssetOverrides } from "@sugarch/bc-activity-manager";

const fixSeparator = resourceBaseURL.endsWith("/")
    ? (path) => (path.startsWith("/") ? path.substring(1) : path)
    : (path) => (path.startsWith("/") ? path : `/${path}`);

class PreloadItem {
    /**
     * @param {string} url
     * @param {(img:HTMLImageElement)=>void} [onload]
     */
    constructor(url, onload) {
        this.img = new Image();
        this.img.crossOrigin = "anonymous";
        this.loaded = false;
        this.onloads = [];
        this.retries = 0;
        this.maxRetries = 3;
        this.retryDelay = 1000; // 1 second

        if (onload) this.onloads.push(onload);
        this.img.onload = () => {
            this.loaded = true;
            for (const fn of this.onloads) {
                fn(this.img);
            }
            this.onloads = [];
        };
        this.img.onerror = () => {
            this.retries++;
            if (this.retries < this.maxRetries) {
                setTimeout(() => {
                    this.img.src = url;
                }, this.retryDelay);
            } else {
                Logger.error(`Failed to load image: ${url}`);
            }
        };
        this.img.src = url;
    }
}

class _Preloader {
    constructor() {
        /** @type {Map<string, PreloadItem>} */
        this.preloadStash = new Map();
    }

    /**
     * @param {string} path
     * @returns {Promise<HTMLImageElement>}
     */
    preload(path) {
        return new Promise((resolve) => {
            Path.afterLoad(() => {
                const url = Path.resolve(path);
                const item = this.preloadStash.get(path);
                if (!item || !item.loaded) {
                    const item = new PreloadItem(url, (img) => resolve(img));
                    this.preloadStash.set(path, item);
                } else if (item.loaded) {
                    resolve(this.preloadStash.get(path).img);
                } else {
                    item.onloads.push((img) => resolve(img));
                }
            });
        });
    }

    /**
     * @param {string} path
     * @param {(arg:HTMLImageElement)=>void} then
     */
    tryResolve(path, then) {
        const item = this.preloadStash.get(path);
        if (!item) {
            this.preload(path);
        } else if (item.loaded) {
            then(item.img);
        }
    }
}

export const Preloader = new _Preloader();

class _Path {
    constructor() {
        /** @type {Record<string, string>} */
        this.overrides = {};
        this.loaded = false;

        /** @type {(() => void)[]} */
        this.afterLoadEvents = [];

        (async () => {
            try {
                const container = await fetchAssetOverrides();
                this.overrides = await resolveAssetOverrides(resourceBaseURL, container);
                this.loaded = true;
                for (const fn of this.afterLoadEvents) fn();
                this.afterLoadEvents = [];
            } catch (error) {
                Logger.error(`Failed to fetch asset overrides: ${error}`);
            }
        })();
    }

    /**
     * @param {()=>void} cb
     */
    afterLoad(cb) {
        if (this.loaded) {
            cb();
        } else {
            this.afterLoadEvents.push(cb);
        }
    }

    /**
     * @param {string} path
     * @returns {`${'http://' | 'https://'}${string}`}
     */
    resolve(path) {
        if (path in this.overrides) {
            return /** @type {`${'http://' | 'https://'}${string}`}*/ (this.overrides[path]);
        } else {
            return `${resourceBaseURL}${fixSeparator(path)}`;
        }
    }
}

export const Path = new _Path();
