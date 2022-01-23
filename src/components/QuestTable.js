import React, { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { useDispatch, useSelector } from 'react-redux';
import quests from '../data/quests';
import Table from './common/Table';
import LabeledIcon from './common/LabeledIcon';
import { QUEST_STATUS } from '../data/constants';
import { updateQuest } from '../store/unlocks/unlocks';
import SkillRequirementList from './SkillRequirementList';

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
                Cell: PointsCell,
            },
            {
                Header: 'Difficulty',
                id: 'difficulty',
                accessor: 'difficulty',
                width: 175,
                sortType: (a, b) => a.values.difficulty.id - b.values.difficulty.id,
                Cell: IconCell,
            },
            {
                Header: 'Length',
                id: 'length',
                accessor: 'length',
                width: 175,
                sortType: (a, b) => a.values.length.id - b.values.length.id,
                Cell: IconCell,
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
                Cell: IconCell,
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
    const questState = useSelector(state => state.unlocks.quests);
    const filterState = useSelector(state => state.filters.quests);
    const dispatch = useDispatch();

    return (
        <Table
            columns={columns}
            data={data}
            filters={[completedFilter, difficultyFilter, lengthFilter]}
            filterState={filterState}
            globalFilter={fuzzyTextFilter}
            defaultColumn={defaultColumn}
            initialState={initialState}
            customFilterProps={{ questState }}
            ExpandedRow={ExpandedRow}
            customRowProps={{ questState, dispatch }}
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

function QuestCell({ row, value, questState, dispatch }) {
    const questStatus = questState[row.id] || QUEST_STATUS.NOT_STARTED;
    return (
        <div {...row.getToggleRowExpandedProps()}>
            <div className='flex flex-row items-center h-full gap-2'>
                <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
                <span
                    className='icon-2xl text-accent cursor-pointer'
                    onClick={e => {
                        dispatch(
                            updateQuest({
                                id: row.values.id,
                                status:
                                    questStatus === QUEST_STATUS.FINISHED
                                        ? QUEST_STATUS.NOT_STARTED
                                        : QUEST_STATUS.FINISHED,
                            })
                        );
                        e.stopPropagation();
                    }}
                >
                    {questStatus === QUEST_STATUS.FINISHED ? 'check_box' : 'check_box_outline_blank'}
                </span>
                <span className='inline align-middle'>{value}</span>
            </div>
        </div>
    );
}

function PointsCell({ value }) {
    return (
        <div className='flex items-center h-full justify-center'>
            {value ? (
                <LabeledIcon label={value} icon='/img/task-quest.png' />
            ) : (
                <span className='text-xs italic'>n/a</span>
            )}
        </div>
    );
}

function IconCell({ value }) {
    if (value) {
        return (
            <div className='flex items-center h-full justify-center'>
                <LabeledIcon label={value.label} icon={value.icon} />
            </div>
        );
    }
    return null;
}

function completedFilter(record, filterState, { questState }) {
    if (filterState.status === 'all') {
        return true;
    }
    const status = questState[record.id] === QUEST_STATUS.FINISHED;
    return (filterState.status === 'cmpl') === !!status;
}

function difficultyFilter(record, filterState) {
    if (filterState.difficulty === null) {
        return true;
    }
    return filterState.difficulty.includes(record.difficulty.label);
}

function lengthFilter(record, filterState) {
    if (filterState.length === null) {
        return true;
    }
    return filterState.length.includes(record.length.label);
}

function ExpandedRow({ original }) {
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
            </div>
        </div>
    );
}
