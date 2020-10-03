import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from '../util/browser-util';

// TODO make this functional
export default function HiscoreLookup({ setLevelCallback, setExpCallback }) {
    const [username, setUsername] = useLocalStorage(LOCALSTORAGE_KEYS.USERNAME, "");

    return (
        <InputGroup className="p-3">
            <FormControl
                placeholder="Username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <InputGroup.Append>
                <Button
                    variant="outline-light"
                    onClick={() => console.log(username)}
                >
                    Lookup
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}