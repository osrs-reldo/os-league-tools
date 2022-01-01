import React, { useState } from 'react';
import ProgressBar from '../components/common/ProgressBar';
import Separator from '../components/common/Separator';
import TaskFilters from '../components/TaskFilters';
import TaskGenerator from '../components/TaskGenerator';
import TaskTable from '../components/task-table/index';

export default function TasksPanel() {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className='h-full'>
            <div className='flex flex-col gap-3 mb-3'>
                <div className='shadow-subdued'>
                    <ProgressBar curValue={1250} maxValue={30000} steps={[500, 1000, 2000, 4000, 7500, 15000, 30000]} />
                </div>
                <div className='flex flex-row flex-wrap text-accent font-semibold justify-evenly gap-2'>
                    <span>Tasks: 83 / 730</span>
                    <span>Points: 1250 / 77000</span>
                    <span>To-do: 20 tasks (1360 points)</span>
                    <span>Next unlock at 2000 pts (750 remaining)</span>
                </div>
            </div>
            <Separator />
            <div className='flex md:flex-row flex-col justify-around w-full'>
                {showSidebar && (
                    <div className='basis-1/5 flex flex-col gap-3'>
                        <TaskFilters />
                        <Separator />
                        <TaskGenerator />
                    </div>
                )}
                <span
                    className='icon-xl mt-3 bg-hover cursor-pointer align-middle'
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'}
                </span>
                <div className='basis-3/4 grow flex flex-col ml-1'>
                    <div className='border-l border-subdued grow mt-3'>
                        <TaskTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
