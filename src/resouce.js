import { Logger } from "@mod-utils/log";
import { resourceBaseURL } from "@mod-utils/rollupHelper";

const fixSeparator = resourceBaseURL.endsWith("/")
    ? (path) => (path.startsWith("/") ? path.substring(1) : path)
    : (path) => (path.startsWith("/") ? path : `/${path}`);

export class Path {
    /**
     * @param {string} path
     * @returns {`${'http://' | 'https://'}${string}`}
     */
    static resolve(path) {
        return `${resourceBaseURL}${fixSeparator(path)}`;
    }
}

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
    async preload(path) {
        const url = Path.resolve(path);
        const item = this.preloadStash.get(path);
        if (!item || !item.loaded) {
            return new Promise((resolve) => {
                const item = new PreloadItem(url, (img) => resolve(img));
                this.preloadStash.set(path, item);
            });
        } else if (item.loaded) {
            return Promise.resolve(this.preloadStash.get(path).img);
        } else {
            return new Promise((resolve) => {
                item.onloads.push((img) => resolve(img));
            });
        }
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
