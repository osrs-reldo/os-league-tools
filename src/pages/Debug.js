import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from "../util/browser-util";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Debug() {
    const [copied, setCopied] = useState(false);

    const localStorageDump = {}
    Object.entries(LOCALSTORAGE_KEYS).forEach(([key, value], idx) => {
        console.log(key)
        console.log(value)
        localStorageDump[key] = getFromLocalStorage(value);
    })

    return (
        <div className="content-wrapper">
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <h1 className="mt-2 light-text text-center">hi, you've found the debug page</h1>
                <p className="text-center">
                    Copy the text below and include it with your bug report:
                </p>

                <p className="text-center">
                    <CopyToClipboard
                        text={JSON.stringify(localStorageDump)}
                        onCopy={() => setCopied(true)}
                    >
                        <Button variant="secondary">Click to copy to clipboard</Button>
                    </CopyToClipboard>
                    {copied && <div className="small">copied!</div>}

                    <pre className='text-light m-3'>
                        {JSON.stringify(localStorageDump)}
                    </pre>
                </p>
            </Card>
        </div >
    );
}
