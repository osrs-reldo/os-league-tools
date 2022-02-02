import React from 'react';
import Card from '../components/common/Card';
import PageWrapper from '../components/PageWrapper';
import CalculatorsPanel from './CalculatorsPanel';

export default function Calculators() {
    return (
        <PageWrapper>
            <Card>
                <Card.Body>
                    <CalculatorsPanel />
                </Card.Body>
            </Card>
        </PageWrapper>
    );
}
