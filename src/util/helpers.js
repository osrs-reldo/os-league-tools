/**
 * Formats a number into a locale string
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @param {*} number
 * @param {*} options
 * @returns
 */
export default function numberWithCommas(number, options) {
    return number.toLocaleString(undefined, { ...options });
}
