import React, { useState } from 'react';
import newsPosts from '../data/newsPosts.json';
import NewsCard from '../components/NewsCard';
import PageWrapper from '../components/PageWrapper';
import IconLinkCard from '../components/IconLinkCard';
import LeagueCountdown from '../components/LeagueCountdown';
import FeedbackModal from '../components/FeedbackModal';
import PluginModal from '../components/PluginModal';
import images from '../assets/images';

export default function Homepage() {
    const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [isPluginModalOpen, setPluginModalOpen] = useState(false);

    return (
        <PageWrapper>
            <div className='md:flex md:flex-row justify-center'>
                <IconLinkCard title='Discord' href='https://discord.gg/GQ5kVyU' target='_blank' />
                <IconLinkCard
                    title='Plugin'
                    iconSrc={images['runelite-icon.svg']}
                    onClick={() => setPluginModalOpen(true)}
                />
                <LeagueCountdown />
                <IconLinkCard title='Feedback' iconText='pest_control' onClick={() => setFeedbackModalOpen(true)} />
                <IconLinkCard title='About' iconText='help_outline' href='/about' />
            </div>
            <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
            <PluginModal isOpen={isPluginModalOpen} setIsOpen={val => setPluginModalOpen(val)} />
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
