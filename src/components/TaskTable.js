import React, { useMemo } from 'react';
import { useTable, useFlexLayout, useResizeColumns } from 'react-table';
import tasks from '../resources/tasks';

export default function TaskTable() {
    const data = React.useMemo(() => tasks, []);
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 1000,
        }),
        []
    );
    const columns = useMemo(
        () => [
            {
                Header: 'Task',
                id: 'text',
                width: 470,
                accessor: row => {
                    return { text: row.text, description: row.description };
                },
                Cell: ({ value }) => {
                    return (
                        <div className='flex flex-row items-center h-full gap-2'>
                            <span className='icon-2xl text-accent'>check_box_outline_blank</span>
                            <div className='flex flex-col w-full'>
                                <span className='inline align-middle'>{value.text}</span>
                                <span className='inline align-middle text-xs'>{value.description}</span>
                            </div>
                        </div>
                    );
                },
            },
            {
                Header: 'Difficulty',
                id: 'difficulty.value',
                minWidth: 95,
                width: 150,
                accessor: row => row.difficulty,
                Cell: ({ value }) => {
                    return (
                        <TaskTag
                            text={`${value.text} (${value.value})`}
                            icon={value.icon}
                            size='lg'
                            className='flex justify-center h-full items-center'
                        />
                    );
                },
            },
            {
                Header: 'Category',
                id: 'category.text',
                minWidth: 90,
                width: 150,
                accessor: row => {
                    return { category: row.category, subcategory: row.subcategory };
                },
                Cell: ({ value }) => {
                    return (
                        <div className='flex flex-col flex-wrap items-center justify-center h-full'>
                            <TaskTag text={value.category.text} icon={value.category.icon} />
                            <TaskTag text={value.subcategory.text} icon={value.subcategory.icon} />
                        </div>
                    );
                },
            },
            {
                Header: 'Requirements',
                id: 'requirements',
                minWidth: 120,
                width: 150,
                accessor: row => row.skillReqs,
                Cell: ({ value }) => {
                    return (
                        <div className='flex flex-wrap h-full items-center justify-center content-center gap-x-1'>
                            {value.slice(0, 5).map(({ skill, level }) => (
                                <TaskTag
                                    key={`${skill}${level}`}
                                    text={level}
                                    icon={`/img/task-${skill.toLowerCase()}.png`}
                                />
                            ))}
                            {value.length > 5 && <TaskTag text='...' />}
                        </div>
                    );
                },
            },
            {
                Header: 'Manage',
                accessor: 'wiki',
                minWidth: 70,
                width: 190,
                Cell: () => {
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
                },
            },
        ],
        []
    );

    const tableState = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFlexLayout,
        useResizeColumns
    );

    return (
        <>
            <div className='flex flex-row flex-wrap justify-between pl-6 p-3 items-end'>
                <span className='italic'>Showing: 22 tasks</span>
                <input type='text' className='input-primary form-input text-sm' placeholder='Filter...' />
            </div>
            <div className='block overflow-auto ml-3 pr-2'>
                <div {...tableState.getTableProps()}>
                    <div>
                        {tableState.headerGroups.map(headerGroup => (
                            <div
                                {...headerGroup.getHeaderGroupProps()}
                                className='heading-accent-md leading-loose border-b border-accent overflow-hidden'
                            >
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className='relative'>
                                        {column.render('Header')}
                                        <span {...column.getResizerProps()} className='resizer icon-lg'>
                                            drag_handle
                                        </span>
                                    </th>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div {...tableState.getTableBodyProps()}>
                        {tableState.rows.map(row => {
                            tableState.prepareRow(row);
                            return (
                                <div {...row.getRowProps()} className='task-table-row'>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()} className='relative'>
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
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
