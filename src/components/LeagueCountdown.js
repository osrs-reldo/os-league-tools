import React, { useState, useEffect } from 'react';
import { LEAGUE_END_DATE, LEAGUE_START_DATE } from '../data/constants';
import { durationAsCountdown } from '../util/numberFormatters';
import Card from './common/Card';

export default function LeagueCountdown() {
  const [launchCountdown, setLaunchCountdown] = useState(durationAsCountdown(LEAGUE_START_DATE));
  const [endCountdown, setEndCountdown] = useState(durationAsCountdown(LEAGUE_END_DATE));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLaunchCountdown(durationAsCountdown(LEAGUE_START_DATE));
      setEndCountdown(durationAsCountdown(LEAGUE_END_DATE));
    }, 1000);
    return () => clearTimeout(timer);
  });

  let text = 'TRAILBLAZER LEAGUE RELOADED ';
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
