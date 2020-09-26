import React from "react";
import { Form } from "react-bootstrap";

export default function MultiplierGroup({ title, multiplierData, globalMultiplierData = [], setMultiplierCallback, removeMultiplierCallback }) {
    if (multiplierData.length === 0) {
        return null;
    }

    return (
        <React.Fragment>
            <h4>{title + ":"}</h4>
            <div className={"pl-2 pb-2"}>
                {globalMultiplierData.map(multiplier => {
                    return (
                        <Form.Check
                            label={multiplier.name}
                            key={multiplier.id}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setMultiplierCallback(multiplier.id, multiplier.multiplier, true);
                                } else {
                                    removeMultiplierCallback(multiplier.id, true)
                                }
                            }}
                        />
                    );
                })}
                {multiplierData.map(multiplier => {
                    return (
                        <Form.Check
                            label={multiplier.name}
                            key={multiplier.id}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setMultiplierCallback(multiplier.id, multiplier.multiplier);
                                } else {
                                    removeMultiplierCallback(multiplier.id)
                                }
                            }}
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
}
