import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';
import useQueryString from '../hooks/useQueryString';
import QuestsPanel from './QuestsPanel';
import images from '../assets/images';
import RelicsPanel from './RelicsPanel';

export default function Tracker() {
  const [selectedTab, onSetSelectedTab] = useQueryString('tab');

  return (
    <PageWrapper>
      <TabbedCard defaultActiveTab={selectedTab} setTabCallback={onSetSelectedTab}>
        <TabbedCard.Tab id='character' label='Character' icon={images['tab-character.png']}>
          <CharacterPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab id='relics' label='Relics' icon={images['tab-relics.png']}>
          <RelicsPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab id='tasks' label='Tasks' icon={images['tab-tasks.png']}>
          <TasksPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab id='quests' label='Quests' icon={images['tab-quests.png']}>
          <QuestsPanel />
        </TabbedCard.Tab>
      </TabbedCard>
    </PageWrapper>
  );
}
