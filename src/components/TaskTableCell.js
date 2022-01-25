import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, toggleIgnored, toggleCompleted, updateNotes, selectTask } from '../store/tasks/tasks';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import { DEFAULT_NOTES_TEXT } from '../data/constants';
import SkillRequirementList from './SkillRequirementList';
import Difficulty from './Difficulty';
import Category from './Category';

function Task({ row, value }) {
    const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);
    const taskId = row.values.id;
    const taskState = useSelector(state => selectTask(state, taskId));
    const dispatch = useDispatch();

    return (
        <div {...row.getToggleRowExpandedProps()}>
            <div className='flex flex-row items-center h-full gap-2'>
                <div className='flex flex-row'>
                    <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
                    <span
                        className='icon-2xl text-accent'
                        onClick={e => {
                            dispatch(toggleCompleted({ taskId }));
                            e.stopPropagation();
                        }}
                    >
                        {taskState.completed ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                </div>

                <div className={`flex flex-col w-full ${taskState.completed ? 'text-accent' : ''}`}>
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

export default { Task, ExpandedTask };
