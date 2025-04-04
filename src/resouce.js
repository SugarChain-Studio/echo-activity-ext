import { resourceBaseURL } from "@mod-utils/rollupHelper";

export class Path {
    /**
     * @param {string} path
     * @returns {`${'http://' | 'https://'}${string}`}
     */
    static resolve(path) {
        const seperator = path.startsWith("/") ? "" : "/";
        return `${resourceBaseURL}${seperator}${path}`;
    }

    /**
     * @param {string} path
     */
    static preload(path) {
        const item = document.createElement("link");
        item.href = Path.resolve(path);
        item.rel = "preload";
        item.as = "image";
        item.crossOrigin = "anonymous";
        document.head.appendChild(item);
        item.onload = () => {
            document.head.removeChild(item);
        };
    }
}
