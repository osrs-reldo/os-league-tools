import React, { useState } from "react";
import { Button, Card, Media } from "react-bootstrap";

export default function NewsEntry({ title, thumbnail, leadText, htmlContent }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card bg='dark' key={title} text='white' style={{ margin: '1rem' }} >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Media>
                        {thumbnail && <img
                            width='auto'
                            height={100}
                            className="mr-3"
                            src={thumbnail}
                            alt={title}
                        />}
                        <Media.Body>
                            {expanded ? (
                                <React.Fragment>
                                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                                    <Button
                                        variant='link'
                                        onClick={() => setExpanded(!expanded)}
                                    >
                                        Show less
                                    </Button>
                                </React.Fragment>
                            ) : (
                                    <p>
                                        <div dangerouslySetInnerHTML={{ __html: leadText + '...' }} />
                                        <Button
                                            variant='link'
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Read more
                                    </Button>
                                    </p>
                                )}
                        </Media.Body>
                    </Media>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
