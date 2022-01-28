import React, { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
// import { useSelector } from 'react-redux';
import _ from 'lodash';
import Table from './common/Table';
// import SkillRequirementList from './SkillRequirementList';
import { FRAGMENTS, SETS } from '../data/relics';
import FilterButtons from './common/FilterButtons';
import LabeledIcon from './common/LabeledIcon';

export default function RelicsTable() {
    const data = useMemo(() => Object.values(FRAGMENTS), []);
    const columns = useMemo(
        () => [
            {
                Header: 'Id',
                id: 'id',
                accessor: 'id',
            },
            {
                Header: 'Fragment',
                id: 'label',
                accessor: 'label',
                width: 150,
                Cell: FragmentCell,
            },
            {
                Header: 'Level',
                id: 'level',
                width: 20,
                Cell: LevelCell,
            },
            {
                Header: 'Set 1',
                id: 'set1',
                accessor: row => row.sets[0],
                width: 30,
                Cell: SetCell,
            },
            {
                Header: 'Set 2',
                id: 'set2',
                accessor: row => row.sets[1],
                width: 30,
                Cell: SetCell,
            },
            {
                Header: 'Affects',
                id: 'affects',
                accessor: 'affects',
                width: 50,
                Cell: AffectsCell,
            },
            {
                Header: 'Tags',
                id: 'tags',
                accessor: 'tags',
                width: 50,
                Cell: TagsCell,
            },
        ],
        []
    );
    const defaultColumn = useMemo(
        () => ({
            minWidth: 10,
            width: 150,
            maxWidth: 1000,
        }),
        []
    );
    const initialState = { hiddenColumns: ['id'], pageSize: 50 };

    return (
        <Table
            columns={columns}
            data={data}
            filters={[]}
            filterState={{}}
            globalFilter={fuzzyTextFilter}
            defaultColumn={defaultColumn}
            initialState={initialState}
            // ExpandedRow={ExpandedRow}
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

function FragmentCell({ row, value }) {
    return (
        <div {...row.getToggleRowExpandedProps()}>
            <div className='flex flex-row items-center h-full gap-2'>
                <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
                <span
                    className='icon-2xl text-accent cursor-pointer'
                    // TODO check off relics collected
                    // onClick={e => {
                    //     dispatch(
                    //     );
                    //     e.stopPropagation();
                    // }}
                >
                    check_box_outline_blank
                </span>
                <div>
                    <p className='align-middle'>{value}</p>
                    <p className='align-middle text-xs'>{generateFragmentDescription(row.original.effect, 1)}</p>
                </div>
            </div>
        </div>
    );
}

function LevelCell() {
    return (
        <div className='max-w-[20px] text-xs'>
            <FilterButtons
                cols={3}
                filterName='level'
                selectedValues={[1]}
                values={[{ label: 1 }, { label: 2 }, { label: 3 }]}
            />
        </div>
    );
}

function generateFragmentDescription(descriptionParts, level) {
    const flattenedParts = descriptionParts.map(part => {
        if (Array.isArray(part)) {
            return part[level - 1];
        }
        return part;
    });
    return flattenedParts.join('');
}

function SetCell({ value }) {
    const setEffect = SETS[value];
    return (
        <div>
            <p className='align-middle text-sm'>{setEffect.label}</p>
            {/* {Object.keys(setEffect.effect).map(key => ( // TODO would these work well as hover effects?
                <p key={key} className='align-middle text-xs'>
                    ({key}): {setEffect.effect[key]}
                </p>
            ))} */}
        </div>
    );
}

function AffectsCell({ row, value }) {
    const set1 = SETS[row.values.set1];
    const set2 = SETS[row.values.set2];
    const allValues = _.union(value, set1.affects, set2.affects);
    return (
        <div className='max-w-[20px] text-xs'>
            {allValues.map(val => (
                <LabeledIcon label={val} icon={getIcon()} />
            ))}
        </div>
    );
}

function TagsCell({ row, value }) {
    const set1 = SETS[row.values.set1];
    const set2 = SETS[row.values.set2];
    const allValues = _.union(value, set1.tags, set2.tags);
    return (
        <div className='max-w-[20px] text-xs'>
            {allValues.map(val => (
                <LabeledIcon label={val} icon={getIcon()} />
            ))}
        </div>
    );
}

// TODO probably just map these somewhere, putting this here til then
function getIcon() {
    return null;
}

// function ExpandedRow({ original }) {
//     return (
//         <div className='flex flex-row items-center h-full gap-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
//             {/* hack: invisible dummy icons to align the expanded text with the previous row */}
//             <div className='flex flex-row invisible'>
//                 <span className='icon-2xl text-accent'>x</span>
//                 <span className='icon-2xl text-accent'>x</span>
//             </div>
//             <div className='w-full flex flex-col gap-0.5'>
//                 <span className='text-xs mr-1'>Requires:</span>
//                 <SkillRequirementList value={original.skillReqs} className='ml-3' />
//             </div>
//         </div>
//     );
// }
