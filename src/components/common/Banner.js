import React from 'react';
import Card from './Card';

export default function Banner({ children }) {
    return (
        <Card cornerStyle={Card.CORNER_PRESET.SMALL} contentStyle='p-1'>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
}
