import React, { useState } from "react";
import { Button, Card, Media } from "react-bootstrap";

export default function NewsEntry({ title, date, thumbnail, leadText, htmlContent }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card bg='dark' key={title} text='white' style={{ margin: '1rem' }} >
            <Card.Body>
                <Card.Title>
                    <h4>{title}</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>
                    <Media>
                        {thumbnail && <img
                            width='auto'
                            height={100}
                            src={thumbnail}
                            alt={title}
                        />}
                        <Media.Body>
                            {expanded ? (
                                <React.Fragment>
                                    <p>
                                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                                    </p>
                                    <p>
                                        <Button
                                            variant="outline-light"
                                            onClick={() => setExpanded(!expanded)}
                                        >
                                            Show less
                                    </Button>
                                    </p>
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <p>
                                            <div dangerouslySetInnerHTML={{ __html: leadText + '...' }} />
                                        </p>
                                        <p>
                                            <Button
                                                variant="outline-light"
                                                onClick={() => setExpanded(!expanded)}
                                            >
                                                Show more
                                            </Button>
                                        </p>
                                    </React.Fragment>
                                )}
                        </Media.Body>
                    </Media>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
