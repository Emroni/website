export const ASSETS = process.env.REACT_APP_ASSETS_URL || '/assets/';

export function asset(file) {
    let url = `${ASSETS}${file}`;
    if (process.env.NODE_ENV !== 'development') {
        url += '?alt=media';
    }
    return url;
}