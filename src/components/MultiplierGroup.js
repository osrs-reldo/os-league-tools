import React from "react";
import { Form } from "react-bootstrap";

export default function MultiplierGroup({ title, multiplierData, setMultiplierCallback }) {
    if (multiplierData.length === 0) {
        return null;
    }

    return (
        <React.Fragment>
            <h4>{title + ":"}</h4>
            <div className={"pl-2 pb-2"}>
                {multiplierData.map(multiplier => {
                    return (
                        <Form.Check
                            label={multiplier.name}
                            key={multiplier.id}
                            onChange={(event) => {
                                if (event.target.checked) {
                                    setMultiplierCallback(prevMultiplier => prevMultiplier * multiplier.multiplier);
                                } else {
                                    setMultiplierCallback(prevMultiplier => prevMultiplier / multiplier.multiplier);
                                }
                            }}
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
}
