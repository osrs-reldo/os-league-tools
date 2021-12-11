import React, { useState } from 'react';
import Card from './common/Card';

export default function NewsCard({ title, date, coverImg, leadText, htmlContent }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Card image={coverImg}>
            <Card.Header style={Card.HEADING_PRESET.ACCENT}>{date}</Card.Header>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <p className='text-gray-500'>
                    {expanded ? (
                        <>
                            {/* eslint-disable-next-line react/no-danger */}
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='space-y-2' />
                            <div
                                className='font-semibold cursor-pointer text-gray-700'
                                onClick={() => setExpanded(!expanded)}
                            >
                                Show less
                            </div>
                        </>
                    ) : (
                        <>
                            <p className='inline'>{leadText}</p>{' '}
                            <div
                                className='inline font-semibold cursor-pointer text-gray-700'
                                onClick={() => setExpanded(!expanded)}
                            >
                                Read more...
                            </div>
                        </>
                    )}
                </p>
            </Card.Body>
        </Card>
    );
}
