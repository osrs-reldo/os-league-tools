import React from 'react';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import LabeledIcon from './common/LabeledIcon';

function Task({ row, value }) {
    const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);
    return (
        <div {...row.getToggleRowExpandedProps()}>
            <div className='flex flex-row items-center h-full gap-2'>
                <div className='flex flex-row'>
                    <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
                    <span className='icon-2xl text-accent'>check_box_outline_blank</span>
                </div>

                <div className='flex flex-col w-full'>
                    <span className='inline align-middle'>{value.label}</span>
                    <span className='inline align-middle text-xs'>{value.description}</span>
                </div>

                {isXsViewport && (
                    <div className='flex items-center h-full '>
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
                <Requirements value={original.skillReqs} className='ml-3' />
                <span className='text-xs mr-1'>Notes:</span>
                <Notes className='ml-3 my-1' />
                <span className='text-xs mr-1'>Actions:</span>
                <Manage className='m-1 ml-3' />
            </div>
        </div>
    );
}

function Difficulty({ value }) {
    const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);
    const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);

    let label = `${value.label} (${value.value})`;
    label = isMdOrSmallerViewport ? value.value : label;
    label = isXsViewport ? '' : label;
    return (
        <LabeledIcon label={label} icon={value.icon} size='lg' className='flex justify-center h-full items-center' />
    );
}

function Category({ value }) {
    const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);
    return (
        <div className='flex lg:flex-col flex-row flex-wrap items-center justify-center h-full'>
            <LabeledIcon label={isMdOrSmallerViewport ? '' : value.category.label} icon={value.category.icon} />
            <LabeledIcon label={isMdOrSmallerViewport ? '' : value.subcategory.label} icon={value.subcategory.icon} />
        </div>
    );
}

function Requirements({ value, maxLength = 100, className = '' }) {
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

function Notes({ className = '' }) {
    return <span className={`italic text-xs ${className}`}>Click "Notes" below to add custom notes to this task</span>;
}

function Manage({ className = '' }) {
    return (
        <div className={`grid grid-cols-4 gap-1 max-w-[350px] ${className}`}>
            <TaskAction
                labelSelected='Undo completion'
                labelUnselected='Complete'
                isSelected={false}
                iconSelected='undo'
                iconUnselected='done'
                className='col-span-4'
            />
            <TaskAction
                labelSelected='To-do'
                labelUnselected='To-do'
                isSelected={false}
                iconSelected='close'
                iconUnselected='add'
            />
            <TaskAction
                labelSelected='Unignore'
                labelUnselected='Ignore'
                isSelected={false}
                iconSelected='add'
                iconUnselected='close'
            />
            <TaskLink label='Notes' icon='edit' />
            <TaskLink label='Wiki' icon='launch' />
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

function TaskLink({ label, icon, onClick = () => {}, className = '' }) {
    return (
        <button
            type='button'
            className={`button-outline px-1 flex items-center justify-center ${className}`}
            onClick={onClick}
        >
            <span className='icon-sm'>{icon}</span>
            <span className='align-middle text-sm ml-1'>{label}</span>
        </button>
    );
}

export default { Task, ExpandedTask, Difficulty, Category };
