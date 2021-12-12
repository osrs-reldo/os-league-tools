import React from 'react';

export function filterBySlot(children, slot, filterOptions = {}) {
    const { allowUndefined = false, inclusiveFilter = true, maxResults = -1 } = filterOptions;
    const filteredResults = React.Children.toArray(children).filter(element => {
        const position = element?.props?.slot;
        const validPosition = inclusiveFilter === (position === slot) || (!position && allowUndefined);
        return validPosition;
    });

    if (filteredResults && maxResults > 0) {
        return filteredResults.slice(0, maxResults);
    }
    return filteredResults;
}

export function getLayoutSlots(children) {
    const layoutSlots = {};
    for (const child of React.Children.toArray(children)) {
        const slot = child?.props?.slot;
        if (layoutSlots[slot]) {
            layoutSlots[slot].push(child);
        } else {
            layoutSlots[slot] = [child];
        }
    }
    return layoutSlots;
}

export function LayoutSlot(slot) {
    const Component = ({ children }) => children;
    return withSlot(Component, slot);
}

export function withSlot(Component, slot) {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { slot };
    return Component;
}