import React, { useState } from "react";
import { Button, Modal, Alert, Tabs, Tab, InputGroup, FormControl } from "react-bootstrap";
import { FilePicker } from "react-file-picker";
import { saveLocalStorageToFile, loadLocalStorageFromFile } from "../util/file-util";
import { updateLocalStorageFromRuneliteJson } from "../util/runelite-util";
import { resetLocalStorageData } from "../util/browser-util";

export default function ManageDataModal({ show, onClose }) {
    const [errorText, setErrorText] = useState("");
    const [successText, setSuccessText] = useState("");
    const [updated, setUpdated] = useState(false);
    const [runeliteImportJson, setRuneliteImportJson] = useState({});

    const loadFile = async (FileObject) => {
        const response = await loadLocalStorageFromFile(FileObject);
        if (response.success) {
            setSuccessText(
                "Successfully imported character data."
            );
            setErrorText("");
            setUpdated(true);
        } else {
            setSuccessText("");
            setErrorText(response.message);
        }
    }

    const resetData = () => {
        resetLocalStorageData();
        setUpdated(true);
    }

    const loadRuneliteImport = async () => {
        const response = await updateLocalStorageFromRuneliteJson(runeliteImportJson);
        if (response.success) {
            setSuccessText(
                "Successfully imported character data from Runelite."
            );
            setErrorText("");
            setUpdated(true);
        } else {
            setSuccessText("");
            setErrorText(response.message);
        }
    }

    return (
        <Modal show={show} onHide={() => onClose(updated)}>
            <Modal.Header closeButton>
                <Modal.Title>Manage Character Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs fill defaultActiveKey="export">
                    <Tab eventKey="export" title="Export">
                        <div className="text-center mt-3">
                            <p>
                                Export your character data to back it up or transfer to another computer:
                            </p>
                            <Button
                                className="m-2"
                                variant="dark"
                                onClick={saveLocalStorageToFile}
                            >
                                Export to file
                            </Button>
                        </div>
                    </Tab>
                    <Tab eventKey="import" title="Import">
                        <div className="text-center mt-3">
                            <Alert variant="warning" className="small">
                                <b>Warning!</b> Importing a backup will <b>overwrite</b> your current profile.
                            </Alert>
                            <p>
                                Restore a previously exported character backup:
                            </p>
                            <FilePicker
                                onChange={FileObject => {
                                    loadFile(FileObject, setSuccessText, setErrorText, setUpdated)
                                }}
                                onError={errMsg => {
                                    setSuccessText("");
                                    setErrorText(errMsg);
                                }}
                            >
                                <Button variant="dark" className="m-2">
                                    Import from file
                                </Button>
                            </FilePicker>
                            {errorText && <p className="text-danger small">{errorText}</p>}
                            {successText && (
                                <p className="text-success small">{successText}</p>
                            )}
                        </div>
                    </Tab>
                    <Tab eventKey="runelite" title="Runelite Import">
                        <div className="text-center mt-3">
                            <Alert variant="warning" className="small">
                                <b>Note:</b> Importing from Runelite will only update tasks, relics, and areas.
                            </Alert>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Paste copied data from Runelite:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    as="textarea"
                                    onChange={(event) => setRuneliteImportJson(event.target.value)}
                                    />
                            </InputGroup>
                            <Button onClick={loadRuneliteImport} variant="dark" className="m-2">
                                Import
                            </Button>
                            {errorText && <p className="text-danger small">{errorText}</p>}
                            {successText && (
                                <p className="text-success small">{successText}</p>
                            )}
                        </div>
                    </Tab>
                    <Tab eventKey="reset" title="Reset">
                        <div className="text-center mt-3">
                            <Alert variant="danger" className="small">
                                <b>Resetting your data is irreversible.</b> Proceed with caution.
                            </Alert>
                            <p>
                                Permanently delete your data and start fresh:
                            </p>
                            <Button
                                className="m-2"
                                variant="dark"
                                onClick={resetData}
                            >
                                Reset all data
                            </Button>
                        </div>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setErrorText("");
                        setSuccessText("");
                        onClose(updated);
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}