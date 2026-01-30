import React, { useRef, useState } from 'react';
import useClickListener from '../../hooks/useClickListener';
import Dropdown from '../common/Dropdown';

function NavBarItem({ setManageDataModalType }) {
  const [isExpanded, setExpanded] = useState(false);
  const menuRef = useRef(null);
  useClickListener(menuRef, () => setExpanded(false), true);

  return (
    <div className='relative'>
      <button
        className='text-primary md:inline hidden navbar-link-alt bg-hover py-1 px-2'
        type='button'
        onClick={() => setExpanded(true)}
      >
        Manage Data
      </button>
      <div className='mt-1 absolute text-center'>
        <Dropdown show={isExpanded} innerRef={menuRef}>
          <Dropdown.Separator />
          <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('import')}>
            <span className='icon-base mr-1 align-bottom'>file_download</span> Import
          </Dropdown.Button>
          <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('export')}>
            <span className='icon-base mr-1 align-bottom'>file_upload</span> Export
          </Dropdown.Button>
          {/* <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('share')}>
            <span className='icon-base mr-1 align-bottom'>share</span> Share
          </Dropdown.Button> */}
          <Dropdown.Separator />
          <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('reset')}>
            <span className='icon-outline text-base mr-1 align-bottom'>dangerous</span> Reset
          </Dropdown.Button>
        </Dropdown>
      </div>
    </div>
  );
}

function CollapsedMenu({ setManageDataModalType }) {
  return (
    <React.Fragment key='dataManagement'>
      <button
        key='import'
        className='text-primary bg-hover py-1 text-left'
        onClick={() => setManageDataModalType('import')}
        type='button'
      >
        <span className='text-primary-alt icon-lg inline align-middle mr-1'>file_download</span>
        <p className='h-4 inline pl-1 font-sans-alt'>Import / Sync</p>
      </button>
      <button
        key='export'
        className='text-primary bg-hover py-1 text-left'
        onClick={() => setManageDataModalType('export')}
        type='button'
      >
        <span className='text-primary-alt icon-lg inline align-middle mr-1'>file_upload</span>
        <p className='h-4 inline pl-1 font-sans-alt'>Export data</p>
      </button>
      {/* <button
        key='share'
        className='text-primary bg-hover py-1 text-left'
        onClick={() => setManageDataModalType('share')}
        type='button'
      >
        <span className='text-primary-alt icon-lg inline align-middle mr-1'>share</span>
        <p className='h-4 inline pl-1 font-sans-alt'>Share tasks</p>
      </button> */}
      <button
        key='reset'
        className='text-primary bg-hover py-1 text-left'
        onClick={() => setManageDataModalType('reset')}
        type='button'
      >
        <span className='text-primary-alt icon-lg inline align-middle mr-1'>dangerous</span>
        <p className='h-4 inline pl-1 font-sans-alt'>Reset all data</p>
      </button>
    </React.Fragment>
  );
}

export default { NavBarItem, CollapsedMenu };
