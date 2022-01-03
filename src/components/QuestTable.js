import React, { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import quests from '../resources/quests';
import Cell from './TaskTableCell';
import Table from './common/Table';
import LabeledIcon from './common/LabeledIcon';

export default function QuestTable() {
    const data = useMemo(() => quests, []);
    const columns = useMemo(
        () => [
            {
                Header: 'Id',
                id: 'id',
                accessor: 'id',
            },
            {
                Header: 'Quest',
                id: 'label',
                accessor: 'label',
                width: 500,
                Cell: QuestCell,
            },
            {
                Header: 'QP',
                id: 'points',
                accessor: 'points',
                width: 80,
                Cell: ({ value }) => {
                    return (
                        <div className='flex items-center h-full justify-center'>
                            {value ? (
                                <LabeledIcon label={value} icon='/img/task-quest.png' />
                            ) : (
                                <span className='text-xs italic'>n/a</span>
                            )}
                        </div>
                    );
                },
            },
            {
                Header: 'Difficulty',
                id: 'difficulty',
                accessor: 'difficulty',
                width: 175,
                sortType: (a, b) => a.values.difficulty.id - b.values.difficulty.id,
                Cell: ({ value }) => (
                    <div className='flex items-center h-full justify-center'>
                        <LabeledIcon label={value.label} icon={value.icon} />
                    </div>
                ),
            },
            {
                Header: 'Length',
                id: 'length',
                accessor: 'length',
                width: 175,
                sortType: (a, b) => a.values.length.id - b.values.length.id,
                Cell: ({ value }) => (
                    <div className='flex items-center h-full justify-center'>
                        <LabeledIcon label={value.label} icon={value.icon} />
                    </div>
                ),
            },
            {
                Header: 'Series',
                id: 'series',
                accessor: 'series',
                width: 250,
                sortType: (a, b) => {
                    const labelA = a.values.series ? a.values.series.label : 'zzz';
                    const labelB = b.values.series ? b.values.series.label : 'zzz';
                    return labelA.localeCompare(labelB);
                },
                Cell: ({ value }) => {
                    if (value) {
                        return (
                            <div className='flex items-center h-full justify-center'>
                                <LabeledIcon label={value.label} icon={value.icon} />
                            </div>
                        );
                    }
                    return null;
                },
            },
        ],
        []
    );
    const defaultColumn = useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 1000,
        }),
        []
    );
    const initialState = { hiddenColumns: ['id'] };

    return (
        <Table
            columns={columns}
            data={data}
            filters={[]}
            globalFilter={fuzzyTextFilter}
            defaultColumn={defaultColumn}
            initialState={initialState}
            ExpandedRow={Cell.ExpandedTask}
            enableResizeColumns
        />
    );
}

function fuzzyTextFilter(rows, __, filterValue) {
    return matchSorter(rows, filterValue, {
        threshold: matchSorter.rankings.CONTAINS,
        keys: ['values.label', 'values.series.label'],
    });
}
fuzzyTextFilter.autoRemove = val => !val;

function QuestCell({ value }) {
    return (
        <div className='flex flex-row items-center h-full gap-2'>
            <span className='icon-2xl text-accent'>check_box_outline_blank</span>
            <span className='inline align-middle'>{value}</span>
        </div>
    );
}
