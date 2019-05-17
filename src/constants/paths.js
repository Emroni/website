export const ASSETS = process.env.REACT_APP_ASSETS_URL || '/assets/';
export const ASSETS_POSTFIX = process.env.REACT_APP_ASSETS_URL_POSTFIX || '';

export function asset(file) {
    return ASSETS + file + ASSETS_POSTFIX;
}