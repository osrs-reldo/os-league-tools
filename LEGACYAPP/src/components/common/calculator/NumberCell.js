import React from 'react';
import { numberWithCommas } from '../../../util/numberFormatters';

export default function NumberCell({ value }) {
  return <div className='flex items-center justify-center py-2 h-full'>{numberWithCommas(value)}</div>;
}
