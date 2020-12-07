import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export default function NewsEntry({ title, date, thumbnail, leadText, buttonLink, buttonText }) {
    return (
        <Card bg='dark' key={title} text='white' className='mt-3'>
            <Card.Body>
                <Card.Title>
                    <h4>{title}</h4>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{date}</Card.Subtitle>
                <Container fluid>
                    <Row>
                        <Col sm='auto'>
                            {thumbnail && (
                                <img width='auto' height={100} src={thumbnail} alt={title} className='mr-3' />
                            )}
                        </Col>
                        <Col>
                            {/* eslint-disable-next-line react/no-danger */}
                            <div dangerouslySetInnerHTML={{ __html: leadText }} className='mb-2' />
                            <Button variant='outline-light' as='a' href={buttonLink}>
                                {buttonText}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}
