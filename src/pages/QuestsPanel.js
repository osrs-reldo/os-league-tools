import React, { useState } from 'react';
import QuestFilters from '../components/QuestFilters';
import QuestTable from '../components/QuestTable';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';

export default function QuestsPanel() {
    const isSmViewport = useBreakpoint(MEDIA_QUERIES.SM, MODE.LESS_OR_EQ);
    const isXlViewport = useBreakpoint(MEDIA_QUERIES.XL);
    const [showSidebar, setShowSidebar] = useState(isXlViewport);

    return (
        <div className='flex flex-col xl:flex-row w-full bg-secondary-alt xl:bg-primary'>
            {isSmViewport && showSidebar && (
                <div className='mt-3 bg-hover cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
                    <span className='icon-xl align-middle'>keyboard_double_arrow_up</span>
                    <span className='text-sm italic ml-1'>Hide filters</span>
                </div>
            )}
            {showSidebar && (
                <div className='basis-[23%] p-2'>
                    <QuestFilters />
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
                <QuestTable />
            </div>
        </div>
    );
}
