import { getFromLocalStorage } from './browser-util';

export const SETTINGS_KEYS = {
    CONTENT_WIDTH: 'contentWidth',
    HIDDEN_COLUMNS: 'hiddenColumns',
};

export const CONTENT_WIDTH_VALUES = {
    MAX: 'content-wrapper-full',
    PADDED: 'content-wrapper',
};
export const CONTENT_WIDTH_DEFAULT = CONTENT_WIDTH_VALUES.PADDED;

export function getContentWidthClass() {
    return getFromLocalStorage(SETTINGS_KEYS.CONTENT_WIDTH, CONTENT_WIDTH_DEFAULT);
}
