import React from 'react';

function TableRow({ row, ExpandedRow = <div /> }) {
  return (
    <div className='task-table-row'>
      <div {...row.getRowProps()}>
        {row.cells.map(cell => (
          <div {...cell.getCellProps()} className='relative'>
            {cell.render('Cell')}
          </div>
        ))}
      </div>
      {row.isExpanded && <div className='w-full'>{ExpandedRow({ ...row })}</div>}
    </div>
  );
}

export default React.memo(TableRow);
