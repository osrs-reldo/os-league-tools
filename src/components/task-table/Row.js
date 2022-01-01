import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DND_ITEM_TYPE = 'row';

/* adapted from https://react-table.tanstack.com/docs/examples/row-dnd */
export default function Row({ row, index, moveRow }) {
    const dropRef = useRef(null);
    const dragRef = useRef(null);

    const [, drop] = useDrop({
        accept: DND_ITEM_TYPE,
        hover(item, monitor) {
            if (!dropRef.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = dropRef.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveRow(dragIndex, hoverIndex);
            // Mutating the state is actually a perf improvement here to avoid regenerating indexes
            // eslint-disable-next-line no-param-reassign
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag, preview] = useDrag({
        type: DND_ITEM_TYPE,
        item: { index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    preview(drop(dropRef));
    drag(dragRef);

    return (
        <div ref={dropRef} className={isDragging ? 'opacity-0' : 'opacity-1'}>
            <div {...row.getRowProps()} className='task-table-row' ref={dragRef}>
                {row.cells.map(cell => {
                    return (
                        <div {...cell.getCellProps()} className='relative'>
                            {cell.render('Cell')}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
