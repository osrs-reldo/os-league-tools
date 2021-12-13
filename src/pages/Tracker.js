import React from 'react';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';

export default function Tracker() {
    return (
        <PageWrapper>
            <TabbedCard>
                <TabbedCard.Tab id='chr' title='Character'>
                    <div>Character tracker page</div>
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
