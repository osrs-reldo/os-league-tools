import React from 'react';
import Card from '../components/common/Card';
import PageWrapper from '../components/PageWrapper';

export default function Calculators() {
    return (
        <PageWrapper>
            <div className='container lg:max-w-[768px] mx-auto'>
                <Card>
                    <Card.Header className=''>
                        <p className='text-accent font-bold text-center small-caps text-2xl tracking-widest'>
                            Coming Soon - Skill Calculators
                        </p>
                        <p className='text-accent font-semibold text-center'>
                            Calculate and plan your leagues skilling route using customizable calculators with exp
                            multipliers, relic boosts, and more.
                        </p>
                    </Card.Header>
                </Card>
            </div>
        </PageWrapper>
    );
}
