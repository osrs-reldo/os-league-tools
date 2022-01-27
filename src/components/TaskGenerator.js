import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import { toggleCompleted, updateRandomTask } from '../store/tasks/tasks';
import useFilterTasks from '../hooks/useFilterTasks';
import SkillRequirementList from './SkillRequirementList';
import Category from './Category';
import Difficulty from './Difficulty';
import TASKS from '../data/tasks';

export default function TaskGenerator() {
    const [activeTask, setActiveTask] = useState(undefined);
    const [noPossibleTasks, setNoPossibleTasks] = useState(false);
    const isLgViewport = useBreakpoint(MEDIA_QUERIES.LG, MODE.GREATER);

    const {
        tasks: { tasks: tasksState, randomTaskId },
        filters: { tasks: filterState },
    } = useSelector(({ tasks, filters }) => ({ tasks, filters }));
    const dispatch = useDispatch();

    const filteredTasks = useFilterTasks({
        filterState: {
            ...filterState,
        },
        tasksState,
    });

    const allTasksCompleted =
        Object.values(tasksState).filter(task => task.completed).length === Object.values(TASKS).length;

    useEffect(() => {
        if (randomTaskId) {
            const storedTask = Object.values(TASKS).find(task => task.id === randomTaskId);
            setActiveTask(storedTask);
        }
    }, []);

    const generateTask = () => {
        const completeTasksInState = Object.entries(tasksState)
            .filter(([, taskInfo]) => taskInfo.completed)
            .map(([id]) => id);

        const incompleteTasks = filteredTasks.filter(task => !completeTasksInState.includes(task.id));
        const randomTask = incompleteTasks[Math.floor(Math.random() * filteredTasks.length)];

        setActiveTask(randomTask);
        if (randomTask) setNoPossibleTasks(false);
        else setNoPossibleTasks(true);

        dispatch(updateRandomTask(randomTask?.id || null));
    };

    const completeTask = taskId => {
        dispatch(toggleCompleted({ taskId }));
        dispatch(updateRandomTask(null));
        setActiveTask(undefined);
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
            {allTasksCompleted
                ? 'You have completed all tasks! 🎉'
                : 'No active task, click "Generate task" to get one'}
        </p>
    );

    return (
        <div className='flex flex-col gap-2'>
            <span className='heading-accent-md'>Random Task Generator</span>
            <div className='w-full px-3 mb-4'>{noPossibleTasks ? renderNoPossibleTask : renderTask}</div>
            {!allTasksCompleted && (
                <>
                    <div className='flex flex-col gap-1 px-3'>
                        <div className={`flex gap-1 mt ${isLgViewport ? 'w-full' : 'max-w-[420px]'}`}>
                            <button type='button' className='button-outline w-full' onClick={generateTask}>
                                {activeTask ? 'Skip task' : 'Generate task'}
                            </button>
                            {activeTask && (
                                <button
                                    type='button'
                                    className='button-outline w-full'
                                    onClick={() => completeTask(activeTask.id)}
                                >
                                    Complete task
                                </button>
                            )}
                        </div>
                    </div>
                    <p className='italic text-xs px-3'>
                        <span className='material-icons-outlined text-xs'>info</span>Tasks are picked from your table,
                        according to your current filters
                    </p>
                </>
            )}
        </div>
    );
}
