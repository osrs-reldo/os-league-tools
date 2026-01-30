import React from 'react';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import LabeledIcon from './common/LabeledIcon';

function Difficulty({ value }) {
  const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);
  const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);

  let label = `${value.label} (${value.value})`;
  label = isMdOrSmallerViewport ? value.value : label;
  label = isXsViewport ? '' : label;
  return <LabeledIcon label={label} icon={value.icon} size='lg' className='flex justify-center h-full items-center' />;
}

export default Difficulty;
