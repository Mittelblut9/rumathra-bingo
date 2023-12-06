/**
 * Retrieves the value of a cookie by its name.
 * @param {string} name - The name of the cookie.
 * @param {string} bingoName - The name of the bingo.
 * @param {boolean} [parse=false] - Whether to parse the cookie value as JSON.
 * @returns {string|Object|null} - The value of the cookie. If `parse` is `true`, it returns the parsed JSON object. If the cookie doesn't exist or parsing fails, it returns `null`.
 */
export function getCookie(name, bingoName, parse = false) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}${bingoName}=`);
    const bingoCookieValue = parts.pop().split(';').shift();

    if(!parse) {
        return bingoCookieValue;
    }

    try {
        return JSON.parse(bingoCookieValue);
    } catch (error) {
        return null;
    }
}

export function saveCookie(name, bingo, value) {
    const now = new Date();
    const expirationDate = new Date();
    expirationDate.setFullYear(now.getFullYear() + 1);
    const expires = expirationDate.toUTCString();
    document.cookie = `${name}${bingo}=${value}; expires=${expires}; path=/; sameSite=strict;`;
}