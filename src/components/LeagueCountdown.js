import React, { useState, useEffect } from 'react';
import Card from './common/Card';

const LAUNCH_DATE = new Date('2022-01-19T11:30:00+00:00');
const END_DATE = new Date('2022-03-02T11:30:00+00:00');

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function getTimeRemaining(endDate, startDate = new Date()) {
    const remainingTime = endDate - startDate;
    if (remainingTime < 0) {
        return null;
    }
    const days = Math.floor(remainingTime / DAY);
    const hours = Math.floor((remainingTime % DAY) / HOUR);
    const minutes = Math.floor((remainingTime % HOUR) / MINUTE);
    const seconds = Math.floor((remainingTime % MINUTE) / SECOND);
    return `${days}d:${hours}h:${minutes}m:${seconds}s`;
}

export default function LeagueCountdown() {
    const [launchCountdown, setLaunchCountdown] = useState(getTimeRemaining(LAUNCH_DATE));
    const [endCountdown, setEndCountdown] = useState(getTimeRemaining(END_DATE));

    useEffect(() => {
        const timer = setTimeout(() => {
            setLaunchCountdown(getTimeRemaining(LAUNCH_DATE));
            setEndCountdown(getTimeRemaining(END_DATE));
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
            extraClassNames='m-2 text-center h-24 w-96 md:mx-2 mx-auto'
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
