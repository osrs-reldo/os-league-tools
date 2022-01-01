import React from 'react';

function Task({ value }) {
    return (
        <div className='flex flex-row items-center h-full gap-2'>
            <span className='icon-2xl text-accent'>check_box_outline_blank</span>
            <div className='flex flex-col w-full'>
                <span className='inline align-middle'>{value.text}</span>
                <span className='inline align-middle text-xs'>{value.description}</span>
            </div>
        </div>
    );
}

function Difficulty({ value }) {
    return (
        <TaskTag
            text={`${value.text} (${value.value})`}
            icon={value.icon}
            size='lg'
            className='flex justify-center h-full items-center'
        />
    );
}

function Category({ value }) {
    return (
        <div className='flex flex-col flex-wrap items-center justify-center h-full'>
            <TaskTag text={value.category.text} icon={value.category.icon} />
            <TaskTag text={value.subcategory.text} icon={value.subcategory.icon} />
        </div>
    );
}

function Requirements({ value }) {
    return (
        <div className='flex flex-wrap h-full items-center justify-center content-center gap-x-1'>
            {value.slice(0, 5).map(({ skill, level }) => (
                <TaskTag key={`${skill}${level}`} text={level} icon={`/img/task-${skill.toLowerCase()}.png`} />
            ))}
            {value.length > 5 && <TaskTag text='...' />}
        </div>
    );
}

function Manage() {
    return (
        <div className='flex flex-wrap h-full items-center justify-center gap-1'>
            <TaskAction
                textSelected='To-do'
                textUnselected='To-do'
                isSelected={false}
                iconSelected='close'
                iconUnselected='add'
            />
            <TaskAction
                textSelected='Unignore'
                textUnselected='Ignore'
                isSelected={false}
                iconSelected='add'
                iconUnselected='close'
            />
            <TaskLink text='Wiki' icon='launch' />
        </div>
    );
}

function TaskTag({ text, icon, size = 'md', className = '' }) {
    return (
        <div className={className}>
            {icon && <img className={`inline mr-1 ${size === 'lg' ? 'h-[18px]' : 'h-[13px]'}`} src={icon} alt='' />}
            <span className={size === 'lg' ? 'text-sm' : 'text-xs'}>{text}</span>
        </div>
    );
}

function TaskAction({ isSelected, textSelected, textUnselected, iconSelected, iconUnselected, onClick = () => {} }) {
    return (
        <div className='flex flex-wrap items-center gap-1' onClick={onClick}>
            <span className='icon-base'>{isSelected ? iconSelected : iconUnselected}</span>
            <span className='inline align-middle text-sm'>{isSelected ? textSelected : textUnselected}</span>
        </div>
    );
}

function TaskLink({ text, icon, onClick = () => {} }) {
    return (
        <div className='flex flex-wrap items-center gap-1' onClick={onClick}>
            <span className='icon-base'>{icon}</span>
            <span className='inline align-middle text-sm'>{text}</span>
        </div>
    );
}

export default { Task, Difficulty, Category, Requirements, Manage };
