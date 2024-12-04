import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemedProgressBar } from '../components/ThemeProvider';
import Separator from '../components/common/Separator';
import TaskFilters from '../components/TaskFilters';
import TaskGenerator from '../components/TaskGenerator';
import TaskTable from '../components/TaskTable';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import { RELIC_UNLOCK_THRESHOLDS } from '../data/relics';
import useTrackerHistory from '../hooks/useTrackerHistory';
import { getRegionTier } from '../util/getTier';
import { REGION_UNLOCK_THRESHOLDS } from '../data/regions';

export default function TasksPanel({ readonly, taskState }) {
  const isSmViewport = useBreakpoint(MEDIA_QUERIES.SM, MODE.LESS_OR_EQ);
  const isXlViewport = useBreakpoint(MEDIA_QUERIES.XL);
  const [showSidebar, setShowSidebar] = useState(isXlViewport);
  const { taskStats, tier } = useSelector(state => state.tasks);
  const regionTier = getRegionTier(taskStats.tasks.complete.total);
  const history = useTrackerHistory();

  return (
    <div className='h-full'>
      <div className='mb-3'>
        <div className='flex flex-wrap text-accent font-semibold justify-evenly gap-2'>
          <span>
            Tasks: {taskStats.tasks.complete.total} / {taskStats.tasks.available.total}
          </span>
          <span>
            Points: {taskStats.points.complete.total} / {taskStats.points.available.total}
          </span>
          <span>
            To-do: {taskStats.tasks.todo.total} tasks ({taskStats.points.todo.total} points)
          </span>
        </div>
        <div className='flex flex-row w-full gap-5 mt-3'>
          <div className='basis-1/2'>
            <div className='mb-1'>
              <ThemedProgressBar
                curValue={taskStats.points.complete.total}
                maxValue={RELIC_UNLOCK_THRESHOLDS[RELIC_UNLOCK_THRESHOLDS.length - 1]}
                steps={RELIC_UNLOCK_THRESHOLDS}
              />
            </div>
            <div className='text-accent text-sm text-center'>
              {tier < RELIC_UNLOCK_THRESHOLDS.length ? (
                <span>{`Next relic unlocked at ${RELIC_UNLOCK_THRESHOLDS[tier]} pts (${
                  RELIC_UNLOCK_THRESHOLDS[tier] - taskStats.points.complete.total
                } remaining)`}</span>
              ) : (
                'All relics unlocked'
              )}
            </div>
          </div>
          <div className='basis-1/2'>
            <div className='shadow-subdued mb-1'>
              <ThemedProgressBar
                curValue={taskStats.tasks.complete.total}
                maxValue={REGION_UNLOCK_THRESHOLDS[REGION_UNLOCK_THRESHOLDS.length - 1]}
                steps={REGION_UNLOCK_THRESHOLDS}
              />
            </div>
            <div className='text-accent text-sm text-center'>
              {regionTier <= REGION_UNLOCK_THRESHOLDS.length + 1 ? (
                <span>{`Next region unlocked at ${REGION_UNLOCK_THRESHOLDS[regionTier + 1]} tasks (${
                  REGION_UNLOCK_THRESHOLDS[regionTier + 1] - taskStats.tasks.complete.total
                } remaining)`}</span>
              ) : (
                'All regions unlocked'
              )}
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className='flex xl:flex-row flex-col justify-around w-full bg-secondary-alt xl:bg-primary'>
        {isSmViewport && showSidebar && (
          <div className='mt-3 bg-hover cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
            <span className='icon-xl align-middle'>keyboard_double_arrow_up</span>
            <span className='text-sm italic ml-1'>Hide filters</span>
          </div>
        )}
        {showSidebar && (
          <div className='basis-[23%] flex flex-col gap-3 pl-2'>
            <TaskFilters history={history} />
            <Separator />
            {!readonly && <TaskGenerator />}
          </div>
        )}
        <div className='mt-3 mb-3 bg-hover cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
          {isXlViewport ? (
            <span className='icon-xl align-middle'>
              {showSidebar ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'}
            </span>
          ) : (
            <>
              <span className='icon-xl align-middle'>
                {showSidebar ? 'keyboard_double_arrow_up' : 'keyboard_double_arrow_down'}
              </span>
              <span className='text-sm italic ml-1'>{showSidebar ? 'Hide filters' : 'Show filters'}</span>
            </>
          )}
        </div>
        <div className='basis-3/4 grow flex flex-col xl:ml-1 bg-primary'>
          <div className='border-t xl:border-l xl:border-t-0 pt-2 xl:pt-[0] border-subdued grow xl:mt-3'>
            <TaskTable history={history} readonly={readonly} taskState={taskState} />
          </div>
        </div>
      </div>
    </div>
  );
}
