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
                <TabbedCard.Tab id='chr' label='Character'>
                    <CharacterPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='rlc' label='Relics'>
                    <div>Relics tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tsk' label='Tasks'>
                    <TasksPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='qst' label='Other'>
                    <div className='h-full'>
                        <QuestTable />
                    </div>
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
