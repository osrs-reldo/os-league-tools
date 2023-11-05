import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { toggleTodo, toggleIgnored, toggleCompleted, updateNotes, selectTask, updateOrder } from '../store/tasks/tasks';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import { DEFAULT_NOTES_TEXT } from '../data/constants';
import SkillRequirementList from './SkillRequirementList';
import Difficulty from './Difficulty';
import Category from './Category';
import { regionNames, regionsByName } from '../data/regions';
import { REGION_ANY } from '../data/tasks';

function Task({ row, value, addToHistory }) {
  const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);
  const taskId = row.values.id;
  const taskState = useSelector(state => selectTask(state, taskId));
  const dispatch = useDispatch();

  let textClassname = taskState.completed ? 'text-accent' : '';
  textClassname = taskState.ignored ? 'text-secondary-alt' : textClassname;

  return (
    <div {...row.getToggleRowExpandedProps()}>
      <div className='flex flex-row items-center h-full gap-2'>
        <div className='flex flex-row'>
          <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
          <span
            className='icon-2xl text-accent select-none'
            onClick={e => {
              dispatch(toggleCompleted({ taskId }));
              addToHistory(taskId, 'completed');
              e.stopPropagation();
            }}
          >
            {taskState.completed ? 'check_box' : 'check_box_outline_blank'}
          </span>
        </div>

        <div className={`flex flex-col w-full ${textClassname}`}>
          <span className='inline align-middle'>{value.label}</span>
          <span className='inline align-middle text-xs'>{value.description}</span>
        </div>

        <button
          className={`text-xs whitespace-nowrap mr-3 p-1 bg-hover-subdued ${
            taskState.todo ? 'text-secondary-alt' : ''
          }`}
          type='button'
          onClick={e => {
            dispatch(toggleTodo({ taskId }));
            addToHistory(taskId, 'todo');
            e.stopPropagation();
          }}
        >
          {taskState.todo ? '- to-do' : '+ to-do'}
        </button>

        {isXsViewport && (
          <div className='flex items-center h-full mr-1'>
            <Difficulty value={row.values.difficulty} />
            <Category value={row.values.category} />
          </div>
        )}
      </div>
    </div>
  );
}

function ReadonlyTask({ row, value, taskState }) {
  const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);
  const taskId = row.values.id;

  let textClassname = taskState.tasks[taskId]?.completed ? 'text-accent' : '';
  textClassname = taskState.tasks[taskId]?.ignored ? 'text-secondary-alt' : textClassname;

  return (
    <div {...row.getToggleRowExpandedProps()}>
      <div className='flex flex-row items-center h-full gap-2'>
        <div className='flex flex-row'>
          <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
          <span className='icon-2xl text-accent select-none'>
            {taskState.tasks[taskId]?.completed ? 'check_box' : 'check_box_outline_blank'}
          </span>
        </div>

        <div className={`flex flex-col w-full ${textClassname}`}>
          <span className='inline align-middle'>{value.label}</span>
          <span className='inline align-middle text-xs'>{value.description}</span>
        </div>

        {isXsViewport && (
          <div className='flex items-center h-full mr-1'>
            <Difficulty value={row.values.difficulty} />
            <Category value={row.values.category} />
          </div>
        )}
      </div>
    </div>
  );
}

function ExpandedTask({ original }) {
  return (
    <div className='flex flex-row items-center h-full gap-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
      {/* hack: invisible dummy icons to align the expanded text with the previous row */}
      <div className='flex flex-row invisible'>
        <span className='icon-2xl text-accent'>x</span>
        <span className='icon-2xl text-accent'>x</span>
      </div>
      <div className='w-full flex flex-col gap-0.5'>
        <span className='text-xs mr-1'>Requires:</span>
        <SkillRequirementList value={original.skillReqs} className='ml-3' />
        <span className='text-xs mr-1'>Notes:</span>
        <Notes className='ml-3 my-1' taskId={original.id} />
        <span className='text-xs mr-1'>Actions:</span>
        <Manage className='m-1 ml-3' taskId={original.id} />
      </div>
    </div>
  );
}

function ReadonlyExpandedTask({ original }) {
  return (
    <div className='flex flex-row items-center h-full gap-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
      {/* hack: invisible dummy icons to align the expanded text with the previous row */}
      <div className='flex flex-row invisible'>
        <span className='icon-2xl text-accent'>x</span>
        <span className='icon-2xl text-accent'>x</span>
      </div>
      <div className='w-full flex flex-col gap-0.5 mb-2'>
        <span className='text-xs mr-1'>Requires:</span>
        <SkillRequirementList value={original.skillReqs} className='ml-3' />
      </div>
    </div>
  );
}

function Notes({ taskId, className = '' }) {
  const taskState = useSelector(state => selectTask(state, taskId));
  const [isEditMode, setEditMode] = useState(false);
  const [notes, setNotes] = useState(taskState.notes);
  const dispatch = useDispatch();

  if (isEditMode) {
    return (
      <div className='max-w-[350px]'>
        <textarea
          className={`text-xs input-primary form-input ${className}`}
          value={notes || ''}
          onChange={e => {
            setNotes(e.target.value);
          }}
        />
        <button
          className={`text-xs italic hover:underline ${className}`}
          onClick={() => {
            dispatch(updateNotes({ taskId, notes }));
            setEditMode(false);
          }}
          type='button'
        >
          <span className='icon-xs'>save</span> save changes
        </button>
      </div>
    );
  }
  return (
    <div className='max-w-[350px]'>
      <span className={`text-xs ${className}`}>{taskState.notes || DEFAULT_NOTES_TEXT}</span>
      <button
        className={`text-xs italic hover:underline ${className}`}
        onClick={() => {
          setEditMode(true);
        }}
        type='button'
      >
        <span className='icon-xs'>edit</span> edit notes
      </button>
    </div>
  );
}

function Manage({ taskId, className = '' }) {
  const taskState = useSelector(state => selectTask(state, taskId));
  const dispatch = useDispatch();

  return (
    // TODO set back to grid-cols-3 after enabling wiki button again
    <div className={`grid grid-cols-2 gap-1 max-w-[350px] ${className}`}>
      <TaskAction
        labelSelected='Undo completion'
        labelUnselected='Complete'
        isSelected={!!taskState.completed}
        onClick={() => dispatch(toggleCompleted({ taskId }))}
        iconSelected='undo'
        iconUnselected='done'
        className='col-span-2' // TODO set back to 3 after enabling wiki button again
      />
      <TaskAction
        labelSelected='To-do'
        labelUnselected='To-do'
        isSelected={!!taskState.todo}
        onClick={() => dispatch(toggleTodo({ taskId }))}
        iconSelected='close'
        iconUnselected='add'
      />
      <TaskAction
        labelSelected='Unignore'
        labelUnselected='Ignore'
        isSelected={!!taskState.ignored}
        onClick={() => dispatch(toggleIgnored({ taskId }))}
        iconSelected='add'
        iconUnselected='close'
      />
      {/* TODO re-enable after adding link data <TaskLink label='Wiki' icon='launch' /> */}
    </div>
  );
}

function TaskAction({
  isSelected,
  labelSelected,
  labelUnselected,
  iconSelected,
  iconUnselected,
  onClick = () => {},
  className = '',
}) {
  return (
    <button
      type='button'
      className={`button-outline px-1 flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <span className='icon-sm'>{isSelected ? iconSelected : iconUnselected}</span>
      <span className='align-middle text-sm ml-1'>{isSelected ? labelSelected : labelUnselected}</span>
    </button>
  );
}

// TODO re-enable after adding wiki buttons back
// function TaskLink({ label, icon, onClick = () => {}, className = '' }) {
//     return (
//         <button
//             type='button'
//             className={`button-outline px-1 flex items-center justify-center ${className}`}
//             onClick={onClick}
//         >
//             <span className='icon-sm'>{icon}</span>
//             <span className='align-middle text-sm ml-1'>{label}</span>
//         </button>
//     );
// }

function TaskCompletedAt({ row }) {
  const taskId = row.values.id;
  const taskState = useSelector(state => selectTask(state, taskId));

  if (taskState.completed > 0) {
    const completedDate = new Date(0);
    completedDate.setUTCSeconds(taskState.completed / 1000);
    return <div className='flex items-center justify-center py-2 h-full'>{completedDate.toLocaleDateString()}</div>;
  }
  return null;
}

function Priority({ row }) {
  const taskId = row.values.id;
  const taskState = useSelector(state => selectTask(state, taskId));
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-center'>
      <span
        className={`icon-lg cursor-pointer ${taskState.order === 'high' ? 'text-accent' : ''}`}
        onClick={() => dispatch(updateOrder({ taskId, order: 'high' }))}
      >
        arrow_upward
      </span>
      <span
        className={`icon-lg cursor-pointer ${!taskState.order ? 'text-accent' : ''}`}
        onClick={() => dispatch(updateOrder({ taskId, order: null }))}
      >
        horizontal_rule
      </span>
      <span
        className={`icon-lg cursor-pointer ${taskState.order === 'low' ? 'text-accent' : ''}`}
        onClick={() => dispatch(updateOrder({ taskId, order: 'low' }))}
      >
        arrow_downward
      </span>
    </div>
  );
}

function Regions({ value }) {
  const regionsToDisplay = value[0] === REGION_ANY ? regionNames : value;
  return (
    <div className='flex flex-row flex-wrap py-2 w-full h-full gap-1 justify-center items-center'>
      {regionsToDisplay.map(region => {
        const { icon } = regionsByName[region] || {};
        return (
          <div key={region}>
            <img width={16} src={icon} alt={region} data-tip data-for={region} />
            <ReactTooltip id={region}>{region}</ReactTooltip>
          </div>
        );
      })}
    </div>
  );
}

export default { Task, ExpandedTask, ReadonlyExpandedTask, TaskCompletedAt, ReadonlyTask, Priority, Regions };
