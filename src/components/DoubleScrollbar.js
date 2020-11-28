import React, { useEffect, useRef, useState } from 'react';

/**
 * adapted from https://github.com/umchee/react-double-scrollbar
 * rewritten in pure functional style
 */
export default function DoubleScrollbar({ children }) {
    const [width, setWidth] = useState('auto');
    const innerDiv = useRef();
    const outerDiv = useRef();
    const childWrapper = useRef();

    const getChildWrapperWidth = () => {
        let childWidth = null;
        if (childWrapper.current && childWrapper.current.scrollWidth) {
            childWidth = `${childWrapper.current.scrollWidth}px`;
        }
        return childWidth;
    };

    const calculateWidth = () => {
        let newWidth = getChildWrapperWidth();
        if (newWidth === null) {
            newWidth = 'auto';
        }
        if (newWidth !== width) {
            setWidth(newWidth);
        }
    };

    useEffect(() => {
        calculateWidth();
    });
    window.addEventListener('resize', calculateWidth());

    if (outerDiv.current) {
        outerDiv.current.onscroll = () => {
            childWrapper.current.scrollLeft = outerDiv.current.scrollLeft;
        };
    }

    if (childWrapper.current) {
        childWrapper.current.onscroll = () => {
            outerDiv.current.scrollLeft = childWrapper.current.scrollLeft;
        };
    }

    return (
        <div>
            <div ref={outerDiv} style={{ overflowX: 'auto', overflowY: 'hidden' }}>
                <div ref={innerDiv} style={{ paddingTop: '1px', width }} />
            </div>
            <div ref={childWrapper} style={{ overflow: 'auto', overflowY: 'hidden' }} className='shadowed-scrollbox'>
                {children}
            </div>
        </div>
    );
}
