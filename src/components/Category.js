import React from 'react';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import LabeledIcon from './common/LabeledIcon';

function Category({ value }) {
    const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);

    if (!value || !value.category) {
        return null;
    }

    return (
        <div className='flex lg:flex-col flex-row flex-wrap items-center justify-center h-full'>
            <LabeledIcon label={isMdOrSmallerViewport ? '' : value.category.label} icon={value.category.icon} />
            <LabeledIcon label={isMdOrSmallerViewport ? '' : value.subcategory.label} icon={value.subcategory.icon} />
        </div>
    );
}

export default Category;
