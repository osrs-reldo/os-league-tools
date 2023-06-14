import React from 'react';

export default function TableRow({ row, ExpandedRow = <div />, customCellProps = {} }) {
  return (
    <div className='task-table-row'>
      <div {...row.getRowProps()}>
        {row.cells.map(cell => (
          <div {...cell.getCellProps()} className='relative'>
            {cell.render('Cell', customCellProps)}
          </div>
        ))}
      </div>
      {row.isExpanded && <div className='w-full'>{ExpandedRow({ ...row, ...customCellProps })}</div>}
    </div>
  );
}
