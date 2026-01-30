import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import { toggleCompleted, toggleTodo, updateRandomTask } from '../store/tasks/tasks';
import useFilterTasks from '../hooks/useFilterTasks';
import SkillRequirementList from './SkillRequirementList';
import Category from './Category';
import Difficulty from './Difficulty';
import TASKS from '../data/tasks';

export default function TaskGenerator() {
  const [activeTask, setActiveTask] = useState(undefined);
  const [noPossibleTasks, setNoPossibleTasks] = useState(false);
  const isXlViewport = useBreakpoint(MEDIA_QUERIES.XL, MODE.GREATER_OR_EQ);

  const {
    tasks: { tasks: taskState, randomTaskId },
    filters: { tasks: filterState },
  } = useSelector(({ tasks, filters }) => ({ tasks, filters }));
  const regionsState = useSelector(state => state.unlocks.regions);
  const hiscoresState = useSelector(state => state.character.hiscoresCache.data);
  const dispatch = useDispatch();

  const filteredTasks = useFilterTasks({
    filterState: {
      ...filterState,
    },
    taskState,
    hiscoresState,
    regionsState,
  });

  const allTasksCompleted =
    Object.values(taskState).filter(task => task.completed).length === Object.values(TASKS).length;

  useEffect(() => {
    if (randomTaskId) {
      const storedTask = Object.values(TASKS).find(task => task.id === randomTaskId);
      setActiveTask(storedTask);
    }
  }, []);

  const generateTask = () => {
    const completeTasksInState = Object.entries(taskState)
      .filter(([, taskInfo]) => taskInfo.completed)
      .map(([id]) => id);

    const incompleteTasks = filteredTasks.filter(task => !completeTasksInState.includes(task.id));
    const randomTask = incompleteTasks[Math.floor(Math.random() * filteredTasks.length)];

    setActiveTask(randomTask);
    setNoPossibleTasks(!randomTask);
    dispatch(updateRandomTask(randomTask?.id || null));
  };

  const completeTask = taskId => {
    dispatch(toggleCompleted({ taskId, regions: regionsState }));
    dispatch(updateRandomTask(null));
    setActiveTask(undefined);
  };

  const todoTask = taskId => {
    dispatch(toggleTodo({ taskId, regions: regionsState }));
  };

  const renderNoPossibleTask = (
    <p className='italic '>
      {allTasksCompleted
        ? 'You have completed all tasks! 🎉'
        : 'No incomplete tasks in table, please update your filters!'}
    </p>
  );

  const renderTask = activeTask ? (
    <>
      <p>{activeTask.label}</p>
      <p className='text-xs mb-4'>{activeTask.description}</p>
      <Category value={activeTask.category} />
      <div className='flex items-center'>
        <span className='text-xs mr-1'>Difficulty: </span>
        <Difficulty value={activeTask.difficulty} />
      </div>
      <div className='flex items-center'>
        <span className='text-xs mr-1'>Requires: </span>
        <SkillRequirementList value={activeTask.skillReqs} />
      </div>
    </>
  ) : (
    <p className='italic '>
      {allTasksCompleted ? 'You have completed all tasks! 🎉' : 'No active task, click "Generate task" to get one'}
    </p>
  );

  const renderButtons = activeTask ? (
    <>
      <button type='button' className='button-outline w-full' onClick={generateTask}>
        Skip
      </button>
      <button type='button' className='button-outline w-full' onClick={() => todoTask(activeTask.id)}>
        + To-do
      </button>
      <button type='button' className='button-outline w-full' onClick={() => completeTask(activeTask.id)}>
        Complete
      </button>
    </>
  ) : (
    <button type='button' className='button-outline w-full' onClick={generateTask}>
      Generate task
    </button>
  );

  return (
    <div className='flex flex-col gap-2 max-w-[320px]'>
      <span className='heading-accent-md'>Random Task Generator</span>
      <div className='w-full px-3 mb-4'>{noPossibleTasks ? renderNoPossibleTask : renderTask}</div>
      {!allTasksCompleted && (
        <>
          <div className='flex flex-col gap-1 px-3'>
            <div className={`flex gap-1 mt ${isXlViewport ? 'w-full' : 'max-w-[420px]'}`}>{renderButtons}</div>
          </div>
          <p className='italic text-xs px-3'>
            <span className='material-icons-outlined text-xs'>info</span>Tasks are picked from your table, according to
            your current filters
          </p>
        </>
      )}
    </div>
  );
}
