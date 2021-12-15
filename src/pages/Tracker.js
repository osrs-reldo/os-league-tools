import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';

export default function Tracker() {
    return (
        <PageWrapper>
            <TabbedCard>
                <TabbedCard.Tab id='chr' title='Character'>
                    <CharacterPanel />
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tsk' title='Tasks'>
                    <div>Tasks tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='ach' title='Achievements'>
                    <div>Achievements tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='qst' title='Quests'>
                    <div>Quests tracker page</div>
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
