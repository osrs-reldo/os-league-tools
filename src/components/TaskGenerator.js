import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import { toggleCompleted, updateRandomTask } from '../store/tasks/tasks';
import tasks from '../data/tasks';
import SkillRequirementList from './SkillRequirementList';
import Category from './Category';
import Difficulty from './Difficulty';

export default function TaskGenerator() {
    const [activeTask, setActiveTask] = useState(undefined);

    const { randomTaskId, tasks: reduxTasks } = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const isLgViewport = useBreakpoint(MEDIA_QUERIES.LG, MODE.GREATER);

    useEffect(() => {
        if (randomTaskId) {
            const storedTask = tasks.find(task => task.id === randomTaskId);
            setActiveTask(storedTask);
        }
    }, []);

    const generateTask = () => {
        const completedTaskIDsFromStore = Object.entries(reduxTasks)
            .filter(([, taskObj]) => taskObj.completed)
            .map(([taskId]) => +taskId);

        let randomTask;

        while (!randomTask) {
            const generatedTask = tasks[Math.floor(Math.random() * tasks.length)];
            if (!completedTaskIDsFromStore.includes(generatedTask.id)) randomTask = generatedTask;
        }
        setActiveTask(randomTask);
        dispatch(updateRandomTask(randomTask.id));
    };

    const completeTask = taskId => {
        dispatch(toggleCompleted({ taskId }));
        dispatch(updateRandomTask(null));
        setActiveTask(undefined);
    };

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
        <p className='italic '>No active task, click "Generate task" to get one</p>
    );

    return (
        <div className='flex flex-col gap-2'>
            <span className='heading-accent-md'>Random Task Generator</span>
            <div className='w-full px-3 mb-4'>{renderTask}</div>
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
                    {/* TODO: ADD configs */}
                    {/* {isLgViewport && (
                        <button type='button' className='button-outline w-full'>
                            Configure task generator
                        </button>
                    )} */}
                </div>
                {/* TODO: Add configs */}
                {/* {isLgViewport && (
                    <button type='button' className='button-outline w-full'>
                        Configure task generator
                    </button>
                )} */}
            </div>
        </div>
    );
}
