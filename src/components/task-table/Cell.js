import React from 'react';

function Task({ value }) {
    return (
        <div className='flex flex-row items-center h-full gap-2'>
            <span className='icon-2xl text-accent'>check_box_outline_blank</span>
            <div className='flex flex-col w-full'>
                <span className='inline align-middle'>{value.label}</span>
                <span className='inline align-middle text-xs'>{value.description}</span>
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

function Requirements({ value }) {
    return (
        <div className='flex flex-wrap h-full items-center justify-center content-center gap-x-1'>
            {value.slice(0, 5).map(({ skill, level }) => (
                <TaskTag key={`${skill}${level}`} label={level} icon={`/img/task-${skill.toLowerCase()}.png`} />
            ))}
            {value.length > 5 && <TaskTag label='...' />}
        </div>
    );
}

function Manage() {
    return (
        <div className='flex flex-wrap h-full items-center justify-center gap-1'>
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
            <TaskLink label='Wiki' icon='launch' />
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
            <span className='icon-base'>{isSelected ? iconSelected : iconUnselected}</span>
            <span className='inline align-middle text-sm'>{isSelected ? labelSelected : labelUnselected}</span>
        </div>
    );
}

function TaskLink({ label, icon, onClick = () => {} }) {
    return (
        <div className='flex flex-wrap items-center gap-1' onClick={onClick}>
            <span className='icon-base'>{icon}</span>
            <span className='inline align-middle text-sm'>{label}</span>
        </div>
    );
}

export default { Task, Difficulty, Category, Requirements, Manage };
