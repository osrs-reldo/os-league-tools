import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';
import useQueryString from '../hooks/useQueryString';
import QuestsPanel from './QuestsPanel';

export default function Tracker() {
    const [selectedTab, onSetSelectedTab] = useQueryString('tab');

    return (
        <PageWrapper>
            <TabbedCard defaultActiveTab={selectedTab} setTabCallback={onSetSelectedTab}>
                <TabbedCard.Tab id='character' label='Character' icon='/img/tab-character.png'>
                    <CharacterPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='relics' label='Relics' icon='/img/tab-relics.png'>
                    <p className='text-accent font-bold text-center small-caps text-2xl tracking-widest'>
                        Relics tracker coming soon!
                    </p>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tasks' label='Tasks' icon='/img/tab-tasks.png'>
                    <TasksPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='quests' label='Quests' icon='/img/tab-quests.png'>
                    <QuestsPanel />
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
