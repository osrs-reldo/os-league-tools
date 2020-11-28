import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import useScreenSize from '../hooks/useScreenSize';

export default function UnlockProgressBar({ curValue, maxValue, steps }) {
    const screenSize = useScreenSize();

    let barHeight = 30;
    let imgHeight = 40;
    let imgIcon = '/img/relic-check.png';
    let showEndIcons = true;
    let marginClass = 'mt-3 mb-3 mr-5 ml-5';
    if (screenSize.isSizeOrSmaller('sm')) {
        barHeight = 20;
        imgHeight = 20;
        imgIcon = '/img/notch.png';
        showEndIcons = false;
        marginClass = 'm-2';
    } else if (screenSize.isMd) {
        barHeight = 25;
        imgHeight = 25;
        imgIcon = '/img/notch.png';
        showEndIcons = false;
        marginClass = 'm-2';
    } else if (screenSize.isLg) {
        barHeight = 30;
        imgHeight = 30;
        imgIcon = '/img/notch.png';
        showEndIcons = false;
        marginClass = 'm-3';
    }

    let stepsToShow = steps;
    if (!showEndIcons) {
        stepsToShow = steps.slice(1, steps.length - 1);
    }
    const stepPercentages = stepsToShow.map(amount => (amount / maxValue) * 100);
    const curPercentage = Math.min((curValue / maxValue) * 100, 100);

    return (
        <div className={marginClass}>
            <ProgressBar
                filledBackground='linear-gradient(to right, #fefb72, #f0bb31)'
                percent={curPercentage}
                height={barHeight}
                stepPositions={stepPercentages}
            >
                {stepsToShow.map(step => {
                    return (
                        <Step key={step} transition='scale'>
                            {({ accomplished }) => (
                                <div className={`progressStep ${accomplished ? 'accomplished' : null}`}>
                                    <img src={imgIcon} alt='' height={imgHeight} />
                                </div>
                            )}
                        </Step>
                    );
                })}
            </ProgressBar>
        </div>
    );
}
