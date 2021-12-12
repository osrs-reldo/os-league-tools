import React from 'react';
import Card from './common/Card';

export default function IconLinkCard({ title, href = '/', srcOverride = null, iconOverride = null }) {
    let icon;
    if (srcOverride) {
        icon = <img className='h-9 mb-1 img-primary' src={srcOverride} alt='' />;
    } else {
        icon = <span className='icon-4xl text-center'>{iconOverride || title.toLowerCase()}</span>;
    }

    return (
        <Card
            borders='accent-bottom'
            corners={null}
            padding='sm'
            valign='center'
            halign='center'
            extraClassNames='h-24 w-24 md:inline hidden'
        >
            <Card.Body>
                <a className='flex flex-col' href={href}>
                    {icon}
                    <p className='font-sans-alt'>{title}</p>
                </a>
            </Card.Body>
        </Card>
    );
}
