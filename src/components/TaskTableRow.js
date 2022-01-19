import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTask } from '../reducer/tasks';
import { selectTempField } from '../reducer/temp';
import TableRow from './common/TableRow';

export default function TaskTableRow({
    row,
    index,
    moveRow,
    filters,
    isReorderEnabled = false,
    ExpandedRow = <div />,
}) {
    const taskId = row.values.id;
    const taskState = useSelector(state => selectTask(state, taskId));
    const isEditNotesMode = useSelector(state => selectTempField(state, `editNotes${taskId}`, false));
    const notesTempVal = useSelector(state => selectTempField(state, `tempNotes${taskId}`, taskState.notes));
    const dispatch = useDispatch();

    const filterState = useSelector(state => state.filters);
    if (!filters.every(filter => filter(row.original, filterState, taskState))) {
        return null;
    }

    return (
        <TableRow
            index={index}
            row={row}
            moveRow={moveRow}
            isReorderEnabled={isReorderEnabled}
            ExpandedRow={ExpandedRow}
            customCellProps={{
                taskState,
                notesState: {
                    isEditNotesMode,
                    notesTempVal,
                },
                dispatchFn: dispatch,
            }}
            {...row.getRowProps()}
        />
    );
}
