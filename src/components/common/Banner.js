import React from 'react';
import Card from './Card';

export default function Banner({ children, className }) {
    return (
        <Card corners='sm' padding='sm' className={className}>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
}
