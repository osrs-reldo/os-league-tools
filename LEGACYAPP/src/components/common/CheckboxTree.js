import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactCheckboxTree from 'react-checkbox-tree';

export default function CheckboxTree({
  checkboxName,
  expandedState = ['<ALL>'],
  filterState = [],
  nodes = [],
  onCheckFunc = () => null,
} = {}) {
  const [expanded, setExpanded] = useState(expandedState);
  const dispatch = useDispatch();

  const icons = {
    check: <span className='icon-xs bg-accent w-3 h-3 rounded-sm leading-3'>check</span>,
    uncheck: <span className='bg-inverted w-3 h-3 rounded-sm' />,
    halfCheck: <span className='icon-xs bg-secondary w-3 h-3 rounded-sm leading-3'>check</span>,
    expandClose: <span className='icon-xl'>keyboard_arrow_right</span>,
    expandOpen: <span className='icon-xl'>keyboard_arrow_down</span>,
    expandAll: <span className='icon-xl w-4 h-4'>plus</span>,
    collapseAll: <span className='icon-xl w-4 h-4'>minus</span>,
  };

  return (
    <ReactCheckboxTree
      checked={filterState}
      expanded={expanded}
      icons={icons}
      nodes={[{ label: 'All', value: '<ALL>', children: nodes }]}
      onCheck={checkedItems =>
        dispatch(
          onCheckFunc({
            field: checkboxName,
            value: checkedItems,
          })
        )
      }
      onExpand={expandedItems => setExpanded(expandedItems)}
      showNodeIcon={false}
    />
  );
}
