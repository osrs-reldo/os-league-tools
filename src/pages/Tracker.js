import React from 'react';
import Card from '../components/common/Card';
import PageWrapper from '../components/PageWrapper';

export default function Tracker() {
    return (
        <PageWrapper>
            <div className='flex flex-row flex-nowrap gap-x-1 justify-around w-full'>
                <Card corners='t-md' shadow='top' extraClassNames='h-full grow'>
                    <Card.Body>
                        <span className='heading-block-md text-accent small-caps'>Character</span>
                    </Card.Body>
                </Card>
                <Card corners='t-md' shadow='top-under' extraClassNames='h-full grow bg-hover cursor-pointer'>
                    <Card.Body>
                        <span className='heading-block-md small-caps'>Tasks</span>
                    </Card.Body>
                </Card>
                <Card corners='t-md' shadow='top-under' extraClassNames='h-full grow bg-hover cursor-pointer'>
                    <Card.Body>
                        <span className='heading-block-md small-caps'>Achievements</span>
                    </Card.Body>
                </Card>
                <Card corners='t-md' shadow='top-under' extraClassNames='h-full grow bg-hover cursor-pointer'>
                    <Card.Body>
                        <span className='heading-block-md small-caps'>Quests</span>
                    </Card.Body>
                </Card>
            </div>
            <Card corners='none' extraClassNames='h-full grow'>
                <Card.Body>hello</Card.Body>
            </Card>
        </PageWrapper>
    );
}
