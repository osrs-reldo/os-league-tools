import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';
import QuestTable from '../components/QuestTable';
import useQueryString from '../hooks/useQueryString';

export default function Tracker() {
    const [selectedTab, onSetSelectedTab] = useQueryString('tab');

    return (
        <PageWrapper>
            <TabbedCard defaultActiveTab={selectedTab} setTabCallback={onSetSelectedTab}>
                <TabbedCard.Tab id='character' label='Character' icon='/img/tab-character.png'>
                    <CharacterPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='relics' label='Relics' icon='/img/tab-relics.png'>
                    <div>Relics tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tasks' label='Tasks' icon='/img/tab-tasks.png'>
                    <TasksPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='quests' label='Quests' icon='/img/tab-quests.png'>
                    <div className='h-full'>
                        <QuestTable />
                    </div>
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
