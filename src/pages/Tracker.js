import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';
import QuestTable from '../components/QuestTable';

export default function Tracker() {
    return (
        <PageWrapper>
            <TabbedCard defaultActiveTab='tsk'>
                <TabbedCard.Tab id='chr' label='Character' icon='/img/tab-character.png'>
                    <CharacterPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='rlc' label='Relics' icon='/img/tab-relics.png'>
                    <div>Relics tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tsk' label='Tasks' icon='/img/tab-tasks.png'>
                    <TasksPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='qst' label='Quests' icon='/img/tab-quests.png'>
                    <div className='h-full'>
                        <QuestTable />
                    </div>
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
