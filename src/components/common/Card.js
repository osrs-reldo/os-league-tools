import React from 'react';
import { getLayoutSlots, withSlot, LayoutSlot } from './util/layout';
import { getCardStyle } from './util/theme';

function Card({
    children,
    image = null,
    imageSize = 'md',
    corners = 'default',
    borders = 'none',
    padding = 'md',
    halign = 'none',
    valign = 'none',
    shadow = 'default',
    onClick = () => {},
    className = '',
}) {
    const { header, body, footer } = getLayoutSlots(children);

    return (
        <div
            className={`bg-primary ${getCardStyle('corners', corners)} ${getCardStyle(
                'borders',
                borders
            )} ${getCardStyle('shadow', shadow)} shadow-primary overflow-hidden ${className}`}
            onClick={onClick}
        >
            <div className='flex md:flex-row flex-col h-full'>
                {image && <Image src={image} style={getCardStyle('imageSize', imageSize)} />}
                <div
                    className={`w-full ${getCardStyle('padding', padding)} ${getCardStyle(
                        'halign',
                        halign
                    )} ${getCardStyle('valign', valign)}`}
                >
                    {header}
                    {body && (header ? <div className='mt-2'>{body}</div> : body)}
                    {footer && <div className='mt-auto'>{footer}</div>}
                </div>
            </div>
        </div>
    );
}

function Image({ src, style }) {
    return <img className={style} src={src} alt='' />;
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
