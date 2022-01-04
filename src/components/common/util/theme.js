export const CARD = {
    imageSize: {
        sm: 'md:flex-shrink-0 w-full object-cover h-32 md:w-32',
        md: 'md:flex-shrink-0 w-full object-cover h-40 md:w-40',
        lg: 'md:flex-shrink-0 w-full object-cover h-48 md:w-48',
    },
    corners: {
        none: 'rounded-none',
        default: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
    },
    borders: {
        none: 'border-none',
        top: 'border-t-2 border-black',
        bottom: 'border-b-2 border-black',
        left: 'border-l-2 border-black',
        right: 'border-r-2 border-black',
        full: 'border-2 border-black',
        'accent-top': 'border-t-2 border-accent',
        'accent-bottom': 'border-b-2 border-accent',
        'accent-left': 'border-l-2 border-accent',
        'accent-right': 'border-r-2 border-accent',
        'accent-full': 'border-2 border-accent',
    },
    padding: {
        none: 'p-0',
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
    },
    halign: {
        none: '',
        left: 'mr-auto',
        right: 'ml-auto',
        center: 'mx-auto',
    },
    valign: {
        none: '',
        top: 'mb-auto',
        bottom: 'mt-auto',
        center: 'my-auto',
    },
    shadow: {
        none: '',
        default: 'shadow',
    },
};

export function getCardStyle(type, id) {
    if (CARD[type] && CARD[type][id] !== undefined) {
        return CARD[type][id];
    }
    return id || '';
}

export const DROPDOWN = {
    sm: 'w-32',
    md: 'w-60',
    lg: 'w-96',
    content: 'w-max',
};

export const SEPARATOR = {
    variant: {
        horizontal: 'w-full h-px',
        vertical: 'h-full w-px',
    },
    'variant-with-breakpoint': {
        'horizontal-md': 'md:h-px h-full md:w-full w-px',
        'horizontal-lg': 'lg:h-px h-full lg:w-full w-px',
        'vertical-md': 'md:w-px w-full md:h-full h-px',
        'vertical-lg': 'lg:w-px w-full lg:h-full h-px',
    },
};
