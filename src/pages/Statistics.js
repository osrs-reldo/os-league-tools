import React from 'react';
import Card from '../components/common/Card';
import PageWrapper from '../components/PageWrapper';

export default function Statistics() {
    return (
        <PageWrapper>
            <div className='container lg:max-w-[768px] mx-auto'>
                <Card>
                    <Card.Header className=''>
                        <p className='text-accent font-bold text-center small-caps text-2xl tracking-widest'>
                            Coming Soon - Statistics Tracker
                        </p>
                        <p className='text-accent font-semibold text-center'>
                            View statistics about your account's progress over the course of the league: daily point
                            gain, average tasks completed per day, and more!
                        </p>
                    </Card.Header>
                </Card>
            </div>
        </PageWrapper>
    );
}
