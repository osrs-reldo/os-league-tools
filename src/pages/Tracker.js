import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';

export default function Tracker() {
    return (
        <PageWrapper>
            <TabbedCard defaultActiveTab='tsk'>
                <TabbedCard.Tab id='chr' text='Character'>
                    <CharacterPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='rlc' text='Relics'>
                    <div>Relics tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tsk' text='Tasks'>
                    <TasksPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='qst' text='Other'>
                    <div>Quests, diaries, etc tracker page</div>
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
