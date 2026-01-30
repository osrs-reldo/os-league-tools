import React from 'react';
import { numberWithCommas } from '../../../util/numberFormatters';

export default function MaterialsCell({ value }) {
  return (
    <div className='flex flex-col justify-center py-2 h-full text-sm'>
      {value.map(({ name, amount, actions }) => (
        <p key={name}>{`${amount ? numberWithCommas(Math.ceil(amount * actions)) : ''} ${name}`}</p>
      ))}
    </div>
  );
}
