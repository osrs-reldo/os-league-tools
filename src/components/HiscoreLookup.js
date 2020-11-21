import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Spinner, Form } from "react-bootstrap";
import { getCachedHiscores, getHiscores } from "../client/hiscores-client";
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from "../util/browser-util";

export default function HiscoreLookup({ skill, setExpCallback = ()=>{}, setTotalLvlCallback = ()=>{}, refreshStateCallback = ()=>{}}) {
    const [username, setUsername] = useLocalStorage(LOCALSTORAGE_KEYS.USERNAME, "");
    const [errorText, setErrorText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const cachedHiscores = getCachedHiscores();
        if (cachedHiscores) {
            if (skill) {
                setExpCallback(cachedHiscores.skills[skill].xp);
                setTotalLvlCallback(cachedHiscores.skills.overall.level);
            }
        } else if (username) {
            setIsLoading(true);
            getHiscores(username).then(res => {
                if (res.success) {
                    if (skill) {
                        setExpCallback(res.hiscores.skills[skill].xp);
                        setTotalLvlCallback(res.hiscores.skills.overall.level);
                    }
                    setIsLoading(false);
                } else {
                    setErrorText(res.message);
                    setIsLoading(false);
                }
                refreshStateCallback();
            });
        }
    // only want this to run once on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const doHiscoresLookup = () => {
        setIsLoading(true);
        setErrorText('');
        if (username) {
            getHiscores(username).then(res => {
                if (res.success) {
                    if (skill) {
                        setExpCallback(res.hiscores.skills[skill].xp);
                        setTotalLvlCallback(res.hiscores.skills.overall.level);
                    }
                    setIsLoading(false);
                } else {
                    setErrorText(res.message);
                    setIsLoading(false);
                }
                refreshStateCallback();
            });
        } else {
            setErrorText('Please enter a username.');
            setIsLoading(false);
        }
    };

    return (
        <div className="p-3">
            <Form onSubmit={event => event.preventDefault()} >
                <InputGroup>
                    <FormControl
                        placeholder="Username"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-light"
                            type="submit"
                            onClick={() => doHiscoresLookup()}
                        >
                            {isLoading && <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="mr-1"
                            />}
                            Lookup
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {errorText && <div className="text-danger small">{errorText}</div>}
        </div>
    );
}