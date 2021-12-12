import React from 'react';
import { Card, Row, Col, Nav, Form, Tab, Button } from 'react-bootstrap';
import _ from 'lodash';
import Divider from '../../components/legacy/Divider';
import useLocalStorage from '../../hooks/legacy/useLocalStorage';
import {
    SETTINGS_KEYS,
    getContentWidthClass,
    CONTENT_WIDTH_DEFAULT,
    CONTENT_WIDTH_VALUES,
} from '../../util/legacy/settings-util';
import { resetLocalStorageData } from '../../util/legacy/browser-util';

export default function Settings() {
    const [contentWidth, setContentWidth] = useLocalStorage(SETTINGS_KEYS.CONTENT_WIDTH, CONTENT_WIDTH_DEFAULT);
    const [hiddenColumns, setHiddenColumns] = useLocalStorage(SETTINGS_KEYS.HIDDEN_COLUMNS, []);

    return (
        <div className={getContentWidthClass()}>
            <Card bg='dark' text='white' className='mt-3'>
                <h3 className='text-center mt-3'>Settings</h3>
                <Tab.Container defaultActiveKey='interface'>
                    <Row className='m-3'>
                        <Col lg={4}>
                            <Card bg='dark' text='white' style={{ border: '0' }} className='p-3'>
                                <Nav variant='pills' className='flex-column tab-bar-secondary' fill>
                                    <Nav.Item>
                                        <Nav.Link eventKey='interface'>
                                            <h5>Interface</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='user-data'>
                                            <h5>User Data</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                bg='dark'
                                text='white'
                                style={{ border: '1px solid #6c757d', borderRadius: '1rem' }}
                                className='p-3'
                            >
                                <div className='m-3'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey='interface'>
                                            <Form.Check
                                                label='Use full screen width for site content (no sidebar padding)'
                                                checked={contentWidth === CONTENT_WIDTH_VALUES.MAX}
                                                onChange={event =>
                                                    setContentWidth(
                                                        event.target.checked
                                                            ? CONTENT_WIDTH_VALUES.MAX
                                                            : CONTENT_WIDTH_VALUES.PADDED
                                                    )
                                                }
                                            />
                                            <Divider spacingProps='mt-3 mb-3' />
                                            Configure visibility of columns on task tracker:
                                            <div className='mt-1 ml-3'>
                                                {[
                                                    'Difficulty',
                                                    'Category',
                                                    'Subcategory',
                                                    'Requirements',
                                                    'Manage',
                                                ].map(columnName => (
                                                    <Form.Check
                                                        key={columnName}
                                                        label={`Hide "${columnName}" column`}
                                                        checked={hiddenColumns.includes(columnName)}
                                                        onChange={event => {
                                                            if (event.target.checked) {
                                                                setHiddenColumns(prevState => [
                                                                    ...prevState,
                                                                    columnName,
                                                                ]);
                                                            } else {
                                                                setHiddenColumns(prevState =>
                                                                    _.without(prevState, columnName)
                                                                );
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <Tab.Content>
                                        <Tab.Pane eventKey='user-data'>
                                            <p>
                                                <b>WARNING: Resetting your data is irreversible.</b> Proceed with
                                                caution.
                                            </p>
                                            <Button
                                                className='m-2'
                                                variant='light'
                                                onClick={() => resetLocalStorageData()}
                                            >
                                                Reset all user data and settings to default
                                            </Button>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card>
        </div>
    );
}
