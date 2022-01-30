/* eslint-disable no-unused-vars */
import _ from 'lodash';
import { matchSorter } from 'match-sorter';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import images from '../assets/images';
import { FRAGMENTS, SETS } from '../data/relics';
import { selectFragment, toggleFragment } from '../store/fragments';
import LabeledIcon from './common/LabeledIcon';
import Separator from './common/Separator';
import Table from './common/Table';

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
                Header: 'Set',
                id: 'set',
                accessor: row => row.sets,
                width: 30,
                Cell: SetCell,
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
    const initialState = useMemo(() => ({ hiddenColumns: ['id'], pageSize: 50 }), []);
    const filters = useMemo(() => [], []);
    const filterState = useMemo(() => ({}), []);

    return (
        <Table
            columns={columns}
            data={data}
            filters={filters}
            filterState={filterState}
            globalFilter={fuzzyTextFilter}
            defaultColumn={defaultColumn}
            initialState={initialState}
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
    const fragmentState = useSelector(state => selectFragment(state, row.values.id));
    const dispatch = useDispatch();

    let checkboxIcon;
    switch (fragmentState.level) {
        // why google. why aren't these named consistently. one, two, 3???
        case 1:
            checkboxIcon = 'looks_one';
            break;
        case 2:
            checkboxIcon = 'looks_two';
            break;
        case 3:
            checkboxIcon = 'looks_3';
            break;
        default:
            checkboxIcon = 'check_box_outline_blank';
    }

    return (
        <div className='flex flex-row items-center h-full gap-2'>
            <img
                src={images[`fragment-${value.replaceAll(' ', '-').replaceAll('!', '').toLowerCase()}.png`]}
                alt=''
                className='ml-2'
            />
            <span
                className={`text-accent cursor-pointer text-2xl select-none ${
                    fragmentState.level === 3 ? 'material-icons-sharp' : 'material-icons-outlined'
                }`}
                onClick={e => {
                    dispatch(toggleFragment({ id: row.values.id }));
                    e.stopPropagation();
                }}
            >
                {checkboxIcon}
            </span>
            <div className='w-full'>
                <p className={`align-middle ${fragmentState.unlocked ? 'text-accent' : ''}`}>{value}</p>
                <FragmentDescription descriptionParts={row.original.effect} level={fragmentState.level} />
            </div>
        </div>
    );
}

function FragmentDescription({ descriptionParts, level }) {
    return (
        <p className='align-middle text-xs'>
            {descriptionParts.map((part, i) => {
                if (Array.isArray(part)) {
                    if (level === 0) {
                        return (
                            <React.Fragment key={i}>{`( ${part
                                .filter(label => label !== '')
                                .join(' / ')} )`}</React.Fragment>
                        );
                    } else if (level === 3) {
                        return (
                            <span key={i} className='text-accent font-bold'>
                                {part[2]}
                            </span>
                        );
                    }
                    return (
                        <span className='inline' key={i}>
                            {'( '}
                            {part.map((levelPart, j) => {
                                if (levelPart === '') {
                                    return <React.Fragment key={levelPart}>''</React.Fragment>;
                                }
                                return (
                                    <React.Fragment key={levelPart}>
                                        <span className={level - 1 === j ? 'text-accent font-bold' : ''}>
                                            {levelPart}
                                        </span>
                                        <span className='last:hidden'> / </span>
                                    </React.Fragment>
                                );
                            })}
                            {' )'}
                        </span>
                    );
                }
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </p>
    );
}

function SetCell({ value }) {
    const set1 = SETS[value[0]];
    const set2 = SETS[value[1]];
    return (
        <div className='flex justify-center gap-2 items-center h-full py-1'>
            <SetIcon label={set1.label} description={set1.effect} levels={set1.levels} />
            <SetIcon label={set2.label} description={set2.effect} levels={set2.levels} />
        </div>
    );
}

function SetIcon({ label, levels, description }) {
    return (
        <>
            <img
                src={images[`set-${label.replaceAll(' ', '-').toLowerCase()}.png`]}
                alt=''
                className='inline h-10'
                data-tip
                data-for={label}
            />
            <ReactTooltip id={label}>
                <p className='font-semibold text-accent text-center'>
                    {label} ({levels.join(',')})
                </p>
                <p className='align-middle text-xs max-w-[300px]'>
                    {description.map((part, i) => {
                        if (Array.isArray(part)) {
                            return <span key={i} className='whitespace-nowrap'>{`( ${part.join(' / ')} )`}</span>;
                        }
                        return <span key={i}>{part}</span>;
                    })}
                </p>
            </ReactTooltip>
        </>
    );
}

function TagsList({ tags, displayLabels = true }) {
    return (
        <div className='text-xs flex flex-wrap gap-1'>
            {tags.map(({ label, icon }) => (
                <React.Fragment key={label}>
                    <LabeledIcon
                        label={displayLabels ? label : ''}
                        icon={icon}
                        className={`whitespace-nowrap ${displayLabels ? '' : 'ml-1'}`}
                    />
                    <span className='last:hidden'>•</span>
                </React.Fragment>
            ))}
        </div>
    );
}

function TagsCell({ row }) {
    return (
        <div className='flex flex-col justify-around mb-1'>
            <div className='flex'>
                <span className='font-semibold text-xs mr-1'>Skills/Activities:</span>
                <TagsList tags={row.original.affects} displayLabels={false} />
            </div>
            {row.values.tags.length > 0 && (
                <div className='flex'>
                    <span className='font-semibold text-xs mr-1'>Effect type:</span>
                    <TagsList tags={row.values.tags} displayLabels />
                </div>
            )}
        </div>
    );
}
