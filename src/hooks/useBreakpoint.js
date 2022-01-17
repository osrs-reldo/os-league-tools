import { useMediaQuery } from 'react-responsive';

/**
 * Uses the same size definitions as tailwind does
 * https://tailwindcss.com/docs/responsive-design
 */
export const MEDIA_QUERIES = {
    XS: {
        minWidth: 0,
        maxWidth: 639.98,
    },
    SM: {
        minWidth: 640,
        maxWidth: 767.98,
    },
    MD: {
        minWidth: 768,
        maxWidth: 1023.98,
    },
    LG: {
        minWidth: 1024,
        maxWidth: 1279.98,
    },
    XL: {
        minWidth: 1280,
        maxWidth: 1535.98,
    },
    XXL: {
        minWidth: 1536,
        maxWidth: Number.MAX_SAFE_INTEGER,
    },
};

export const MODE = {
    STRICT: 0,
    LESS: 1,
    GREATER: 2,
    LESS_OR_EQ: 3,
    GREATER_OR_EQ: 4,
};

export default function useBreakpoint(query, mode = MODE.GREATER_OR_EQ) {
    switch (mode) {
        case MODE.LESS:
            return useMediaQuery({ maxWidth: query.minWidth });
        case MODE.GREATER:
            return useMediaQuery({ minWidth: query.maxWidth });
        case MODE.LESS_OR_EQ:
            return useMediaQuery({ maxWidth: query.maxWidth });
        case MODE.GREATER_OR_EQ:
            return useMediaQuery({ minWidth: query.minWidth });
        case MODE.STRICT:
        default:
            return useMediaQuery(query);
    }
}
