import React, { useState, useEffect } from 'react';
import newsPosts from '../resources/newsPosts.json';
// import Banner from './Banner';
import NewsCard from './NewsCard';
import Page from './Page';
import Card from './Card';
import { countdown } from './util';

const LAUNCH_DATE = new Date('2021-11-03T11:30:00+00:00');

export default function Homepage() {
    const [launchCountdown, setLaunchCountdown] = useState(countdown(LAUNCH_DATE));

    useEffect(() => {
        const timer = setTimeout(() => {
            setLaunchCountdown(countdown(LAUNCH_DATE));
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <Page>
            {/* <Page.Banner>
                <Banner></Banner>
            </Page.Banner> */}
            <Page.Body>
                <div className='md:flex md:flex-row justify-center'>
                    <Card
                        styleOptions={{
                            bodyPadding: 'p-2 m-auto',
                            borders: 'rounded border-b-2 border-tl-lime',
                            extraClassNames: 'h-24 w-24 md:inline hidden',
                        }}
                    >
                        <Card.Content className='flex flex-col'>
                            <span className='icon-4xl text-center'>discord</span>
                            <p className='font-sans-alt'>Discord</p>
                        </Card.Content>
                    </Card>
                    <Card
                        styleOptions={{
                            bodyPadding: 'p-2 m-auto',
                            borders: 'rounded border-b-2 border-tl-lime',
                            extraClassNames: 'h-24 w-24 md:inline hidden',
                        }}
                    >
                        <Card.Content className='flex flex-col'>
                            <img className='h-9 mb-1' src='/img/runelite-icon.svg' alt='' />
                            <p className='font-sans-alt'>Plugin</p>
                        </Card.Content>
                    </Card>
                    <Card
                        styleOptions={{
                            bodyPadding: 'm-auto text-center',
                            borders: 'rounded border-b-2 border-tl-lime',
                            extraClassNames: 'h-24 w-96 md:mx-2 mx-auto',
                        }}
                    >
                        <Card.Subheading>SHATTERED RELICS LEAGUE BEGINS IN</Card.Subheading>
                        <Card.Content className='font-bold font-mono text-xl'>{launchCountdown}</Card.Content>
                    </Card>
                    <Card
                        styleOptions={{
                            bodyPadding: 'p-2 m-auto',
                            borders: 'rounded border-b-2 border-tl-lime',
                            extraClassNames: 'h-24 w-24 md:inline hidden',
                        }}
                    >
                        <Card.Content className='flex flex-col'>
                            <span className='icon-4xl text-center'>menu_book</span>
                            <p className='font-sans-alt'>Wiki</p>
                        </Card.Content>
                    </Card>
                    <Card
                        styleOptions={{
                            bodyPadding: 'p-2 m-auto',
                            borders: 'rounded border-b-2 border-tl-lime',
                            extraClassNames: 'h-24 w-24 md:inline hidden',
                        }}
                    >
                        <Card.Content className='flex flex-col'>
                            <span className='icon-4xl text-center'>pest_control</span>
                            <p className='font-sans-alt'>Feedback</p>
                        </Card.Content>
                    </Card>
                </div>
                <p className='text-4xl small-caps ml-1'>Site News</p>
                {newsPosts.map(
                    newsPost =>
                        newsPost.type === 'blog' && (
                            <NewsCard
                                key={newsPost.title}
                                title={newsPost.title}
                                date={newsPost.date}
                                coverImg={newsPost.thumbnail}
                                leadText={newsPost.leadText}
                                htmlContent={newsPost.htmlContent}
                            />
                        )
                )}
            </Page.Body>
        </Page>
    );
}
