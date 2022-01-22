import React from 'react';
import { toggleTodo, toggleIgnored, toggleCompleted, updateNotes } from '../store/tasks/tasks';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import LabeledIcon from './common/LabeledIcon';
import { DEFAULT_NOTES_TEXT } from '../data/constants';
import { clearTempField, setTempField } from '../store/temp';

function Task({ row, value, taskState, dispatchFn }) {
    const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);

    return (
        <div {...row.getToggleRowExpandedProps()}>
            <div className='flex flex-row items-center h-full gap-2'>
                <div className='flex flex-row'>
                    <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
                    <span
                        className='icon-2xl text-accent'
                        onClick={e => {
                            dispatchFn(toggleCompleted({ taskId: row.values.id }));
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
                        dispatchFn(toggleTodo({ taskId: row.id }));
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

function ExpandedTask({ original, notesState, taskState, dispatchFn }) {
    return (
        <div className='flex flex-row items-center h-full gap-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
            {/* hack: invisible dummy icons to align the expanded text with the previous row */}
            <div className='flex flex-row invisible'>
                <span className='icon-2xl text-accent'>x</span>
                <span className='icon-2xl text-accent'>x</span>
            </div>
            <div className='w-full flex flex-col gap-0.5'>
                <span className='text-xs mr-1'>Requires:</span>
                <Requirements value={original.skillReqs} className='ml-3' />
                <span className='text-xs mr-1'>Notes:</span>
                <Notes
                    className='ml-3 my-1'
                    taskId={original.id}
                    notesState={notesState}
                    dispatchFn={dispatchFn}
                    taskState={taskState}
                />
                <span className='text-xs mr-1'>Actions:</span>
                <Manage
                    className='m-1 ml-3'
                    taskId={original.id}
                    notesState={notesState}
                    dispatchFn={dispatchFn}
                    taskState={taskState}
                />
            </div>
        </div>
    );
}

export function Difficulty({ value }) {
    const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);
    const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);

    let label = `${value.label} (${value.value})`;
    label = isMdOrSmallerViewport ? value.value : label;
    label = isXsViewport ? '' : label;
    return (
        <LabeledIcon label={label} icon={value.icon} size='lg' className='flex justify-center h-full items-center' />
    );
}

export function Category({ value }) {
    const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);

    if (!value || !value.category) {
        return null;
    }

    return (
        <div className='flex lg:flex-col flex-row flex-wrap items-center justify-center h-full'>
            <LabeledIcon label={isMdOrSmallerViewport ? '' : value.category.label} icon={value.category.icon} />
            <LabeledIcon label={isMdOrSmallerViewport ? '' : value.subcategory.label} icon={value.subcategory.icon} />
        </div>
    );
}

export function Requirements({ value, maxLength = 100, className = '' }) {
    if (value.length === 0) {
        return <span className={`italic text-xs ${className}`}>none</span>;
    }
    return (
        <div className={`flex flex-wrap items-center content-center gap-x-1 ${className}`}>
            {value.slice(0, maxLength).map(({ skill, level }) => (
                <LabeledIcon key={`${skill}${level}`} label={level} icon={`/img/task-${skill.toLowerCase()}.png`} />
            ))}
            {value.length > maxLength && <LabeledIcon label='...' />}
        </div>
    );
}

function Notes({ taskId, taskState, notesState, dispatchFn, className = '' }) {
    if (notesState.isEditNotesMode) {
        return (
            <div className='max-w-[350px]'>
                <textarea
                    className={`text-xs input-primary form-input ${className}`}
                    value={notesState.notesTempVal || ''}
                    onChange={e => {
                        dispatchFn(setTempField({ field: `tempNotes${taskId}`, value: e.target.value }));
                    }}
                />
                <button
                    className={`text-xs italic hover:underline ${className}`}
                    onClick={() => {
                        dispatchFn(updateNotes({ taskId, notes: notesState.notesTempVal }));
                        dispatchFn(clearTempField({ field: `editNotes${taskId}` }));
                        dispatchFn(clearTempField({ field: `tempNotes${taskId}` }));
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
                    dispatchFn(setTempField({ field: `editNotes${taskId}`, value: true }));
                }}
                type='button'
            >
                <span className='icon-xs'>edit</span> edit notes
            </button>
        </div>
    );
}

function Manage({ taskId, taskState, dispatchFn, className = '' }) {
    return (
        // TODO set back to grid-cols-3 after enabling wiki button again
        <div className={`grid grid-cols-2 gap-1 max-w-[350px] ${className}`}>
            <TaskAction
                labelSelected='Undo completion'
                labelUnselected='Complete'
                isSelected={!!taskState.completed}
                onClick={() => dispatchFn(toggleCompleted({ taskId }))}
                iconSelected='undo'
                iconUnselected='done'
                className='col-span-2' // TODO set back to 3 after enabling wiki button again
            />
            <TaskAction
                labelSelected='To-do'
                labelUnselected='To-do'
                isSelected={!!taskState.todo}
                onClick={() => dispatchFn(toggleTodo({ taskId }))}
                iconSelected='close'
                iconUnselected='add'
            />
            <TaskAction
                labelSelected='Unignore'
                labelUnselected='Ignore'
                isSelected={!!taskState.ignored}
                onClick={() => dispatchFn(toggleIgnored({ taskId }))}
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

export default { Task, ExpandedTask, Difficulty, Category };
