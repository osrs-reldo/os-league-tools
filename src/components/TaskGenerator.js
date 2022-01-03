import React from 'react';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';

export default function TaskGenerator() {
    const isLgViewport = useBreakpoint(MEDIA_QUERIES.LG, MODE.STRICT);

    return (
        <div className='flex flex-col gap-2'>
            <span className='heading-accent-md'>Random Task Generator</span>
            <div className='w-full italic px-3'>No active task, click "Generate task" to get one</div>
            <div className='flex flex-col gap-1 px-3'>
                <div className='flex w-full gap-1'>
                    <button type='button' className='button-outline w-full'>
                        Generate task
                    </button>
                    <button type='button' className='button-outline w-full'>
                        Complete task
                    </button>
                    {isLgViewport && (
                        <button type='button' className='button-outline w-full'>
                            Configure task generator
                        </button>
                    )}
                </div>
                {!isLgViewport && (
                    <button type='button' className='button-outline w-full'>
                        Configure task generator
                    </button>
                )}
            </div>
        </div>
    );
}
