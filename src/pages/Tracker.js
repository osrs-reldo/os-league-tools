import React from 'react';
import CharacterPanel from './CharacterPanel';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';
import useQueryString from '../hooks/useQueryString';
import QuestsPanel from './QuestsPanel';
import images from '../assets/images';
import RelicsPanel from './RelicsPanel';
import DiariesPanel from './DiariesPanel';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';

export default function Tracker() {
  const [selectedTab, onSetSelectedTab] = useQueryString('tab');
  const isXsOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.LESS_OR_EQ);

  return (
    <PageWrapper>
      <TabbedCard defaultActiveTab={selectedTab} setTabCallback={onSetSelectedTab}>
        <TabbedCard.Tab
          id='character'
          label={isXsOrSmallerViewport ? undefined : 'Character'}
          icon={images['tab-character.png']}
        >
          <CharacterPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab
          id='relics'
          label={isXsOrSmallerViewport ? undefined : 'Relics'}
          icon={images['tab-relics.png']}
        >
          <RelicsPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab id='tasks' label={isXsOrSmallerViewport ? undefined : 'Tasks'} icon={images['tab-tasks.png']}>
          <TasksPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab
          id='quests'
          label={isXsOrSmallerViewport ? undefined : 'Quests'}
          icon={images['tab-quests.png']}
        >
          <QuestsPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab
          id='diaries'
          label={isXsOrSmallerViewport ? undefined : 'Diaries'}
          icon={images['tab-diaries.png']}
        >
          <DiariesPanel />
        </TabbedCard.Tab>
      </TabbedCard>
    </PageWrapper>
  );
}
