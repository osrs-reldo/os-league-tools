import React from 'react';

export default function ActivityCell({ row, value }) {
  return (
    <div className='flex items-center py-2 h-full'>
      <img className='mx-2' src={row.original.icon} alt={value} />
      <p>{value}</p>
    </div>
  );
}
