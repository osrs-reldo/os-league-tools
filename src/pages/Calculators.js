import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import calculatorData from '../resources/calculatorData.json';
import { getContentWidthClass } from '../util/settings-util';

export default function Calculators() {
    return (
        <div className={getContentWidthClass()}>
            <CardDeck>
                <Card bg='dark' text='white' className='mt-2 mb-2'>
                    <h1 className='mt-2 light-text text-center'>Skill Calculators</h1>
                    <div className='content-center'>
                        <p className='mb-2 text-center'>
                            Input a target level or exp, and find out how many actions you need to get there.
                        </p>
                        <ul className='calc-list'>
                            {calculatorData.skills.map(skill => {
                                const skillData = calculatorData.calculators[skill];
                                if (!skillData) {
                                    return null;
                                }
                                return (
                                    <li className='mt-2' key={skillData.name}>
                                        <Link
                                            to={`/calculators/${skill}`}
                                            className='text-light'
                                            key={skill}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <img src={skillData.icon} alt={skillData.name} />
                                            {` ${skillData.name}`}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Card>
                <Card bg='dark' text='white' className='mt-2 mb-2'>
                    <h1 className='mt-2 light-text text-center'>Skill Planners</h1>
                    <div className='content-center'>
                        <p className='mb-2 text-center'>
                            Input how many actions you plan to do, and find out how much exp it'll give you.
                        </p>
                        <ul className='calc-list'>
                            {calculatorData.skills.map(skill => {
                                const skillData = calculatorData.calculators[skill];
                                if (!skillData) {
                                    return null;
                                }
                                return (
                                    <li className='mt-2' key={skillData.name}>
                                        <Link
                                            to={`/planners/${skill}`}
                                            className='text-light'
                                            key={skill}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <img src={skillData.icon} alt={skillData.name} />
                                            {` ${skillData.name}`}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white'>
                <h1 className='mt-2 light-text text-center'>Other Calculators</h1>
                <div className='m-3 text-center'>Coming soon!</div>
            </Card>
        </div>
    );
}
