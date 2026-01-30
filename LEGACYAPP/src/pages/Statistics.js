import { forEach } from 'lodash';
import React, { useMemo } from 'react';
import { Chart } from 'react-charts';
import { useSelector } from 'react-redux';
import Card from '../components/common/Card';
import PageWrapper from '../components/PageWrapper';
import { LEAGUE_END_DATE, LEAGUE_START_DATE } from '../data/constants';
import tasks from '../data/tasks';
import getAccentColorForTheme from '../util/colors';

const DATE_FORMAT = 'en-US';
const DATE_OPTIONS = { month: 'short', day: 'numeric' };

function createLeagueStats(dataByCompletionDate) {
  const nextDate = new Date(LEAGUE_START_DATE.getTime());
  nextDate.setHours(0);
  const taskCounts = [];
  const pointCounts = [];
  while (nextDate <= LEAGUE_END_DATE) {
    taskCounts.push({
      date: new Date(nextDate.getTime()).toLocaleDateString(DATE_FORMAT, DATE_OPTIONS),
      count: dataByCompletionDate[nextDate]?.tasksComplete ?? 0,
      secondaryAxisId: 'daily',
    });
    pointCounts.push({
      date: new Date(nextDate.getTime()).toLocaleDateString(DATE_FORMAT, DATE_OPTIONS),
      count: dataByCompletionDate[nextDate]?.pointsEarned ?? 0,
      secondaryAxisId: 'daily',
    });
    nextDate.setDate(nextDate.getDate() + 1);
  }

  const cumulativeTaskCounts = [];
  const cumulativePointCounts = [];
  let cumulativeTasks = 0;
  let cumulativePoints = 0;
  for (let i = 0; i < taskCounts.length; i++) {
    cumulativeTasks += taskCounts[i].count;
    cumulativePoints += pointCounts[i].count;
    cumulativeTaskCounts.push({
      date: taskCounts[i].date,
      count: cumulativeTasks,
    });
    cumulativePointCounts.push({
      date: taskCounts[i].date,
      count: cumulativePoints,
    });
  }

  return [
    {
      label: 'Tasks completed (daily)',
      data: taskCounts,
      elementType: 'bar',
    },
    {
      label: 'Tasks completed (total)',
      data: cumulativeTaskCounts,
    },
    {
      label: 'Points earned (daily)',
      data: pointCounts,
      elementType: 'bar',
    },
    {
      label: 'Points earned (total)',
      data: cumulativePointCounts,
    },
  ];
}

function createDataByCompletionDate(taskState) {
  const dataByCompletionDate = {};
  forEach(Object.keys(taskState.tasks), taskKey => {
    if (taskState.tasks[taskKey].completed) {
      const completedDate = new Date(0);
      completedDate.setUTCSeconds(taskState.tasks[taskKey].completed / 1000);
      completedDate.setHours(0);
      completedDate.setMinutes(0);
      completedDate.setSeconds(0);
      if (dataByCompletionDate[completedDate]?.tasksComplete) {
        dataByCompletionDate[completedDate].tasksComplete += 1;
      } else if (dataByCompletionDate[completedDate]) {
        dataByCompletionDate[completedDate].tasksComplete = 1;
      } else {
        dataByCompletionDate[completedDate] = {};
        dataByCompletionDate[completedDate].tasksComplete = 1;
      }

      const pointValue = tasks[taskKey]?.difficulty.value;
      if (dataByCompletionDate[completedDate]?.pointsEarned) {
        dataByCompletionDate[completedDate].pointsEarned += pointValue;
      } else if (dataByCompletionDate[completedDate]) {
        dataByCompletionDate[completedDate].pointsEarned = pointValue;
      } else {
        dataByCompletionDate[completedDate] = {};
        dataByCompletionDate[completedDate].pointsEarned = pointValue;
      }
    }
  });
  return dataByCompletionDate;
}

export default function Statistics() {
  const taskState = useSelector(state => state.tasks);
  const theme = useSelector(state => state.settings.theme);
  const leagueStats = useMemo(() => createLeagueStats(createDataByCompletionDate(taskState)), [taskState]);

  const primaryAxis = useMemo(
    () => ({
      getValue: datum => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: datum => datum.count,
        elementType: 'line',
      },
      {
        getValue: datum => datum.count,
        elementType: 'bar',
      },
    ],
    []
  );

  return (
    <PageWrapper>
      <div className='container h-[800px] mx-auto'>
        <Card className='h-full'>
          <Card.Body>
            <div className='grid grid-cols-2 gap-4 h-full'>
              <div className='h-[90%] pb-3'>
                <h1 className='heading-accent-md'>Tasks completed per day</h1>
                <Chart
                  options={{
                    data: [leagueStats[0]],
                    primaryAxis,
                    secondaryAxes: [secondaryAxes[1]],
                    getSeriesStyle: () => ({
                      color: getAccentColorForTheme(theme),
                    }),
                    dark: theme.split('-')[1] === 'dark',
                  }}
                />
              </div>
              <div className='h-[90%] pb-3'>
                <h1 className='heading-accent-md'>Points earned per day</h1>
                <Chart
                  options={{
                    data: [leagueStats[2]],
                    primaryAxis,
                    secondaryAxes: [secondaryAxes[1]],
                    getSeriesStyle: () => ({
                      color: getAccentColorForTheme(theme),
                    }),
                    dark: theme.split('-')[1] === 'dark',
                  }}
                />
              </div>
              <div className='h-[90%] pb-3'>
                <h1 className='heading-accent-md'>Cumulative tasks completed</h1>
                <Chart
                  options={{
                    data: [leagueStats[1]],
                    primaryAxis,
                    secondaryAxes: [secondaryAxes[0]],
                    getSeriesStyle: () => ({
                      color: getAccentColorForTheme(theme),
                    }),
                    dark: theme.split('-')[1] === 'dark',
                  }}
                />
              </div>
              <div className='h-[90%] pb-3'>
                <h1 className='heading-accent-md'>Cumulative points earned</h1>
                <Chart
                  options={{
                    data: [leagueStats[3]],
                    primaryAxis,
                    secondaryAxes: [secondaryAxes[0]],
                    getSeriesStyle: () => ({
                      color: getAccentColorForTheme(theme),
                    }),
                    dark: theme.split('-')[1] === 'dark',
                  }}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </PageWrapper>
  );
}
