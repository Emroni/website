export function asset(file) {
    return process.env.REACT_APP_ASSETS_URL + file + process.env.REACT_APP_ASSETS_URL_POSTFIX;
}