import React from 'react';
import Card from '../components/common/Card';
import PageWrapper from '../components/PageWrapper';
import BankedExpPanel from './BankedExpPanel';

export default function BankedExp() {
  return (
    <PageWrapper>
      <Card>
        <Card.Body>
          <BankedExpPanel />
        </Card.Body>
      </Card>
    </PageWrapper>
  );
}
