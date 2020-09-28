import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default function UnlockProgressBar({ curValue, maxValue, steps, stepImage }) {
    const stepPercentages = steps.map(amount => (amount / maxValue) * 100);
    const curPercentage = (curValue / maxValue) * 100;
    return (
        <div className="mt-3 mb-3 ml-5 mr-5">
            <ProgressBar
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                percent={curPercentage}
                height={30}
                stepPositions={stepPercentages}
            >
                {steps.map(step => {
                    return (
                        <Step key={step} transition="scale">
                            {({ accomplished, index }) => (
                                <div
                                    className={`progressStep ${accomplished ? "accomplished" : null}`}
                                >
                                    {stepImage}
                                </div>
                            )}
                        </Step>
                    );
                })}
            </ProgressBar>
        </div>
    );
}
