/**
 * 判断是否启用MPA
 * @returns {boolean}
 */
export function MPAenabled() {
    return !!(/** @type {any}*/ (Player).MPA);
}
