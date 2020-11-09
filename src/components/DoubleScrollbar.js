import React, { useEffect, useRef, useState } from "react";

/**
 * adapted from https://github.com/umchee/react-double-scrollbar
 * rewritten in pure functional style
 */
export default function DoubleScrollbar(props) {
    const [width, setWidth] = useState('auto');
    const innerDiv = useRef();
    const outerDiv = useRef();
    const childWrapper = useRef();

    const getChildWrapperWidth = () => {
        let width = null;
        if (childWrapper.current && childWrapper.current.scrollWidth) {
            width = childWrapper.current.scrollWidth + "px"
        }
        return width;
    }

    const calculateWidth = () => {
        let newWidth = getChildWrapperWidth();
        if (newWidth === null) {
            newWidth = "auto";
        }
        if (newWidth !== width) {
            setWidth(newWidth);
        }
    }

    useEffect(() => {
        calculateWidth();
    })
    window.addEventListener("resize", calculateWidth());

    if (outerDiv.current) {
        outerDiv.current.onscroll = function() {
            childWrapper.current.scrollLeft = outerDiv.current.scrollLeft;
        };
    }

    if (childWrapper.current) {
        childWrapper.current.onscroll = function() {
            outerDiv.current.scrollLeft = childWrapper.current.scrollLeft;
        };
    }

    return (
        <div>
            <div ref={outerDiv} style={{ overflowX: "auto", overflowY: "hidden" }}>
                <div ref={innerDiv} style={{ paddingTop: "1px", width: width }}></div>
            </div>
            <div ref={childWrapper} style={{ overflow: "auto", overflowY: "hidden" }} className='shadowed-scrollbox'>
                {props.children}
            </div>
        </div>
    );
}