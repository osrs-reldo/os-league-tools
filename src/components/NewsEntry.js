import React from "react";
import { Button, Card, Media } from "react-bootstrap";

export default function NewsEntry({ title, date, thumbnail, leadText, buttonLink, buttonText }) {
    return (
        <Card bg='dark' key={title} text='white' style={{ margin: '1rem' }} >
            <Card.Body>
                <Card.Title>
                    <h4>{title}</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Media>
                    {thumbnail && <img
                        width='auto'
                        height={100}
                        src={thumbnail}
                        alt={title}
                        className='mr-3'
                    />}
                    <Media.Body>
                        <div dangerouslySetInnerHTML={{ __html: leadText }} className="mb-2" />
                        <Button
                            variant="outline-light"
                            as='a'
                            href={buttonLink}
                        >
                            {buttonText}
                        </Button>
                    </Media.Body>
                </Media>
            </Card.Body>
        </Card>
    );
}
