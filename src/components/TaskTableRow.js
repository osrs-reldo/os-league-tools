import React from 'react';
import TableRow from './common/TableRow';
import { INITIAL_TASK_STATE } from '../reducer/tasks';

export default function TaskTableRow({
    row,
    index,
    moveRow,
    filters,
    filterState,
    tasksState,
    tempState,
    dispatch,
    isReorderEnabled = false,
    ExpandedRow = <div />,
}) {
    const taskId = row.values.id;
    const taskState = tasksState[taskId] || INITIAL_TASK_STATE;
    const isEditNotesMode = tempState[`editNotes${taskId}`] || false;
    const notesTempVal = tempState[`tempNotes${taskId}`] || taskState.notes;

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
