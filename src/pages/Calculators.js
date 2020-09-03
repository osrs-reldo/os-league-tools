import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import calculatorData from '../resources/calculatorData.json';

export default function Calculators() {
    return (
        <div className="content-wrapper">
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <h1 className="mt-2 light-text text-center">Skill Calculators</h1>
                <div className="m-3 text-center">
                    {calculatorData.skills.map(skill => {
                        const skillData = calculatorData.calculators[skill];
                        if (!skillData) {
                            return null;
                        }
                        return (
                            <Link to={"/calculators/" + skill} className="mt-2 text-light" key={skill}>
                                <img src={skillData.icon} alt={skillData.name} /> {skillData.name}
                            </Link>
                        )
                    })}
                </div>
            </Card>
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <h1 className="mt-2 light-text text-center">Skill Planners</h1>
                <div className="m-3 text-center">
                    None yet
                </div>
            </Card>
        </div>
    );
}
