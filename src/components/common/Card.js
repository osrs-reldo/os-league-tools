import React from 'react';
import { getLayoutSlots, withSlot, LayoutSlot } from './layout';

/**
 * @property {children} [Component] Card content.
 * @property {image} String Cover image src. Optional.
 * @property {imageSize} String Cover image size. ['small', 'medium', 'large']
 * @property {corners} String Corner rounding radius. Leave empty/null for default rounding. ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
 * @property {borders} String Border settings. Black by default, or prefix with 'accent-' to use accent color.  ['none', 'top', 'bottom, 'left', 'right', 'full']
 * @property {padding} String Amount of padding around card contents. ['none', 'xs', 'sm', 'md', 'lg', 'xl']
 * @property {halign} String Card content horizontal alignment. ['none', 'left', 'right', 'center']
 * @property {valign} String Card content vertical alignment. ['none', 'top', 'bottom', 'center']
 * @property {extraClassNames} String Optional additional class names to apply to the entire card.
 */
function Card({
    children,
    image = null,
    imageSize = 'medium',
    corners = 'xl',
    borders = 'none',
    padding = 'md',
    halign = 'none',
    valign = 'none',
    extraClassNames = '',
}) {
    const { header, body, footer } = getLayoutSlots(children);

    return (
        <div
            className={`bg-primary ${
                corners ? `rounded-${corners}` : 'rounded'
            } card-border-${borders} shadow shadow-primary overflow-hidden m-2 ${extraClassNames}`}
        >
            <div className='flex md:flex-row flex-col h-full'>
                {image && <Image src={image} style={imageSize} />}
                <div className={`card-padding-${padding} card-halign-${halign} card-valign-${valign}`}>
                    {header && <div>{header}</div>}
                    {body && <div className={header ? 'mt-2' : ''}>{body}</div>}
                    {footer && <div className='mt-auto'>{footer}</div>}
                </div>
            </div>
        </div>
    );
}

function Image({ src, size = 'medium' }) {
    return <img className={`card-img-${size}`} src={src} alt='' />;
}

function Header({ children, className = 'heading-block-md' }) {
    return <div className={className}>{children}</div>;
}

function Footer({ children }) {
    return <div className='mt-auto'>{children}</div>;
}

Card.Image = Image;
Card.Header = withSlot(Header, 'header');
Card.Body = LayoutSlot('body');
Card.Footer = withSlot(Footer, 'footer');

export default Card;
