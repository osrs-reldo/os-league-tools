import React, { useState } from 'react';
// import { ThemedProgressBar } from '../components/ThemeProvider';
// import Separator from '../components/common/Separator';
import TaskFilters from '../components/TaskFilters';
// import TaskGenerator from '../components/TaskGenerator';
import TaskTable from '../components/TaskTable';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';

export default function TasksPanel() {
    const isSmViewport = useBreakpoint(MEDIA_QUERIES.SM, MODE.LESS_OR_EQ);
    const isXlViewport = useBreakpoint(MEDIA_QUERIES.XL);
    const [showSidebar, setShowSidebar] = useState(isXlViewport);

    return (
        <div className='h-full'>
            {/* TODO connect to real values */}
            {/* <div className='flex flex-col gap-3 mb-3'>
                <div className='shadow-subdued'>
                    <ThemedProgressBar
                        curValue={1250}
                        maxValue={30000}
                        steps={[500, 1000, 2000, 4000, 7500, 15000, 30000]}
                    />
                </div>
                <div className='flex flex-row flex-wrap text-accent font-semibold justify-evenly gap-2'>
                    <span>Tasks: 83 / 730</span>
                    <span>Points: 1250 / 77000</span>
                    <span>To-do: 20 tasks (1360 points)</span>
                    <span>Next unlock at 2000 pts (750 remaining)</span>
                </div>
            </div>
            <Separator /> */}
            <div className='flex xl:flex-row flex-col justify-around w-full bg-secondary-alt xl:bg-primary'>
                {isSmViewport && showSidebar && (
                    <div className='mt-3 bg-hover cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
                        <span className='icon-xl align-middle'>keyboard_double_arrow_up</span>
                        <span className='text-sm italic ml-1'>Hide filters</span>
                    </div>
                )}
                {showSidebar && (
                    <div className='basis-[23%] flex flex-col gap-3 pl-2'>
                        <TaskFilters />
                        {/* TODO implement task generator
                        <Separator />
                        <TaskGenerator /> */}
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
                        <TaskTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
