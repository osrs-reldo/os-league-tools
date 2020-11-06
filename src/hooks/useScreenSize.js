import { useMediaQuery } from 'react-responsive';

/**
 * Uses the same size definitions as bootstrap does
 * https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints
 */
const MEDIA_QUERIES = {
    XS: {
        query: '(max-width: 575.98px)'
    },
    SM: {
        query: '(max-width: 767.98px)'
    },
    MD: {
        query: '(max-width: 991.98px)'
    },
    LG: {
        query: '(max-width: 1199.98px)'
    }
}

export default function useScreenSize() {
    const isXs = useMediaQuery(MEDIA_QUERIES.XS);
    const isSm = useMediaQuery(MEDIA_QUERIES.SM);
    const isMd = useMediaQuery(MEDIA_QUERIES.MD);
    const isLg = useMediaQuery(MEDIA_QUERIES.LG);

    return {isXs, isSm, isMd, isLg,}
}
