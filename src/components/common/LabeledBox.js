import React from 'react';

export default function LabeledBox({ headerText, children }) {
    return (
        <div className='h-full'>
            <div className='rotate-180 absolute origin-center translate-x-4 z-10 pb-1'>
                <div className='rotate-90 origin-bottom-right text-sm tracking-widest'>{headerText}</div>
            </div>
            <div className='border border-l-[1rem] border-subdued p-1 relative inline-block h-full'>{children}</div>
        </div>
    );
}
