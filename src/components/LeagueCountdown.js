import React, { useState, useEffect } from 'react';
import { durationAsCountdown } from '../util/numberFormatters';
import Card from './common/Card';

const LAUNCH_DATE = new Date('2022-01-19T12:00:00+00:00');
const END_DATE = new Date('2022-03-16T12:00:00+00:00');

export default function LeagueCountdown() {
    const [launchCountdown, setLaunchCountdown] = useState(durationAsCountdown(LAUNCH_DATE));
    const [endCountdown, setEndCountdown] = useState(durationAsCountdown(END_DATE));

    useEffect(() => {
        const timer = setTimeout(() => {
            setLaunchCountdown(durationAsCountdown(LAUNCH_DATE));
            setEndCountdown(durationAsCountdown(END_DATE));
        }, 1000);
        return () => clearTimeout(timer);
    });

    let text = 'SHATTERED RELICS LEAGUE ';
    if (launchCountdown) {
        text += 'BEGINS IN';
    } else if (endCountdown) {
        text += 'ENDS IN';
    } else {
        text += 'HAS ENDED. SEE YOU NEXT LEAGUE!';
    }

    return (
        <Card
            borders='accent-bottom'
            corners='sm'
            padding='sm'
            valign='center'
            halign='center'
            className='m-2 text-center h-24 w-96 md:mx-2 mx-auto'
        >
            <Card.Header className='heading-accent-md'>{text}</Card.Header>
            {(launchCountdown || endCountdown) && (
                <Card.Body>
                    <div className='font-bold font-mono text-xl'>{launchCountdown || endCountdown}</div>
                </Card.Body>
            )}
        </Card>
    );
}
