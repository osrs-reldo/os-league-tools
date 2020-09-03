import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { getLevelForExp, getExpForLevel } from '../util/exp-table'

export default function LevelExpInput({ title, level, exp, setLevelCallback, setExpCallback }) {
    return (
        <InputGroup className="p-3">
            <InputGroup.Prepend>
                <InputGroup.Text>{title}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Level"
                value={level}
                onChange={(event) => {
                    setLevelCallback(event.target.value);
                    setExpCallback(getExpForLevel(event.target.value));
                }}
            />
            <FormControl
                placeholder="Exp"
                value={exp}
                onChange={(event) => {
                    setExpCallback(event.target.value);
                    setLevelCallback(getLevelForExp(event.target.value));
                }}
            />
        </InputGroup>
    );
}