import React, { useRef } from 'react';
import useRowDrag from './useRowDrag';
import useRowDrop from './useRowDrop';

const DND_ITEM_TYPE = 'row';

/* adapted from https://react-table.tanstack.com/docs/examples/row-dnd */
export default function Row({ row, index, moveRow, isReorderEnabled = false, ExpandedRow = <div /> }) {
    const dropRef = useRef(null);
    const dragRef = useRef(null);

    const [, drop] = useRowDrop(DND_ITEM_TYPE, index, dropRef, moveRow);
    const [{ isDragging }, drag, preview] = useRowDrag(DND_ITEM_TYPE, index);

    preview(drop(dropRef));
    drag(dragRef);

    return (
        <div ref={dropRef} className={`task-table-row ${isDragging ? 'opacity-25' : 'opacity-1'}`}>
            <div {...row.getRowProps()} ref={isReorderEnabled ? dragRef : null}>
                {row.cells.map(cell => {
                    return (
                        <div {...cell.getCellProps()} className='relative'>
                            {cell.render('Cell')}
                        </div>
                    );
                })}
            </div>
            {row.isExpanded && <div className='w-full'>{ExpandedRow(row)}</div>}
        </div>
    );
}
