import { baseURL } from "@mod-utils/rollupHelper";

export class Path {
    /**
     * @param {string} path
     * @returns {string}
     */
    static resolve(path) {
        const seperator = path.startsWith("/") ? "" : "/";
        return `${baseURL}${seperator}${path}`;
    }

    /**
     * @param {string} path
     */
    static preload(path) {
        const item = document.createElement("link");
        item.href = Path.resolve(path);
        item.rel = "preload";
        item.as = "image";
        document.head.appendChild(item);
        item.onload = () => {
            document.head.removeChild(item);
        };
    }
}