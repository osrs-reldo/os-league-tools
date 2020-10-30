import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import calculatorData from '../resources/calculatorData.json';
import ReactGA from 'react-ga';

ReactGA.pageview(window.location.pathname + window.location.search);

export default function Calculators() {
    return (
        <div className="content-wrapper">
            <CardDeck>
                <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                    <h1 className="mt-2 light-text text-center">Skill Calculators</h1>
                    <div className="content-center">
                        <ul className="calc-list">
                            {calculatorData.skills.map(skill => {
                                const skillData = calculatorData.calculators[skill];
                                if (!skillData) {
                                    return null;
                                }
                                return (
                                    <li className="mt-2" key={skillData.name}>
                                        <Link to={"/calculators/" + skill} className="text-light" key={skill} style={{ textDecoration: "none" }}>
                                            <img src={skillData.icon} alt={skillData.name} /> {skillData.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Card>
                <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                    <h1 className="mt-2 light-text text-center">Skill Planners</h1>
                    <div className="m-3 text-center">
                        Coming soon!
                </div>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white'>
                <h1 className="mt-2 light-text text-center">Other Calculators</h1>
                <div className="m-3 text-center">
                    Coming soon!
                </div>
            </Card>
        </div >
    );
}
