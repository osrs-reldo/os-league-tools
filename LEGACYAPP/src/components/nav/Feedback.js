import React from 'react';
import Dropdown from '../common/Dropdown';

function NavBarItem({ setFeedbackModalOpen }) {
  return (
    <Dropdown.Button
      key='feedback'
      icon='pest_control'
      className='text-left'
      onClick={() => setFeedbackModalOpen(true)}
    >
      Feedback
    </Dropdown.Button>
  );
}

function CollapsedMenu({ setFeedbackModalOpen }) {
  return (
    <button
      key='feedback'
      className='text-primary bg-hover py-1 text-left'
      onClick={() => setFeedbackModalOpen(true)}
      type='button'
    >
      <span className='text-primary-alt icon-lg inline align-middle mr-1'>pest_control</span>
      <p className='h-4 inline pl-1 font-sans-alt'>Feedback</p>
    </button>
  );
}

export default { NavBarItem, CollapsedMenu };
