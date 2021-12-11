import React from 'react';
import Card from './Card';

export default function Banner({ children }) {
    return (
        <Card corners='sm' padding='xs'>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
}
