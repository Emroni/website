export const ASSETS = process.env.NODE_ENV === 'development' ? '/assets/' : 'https://firebasestorage.googleapis.com/v0/b/emroni-website.appspot.com/o/';

export function asset(file) {
    let url = `${ASSETS}${file}`;
    if (process.env.NODE_ENV !== 'development') {
        url += '?alt=media';
    }
    return url;
}