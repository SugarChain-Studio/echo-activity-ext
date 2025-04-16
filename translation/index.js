import { setup as setupHtml } from "./html";
import { setup as setupBC } from "./bc";

export function setupInvasiveTranslation() {
    setupHtml();
    setupBC();
}
