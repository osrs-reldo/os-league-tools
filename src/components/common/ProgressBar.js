import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar as WrappedProgressBar, Step } from 'react-step-progress-bar';

export default function ProgressBar({
    curValue,
    maxValue,
    steps,
    backgroundColor,
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
        <WrappedProgressBar
            filledBackground={backgroundColor}
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
        </WrappedProgressBar>
    );
}
