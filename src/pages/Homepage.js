import React from 'react';
import newsPosts from '../resources/newsPosts.json';
import NewsCard from '../components/NewsCard';
import PageWrapper from '../components/PageWrapper';
import IconLinkCard from '../components/IconLinkCard';
import LeagueCountdown from '../components/LeagueCountdown';

export default function Homepage() {
    return (
        <PageWrapper>
            <div className='md:flex md:flex-row justify-center'>
                <IconLinkCard title='Discord' href='https://discord.gg/GQ5kVyU' target='_blank' />
                <IconLinkCard title='Plugin' srcOverride='/img/runelite-icon.svg' />
                <LeagueCountdown />
                <IconLinkCard title='Feedback' iconOverride='pest_control' />
                <IconLinkCard title='About' iconOverride='help_outline' href='/about' />
            </div>
            <p className='text-3xl small-caps ml-1 mt-2'>Updates</p>
            {newsPosts.map(newsPost => (
                <NewsCard
                    key={newsPost.title}
                    title={newsPost.title}
                    date={newsPost.date}
                    coverImg={newsPost.thumbnail}
                    leadText={newsPost.leadText}
                    htmlContent={newsPost.htmlContent}
                />
            ))}
        </PageWrapper>
    );
}
