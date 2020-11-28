import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function NewsEntry({ title, date, thumbnail, leadText, htmlContent }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card bg='dark' key={title} text='white' style={{ margin: '1rem' }}>
            <Card.Body>
                <Card.Title>
                    <h4>{title}</h4>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{date}</Card.Subtitle>
                <Container fluid>
                    <Row>
                        <Col sm='auto'>
                            {thumbnail && <img width='auto' height={100} src={thumbnail} alt={title} />}
                        </Col>
                        <Col>
                            {expanded ? (
                                <>
                                    { /* eslint-disable-next-line react/no-danger */ }
                                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='mb-1' />
                                    <Button variant='outline-light' onClick={() => setExpanded(!expanded)}>
                                        Show less
                                    </Button>
                                </>
                            ) : (
                                <>
                                    { /* eslint-disable-next-line react/no-danger */ }
                                    <div dangerouslySetInnerHTML={{ __html: `${leadText}...` }} className='mb-1' />
                                    <Button variant='outline-light' onClick={() => setExpanded(!expanded)}>
                                        Show more
                                    </Button>
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}
