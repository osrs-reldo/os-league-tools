import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

export default function UnlockProgressBar({
    curValue,
    maxValue,
    steps,
    iconSrc = '/img/notch.png',
    showEndIcons = false,
}) {
    let stepsToShow = steps;
    if (!showEndIcons) {
        stepsToShow = steps.slice(1, steps.length - 1);
    }
    const stepPercentages = stepsToShow.map(amount => (amount / maxValue) * 100);
    const curPercentage = Math.min((curValue / maxValue) * 100, 100);

    return (
        <ProgressBar
            filledBackground='linear-gradient(to right, #649044, #a4ce27)'
            percent={curPercentage}
            height={20}
            stepPositions={stepPercentages}
        >
            {stepsToShow.map(step => {
                return (
                    <Step key={step} transition='scale'>
                        {() => <img src={iconSrc} alt='' className='h-5' />}
                    </Step>
                );
            })}
        </ProgressBar>
    );
}
