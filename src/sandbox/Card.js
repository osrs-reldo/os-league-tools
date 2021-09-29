import React from 'react';

function Card({ children, coverImage, styleOptions = {} }) {
    const { bodyPadding = 'p-8', borders = 'rounded-xl', extraClassNames = '' } = styleOptions;
    return (
        <div className={`bg-white ${borders} shadow overflow-hidden m-2 ${extraClassNames}`}>
            <div className='md:flex h-full'>
                {coverImage && <CoverImage src={coverImage} />}
                <div className={bodyPadding}>{children}</div>
            </div>
        </div>
    );
}

function CoverImage({ src }) {
    return (
        <div className='md:flex-shrink-0'>
            <img className='h-40 w-full object-cover md:w-40' src={src} alt='' />
        </div>
    );
}

function Heading({ children }) {
    return <div className='block mt-1 text-lg leading-tight font-medium text-black'>{children}</div>;
}

function Subheading({ children }) {
    return <div className='uppercase tracking-wide text-sm text-tl-sage font-semibold'>{children}</div>;
}

function Content({ children, className = 'mt-2' }) {
    return <div className={className}>{children}</div>;
}

Card.Heading = Heading;
Card.Subheading = Subheading;
Card.Content = Content;

export default Card;
