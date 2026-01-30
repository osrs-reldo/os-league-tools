import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import TasksPanel from './TasksPanel';

import Card from '../components/common/Card';
import Banner from '../components/common/Banner';
import { getUserByRsn } from '../client/user-data-client';
import Spinner from '../components/common/Spinner';

export default function ViewCharacter() {
  const { character } = useParams();
  const [taskState, setTaskState] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getUserByRsn(character).then(res => {
      if (res.success) {
        setTaskState(JSON.parse(res.value[`tasks_${character}`].S));
      } else {
        setError('Unable to load tasks for character.');
      }
    });
  }, []);

  return (
    <PageWrapper>
      <Banner className='mb-4 text-center'>
        Viewing tasks for character <span className='heading-accent-md'>{character}</span>
      </Banner>
      <Card>
        <Card.Body>
          {taskState ? (
            <TasksPanel readonly taskState={taskState} />
          ) : (
            <div className='flex flex-col gap-4 items-center justify-center w-full text-center'>
              <Spinner />
              {error && <span className='text-error'>{error}</span>}
            </div>
          )}
        </Card.Body>
      </Card>
    </PageWrapper>
  );
}
