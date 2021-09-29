import React from 'react';
import Card from './Card';

export default function Banner({ children }) {
    return (
        <Card styleOptions={{ bodyPadding: 'p-1', borders: 'rounded-sm' }}>
            <Card.Content className=''>{children}</Card.Content>
        </Card>
    );
}
