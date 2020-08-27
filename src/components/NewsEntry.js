import React, { useState } from "react";
import { Jumbotron, Button, Collapse } from "react-bootstrap";

export default function NewsEntry({ title, thumbnail, htmlContent }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Jumbotron className="bg-dark text-white">
            <h1>{title}</h1>
            <Button
                onClick={() => setExpanded(!expanded)}
            >Read more</Button>

            <Collapse in={expanded}>
                <div>{htmlContent}</div>
            </Collapse>

        </Jumbotron>
    );
}
