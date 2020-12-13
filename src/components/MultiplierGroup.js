import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import _ from 'lodash';
import { getDefaultCheckedMultipliers } from '../util/calculator-util';

export default function MultiplierGroup({ title, multiplierData, globalMultiplierData = [], multipliers }) {
    const [checkedGlobalMultipliers, setCheckedGlobalMultipliers] = useState([]);

    useEffect(() => {
        const toCheckByDefault = getDefaultCheckedMultipliers(globalMultiplierData, multipliers);
        setCheckedGlobalMultipliers(toCheckByDefault);
        // only want this to run a single time on first load, so don't depend on anything here
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (multiplierData.length === 0 && globalMultiplierData.length === 0) {
        return null;
    }

    return (
        <>
            <h4>{`${title}:`}</h4>
            <div className='pl-2 pb-2'>
                {globalMultiplierData.length > 0 &&
                    globalMultiplierData.map(multiplier => {
                        return (
                            <Form.Check
                                label={multiplier.name}
                                key={multiplier.id}
                                checked={checkedGlobalMultipliers.includes(multiplier.id)}
                                onChange={event => {
                                    if (event.target.checked) {
                                        setCheckedGlobalMultipliers(prevState => [...prevState, multiplier.id]);
                                        multipliers.add(multiplier.id, multiplier.multiplier, true);
                                    } else {
                                        setCheckedGlobalMultipliers(prevState => _.without(prevState, multiplier.id));
                                        multipliers.remove(multiplier.id, true);
                                    }
                                }}
                            />
                        );
                    })}
                {multiplierData.length > 0 &&
                    multiplierData.map(multiplier => {
                        return (
                            <Form.Check
                                label={multiplier.name}
                                key={multiplier.id}
                                onChange={event => {
                                    if (event.target.checked) {
                                        multipliers.add(multiplier.id, multiplier.multiplier);
                                    } else {
                                        multipliers.remove(multiplier.id);
                                    }
                                }}
                            />
                        );
                    })}
            </div>
        </>
    );
}
