import React from 'react';
import { getLayoutSlots, withSlot, LayoutSlot } from './layout';

// TODO move these to css
const COVER_IMAGE_PRESET = {
    SMALL: 'h-32 md:w-32',
    MEDIUM: 'h-40 md:w-40',
    LARGE: 'h-48 md:w-48',
};
const HEADING_PRESET = {
    SIMPLE: 'block mt-1 text-lg leading-tight font-medium text-black',
    ACCENT: 'uppercase tracking-wide text-sm text-tl-sage font-semibold',
};
const CORNER_PRESET = {
    SMALL: 'rounded-sm',
    MEDIUM: 'rounded',
    LARGE: 'rounded-xl',
};
const BORDER_PRESET = {
    NONE: '',
    BOTTOM: 'border-b-2 border-tl-lime',
};
const CONTENT_PRESET = {
    DEFAULT: 'p-8',
};

function Card({
    children,
    image = null,
    cornerStyle = CORNER_PRESET.LARGE,
    borderStyle = BORDER_PRESET.NONE,
    imageStyle = COVER_IMAGE_PRESET.MEDIUM,
    contentStyle = CONTENT_PRESET.DEFAULT,
    extraClassNames = '',
}) {
    const { header, body, footer } = getLayoutSlots(children);

    return (
        <div className={`bg-white ${cornerStyle} ${borderStyle} shadow overflow-hidden m-2 ${extraClassNames}`}>
            <div className='md:flex h-full'>
                {image && <Image src={image} style={imageStyle} />}
                <div className={contentStyle}>
                    {header && <div>{header}</div>}
                    {body && <div className={header ? 'mt-2' : ''}>{body}</div>}
                    {footer && <div className='mt-auto'>{footer}</div>}
                </div>
            </div>
        </div>
    );
}

function Image({ src, style = COVER_IMAGE_PRESET.MEDIUM }) {
    return <img className={`md:flex-shrink-0 w-full object-cover ${style}`} src={src} alt='' />;
}

function Header({ children, style = HEADING_PRESET.SIMPLE }) {
    return <div className={style}>{children}</div>;
}

function Footer({ children }) {
    return <div className='mt-auto'>{children}</div>;
}

Card.Image = Image;
Card.Header = withSlot(Header, 'header');
Card.Body = LayoutSlot('body');
Card.Footer = withSlot(Footer, 'footer');
Card.HEADING_PRESET = HEADING_PRESET;
Card.COVER_IMAGE_PRESET = COVER_IMAGE_PRESET;
Card.CORNER_PRESET = CORNER_PRESET;
Card.BORDER_PRESET = BORDER_PRESET;
Card.CONTENT_PRESET = CONTENT_PRESET;

export default Card;
