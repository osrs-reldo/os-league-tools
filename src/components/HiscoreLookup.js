import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

// TODO make this functional
export default function HiscoreLookup({ setLevelCallback, setExpCallback }) {
    // const [username, setUsername] = useLocalStorage(LOCALSTORAGE_KEYS.USERNAME, "");

    return (
        <InputGroup className="p-3">
            <FormControl
                placeholder="Username"
                // value={username}
                // onChange={event => setUsername(event.target.value)}
            />
            <InputGroup.Append>
                <Button
                    variant="outline-light"
                    // onClick={() => console.log(username)}
                >
                    Lookup
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}