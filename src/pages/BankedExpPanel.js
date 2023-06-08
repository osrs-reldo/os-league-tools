import React, { useState } from 'react';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import BankedExpSettings from '../components/BankedExpSettings';
import BankedExpTable from '../components/BankedExpTable';

export default function BankedExpPanel() {
  const isSmViewport = useBreakpoint(MEDIA_QUERIES.SM, MODE.LESS_OR_EQ);
  const isXlViewport = useBreakpoint(MEDIA_QUERIES.XL);
  const [showSidebar, setShowSidebar] = useState(isXlViewport);
  const [expGained, setExpGained] = useState(0);

  return (
    <section className='flex flex-col xl:flex-row w-full bg-secondary-alt xl:bg-primary'>
      {isSmViewport && showSidebar && (
        <div className='mt-3 bg-hover cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
          <span className='icon-xl align-middle'>keyboard_double_arrow_up</span>
          <span className='text-sm italic ml-1'>Hide settings</span>
        </div>
      )}
      {showSidebar && (
        <div className='basis-[23%] p-2'>
          <BankedExpSettings expGained={expGained} />
        </div>
      )}
      <div className='mt-3 mb-3 bg-hover cursor-pointer' onClick={() => setShowSidebar(!showSidebar)}>
        {isXlViewport ? (
          <span className='icon-xl align-middle'>
            {showSidebar ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'}
          </span>
        ) : (
          <p className='text-sm italic ml-1'>
            <span className='icon-xl align-middle'>
              {showSidebar ? 'keyboard_double_arrow_up' : 'keyboard_double_arrow_down'}
            </span>
            {showSidebar ? 'Hide settings' : 'Show settings'}
          </p>
        )}
      </div>
      <BankedExpTable setExpGained={setExpGained} />
    </section>
  );
}
