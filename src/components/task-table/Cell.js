import React from 'react';

function Task({ row, value }) {
    return (
        <div>
            <div className='flex flex-row items-center h-full gap-2'>
                <div className='flex flex-row'>
                    <span className='icon-2xl text-accent' {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}
                    </span>
                    <span className='icon-2xl text-accent'>check_box_outline_blank</span>
                </div>

                <div className='flex flex-col w-full'>
                    <span className='inline align-middle'>{value.label}</span>
                    <span className='inline align-middle text-xs'>{value.description}</span>
                </div>
            </div>
        </div>
    );
}

function ExpandedTask(row) {
    return (
        <div className='flex flex-row items-center h-full gap-2 max-w-[50%]'>
            {/* hack: invisible dummy icons to align the expanded text with the previous row */}
            <div className='flex flex-row invisible'>
                <span className='icon-2xl text-accent'>x</span>
                <span className='icon-2xl text-accent'>x</span>
            </div>
            <div className='w-full flex flex-col gap-0.5'>
                <span className='text-xs mr-1'>Requires:</span>
                <Requirements value={row.original.skillReqs} className='ml-3' />
                <span className='text-xs mr-1'>Notes:</span>
                <Notes className='ml-3 my-1' />
                <span className='text-xs mr-1'>Actions:</span>
                <Manage className='m-1 ml-3' />
            </div>
        </div>
    );
}

function Difficulty({ value }) {
    return (
        <TaskTag
            label={`${value.label} (${value.value})`}
            icon={value.icon}
            size='lg'
            className='flex justify-center h-full items-center'
        />
    );
}

function Category({ value }) {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center h-full'>
            <TaskTag label={value.category.label} icon={value.category.icon} />
            <TaskTag label={value.subcategory.label} icon={value.subcategory.icon} />
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
                <TaskTag key={`${skill}${level}`} label={level} icon={`/img/task-${skill.toLowerCase()}.png`} />
            ))}
            {value.length > maxLength && <TaskTag label='...' />}
        </div>
    );
}

function Notes({ className = '' }) {
    return <span className={`italic text-xs ${className}`}>Click "Notes" below to add custom notes to this task</span>;
}

function Manage({ className = '' }) {
    return (
        <div className={`flex gap-1 ${className}`}>
            <button type='button' className='button-outline px-1' onClick={() => {}}>
                <TaskAction
                    labelSelected='To-do'
                    labelUnselected='To-do'
                    isSelected={false}
                    iconSelected='close'
                    iconUnselected='add'
                />
            </button>
            <button type='button' className='button-outline px-1' onClick={() => {}}>
                <TaskAction
                    labelSelected='Unignore'
                    labelUnselected='Ignore'
                    isSelected={false}
                    iconSelected='add'
                    iconUnselected='close'
                />
            </button>
            <button type='button' className='button-outline px-1' onClick={() => {}}>
                <TaskLink label='Notes' icon='edit' />
            </button>
            <button type='button' className='button-outline px-1' onClick={() => {}}>
                <TaskLink label='Wiki' icon='launch' />
            </button>
        </div>
    );
}

function TaskTag({ label, icon, size = 'md', className = '' }) {
    return (
        <div className={className}>
            {icon && <img className={`inline mr-1 ${size === 'lg' ? 'h-[18px]' : 'h-[13px]'}`} src={icon} alt='' />}
            <span className={size === 'lg' ? 'text-sm' : 'text-xs'}>{label}</span>
        </div>
    );
}

function TaskAction({ isSelected, labelSelected, labelUnselected, iconSelected, iconUnselected, onClick = () => {} }) {
    return (
        <div className='flex flex-wrap items-center gap-1' onClick={onClick}>
            <span className='icon-sm'>{isSelected ? iconSelected : iconUnselected}</span>
            <span className='align-middle text-sm'>{isSelected ? labelSelected : labelUnselected}</span>
        </div>
    );
}

function TaskLink({ label, icon, onClick = () => {} }) {
    return (
        <div className='flex flex-wrap items-center gap-1' onClick={onClick}>
            <span className='icon-sm'>{icon}</span>
            <span className='align-middle text-sm'>{label}</span>
        </div>
    );
}

export default { Task, ExpandedTask, Difficulty, Category };
