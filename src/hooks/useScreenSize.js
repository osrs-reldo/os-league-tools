import { useMediaQuery } from 'react-responsive';

/**
 * Uses the same size definitions as bootstrap does
 * https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints
 */
const MEDIA_QUERIES = {
    XS: {
        maxWidth: 575.98
    },
    SM: {
        minWidth: 576,
        maxWidth: 767.98
    },
    MD: {
        minWidth: 768,
        maxWidth: 991.98
    },
    LG: {
        minWidth: 992,
        maxWidth: 1199.98
    },
    XL: {
        minWidth: 1200
    }
}

export default function useScreenSize() {
    const isXs = useMediaQuery(MEDIA_QUERIES.XS);
    const isSm = useMediaQuery(MEDIA_QUERIES.SM);
    const isMd = useMediaQuery(MEDIA_QUERIES.MD);
    const isLg = useMediaQuery(MEDIA_QUERIES.LG);
    const isXl = useMediaQuery(MEDIA_QUERIES.XL);

    const isSizeOrSmaller = (size) => {
        switch (size) {
            case 'xs':
                return isXs;
            case 'sm':
                return isXs || isSm;
            case 'md':
                return isXs || isSm || isMd;
            case 'lg':
                return isXs || isSm || isMd || isLg;
            case 'xl':
                return isXs || isSm || isMd || isLg || isXl;
            default:
               return false;
        }
    }

    const isSizeOrLarger = (size) => {
        switch (size) {
            case 'xl':
                return isXl;
            case 'lg':
                return isLg || isXl;
            case 'md':
                return isMd || isLg || isXl;
            case 'sm':
                return isSm || isMd || isLg || isXl;
            case 'xs':
            default:
                return true;
        }
    }

    return {isXs, isSm, isMd, isLg, isXl, isSizeOrSmaller, isSizeOrLarger}
}
