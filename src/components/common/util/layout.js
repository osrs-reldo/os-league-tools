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

export function getLayoutSlots(items, slotPropName = 'slot') {
    const children = Array.isArray(items) ? items : React.Children.toArray(items);
    const layoutSlots = {};
    for (const child of children) {
        const slot = child?.props?.[slotPropName];
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

export function withSlot(Component, slotName) {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { slot: slotName };
    return Component;
}
