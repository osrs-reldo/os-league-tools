import React from 'react';
import { Card, Row, Col, Nav, Form } from 'react-bootstrap';
import Divider from '../components/Divider';
import useLocalStorage from '../hooks/useLocalStorage';
import {
    SETTINGS_KEYS,
    getContentWidthClass,
    CONTENT_WIDTH_DEFAULT,
    CONTENT_WIDTH_VALUES,
} from '../util/settings-util';

export default function Settings() {
    const [contentWidth, setContentWidth] = useLocalStorage(SETTINGS_KEYS.CONTENT_WIDTH, CONTENT_WIDTH_DEFAULT);

    return (
        <div className={getContentWidthClass()}>
            <Card bg='dark' text='white' className='mt-3'>
                <h3 className='text-center mt-3'>Settings</h3>
                <Row className='m-3'>
                    <Col lg={4}>
                        <Card bg='dark' text='white' style={{ border: '0' }} className='p-3'>
                            <Nav
                                variant='pills'
                                className='flex-column tab-bar-secondary'
                                fill
                                defaultActiveKey='interface'
                            >
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
                            <h4>Interface settings:</h4>
                            <>
                                <div className='m-3'>
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
                                    <Divider />
                                </div>
                            </>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
