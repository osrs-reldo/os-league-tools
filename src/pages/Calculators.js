import React from 'react';
import images from '../assets/images';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import useQueryString from '../hooks/useQueryString';
import BankedExpPanel from './BankedExpPanel';
import CalculatorsPanel from './CalculatorsPanel';

export default function Calculators() {
  const [selectedTab, onSetSelectedTab] = useQueryString('tab');

  return (
    <PageWrapper>
      <TabbedCard defaultActiveTab={selectedTab} setTabCallback={onSetSelectedTab}>
        <TabbedCard.Tab id='character' label='Skill calculators' icon={images['tab-stats.png']}>
          <CalculatorsPanel />
        </TabbedCard.Tab>
        <TabbedCard.Tab id='bankedExp' label='Banked exp' icon={images['tab-inventory.png']}>
          <BankedExpPanel />
        </TabbedCard.Tab>
      </TabbedCard>
    </PageWrapper>
  );
}
