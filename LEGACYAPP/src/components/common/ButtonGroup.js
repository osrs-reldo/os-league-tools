import React from 'react';
import _ from 'lodash';

export default function ButtonGroup({
  buttons,
  selection = null,
  setSelection = () => {},
  enabled = true,
  multi = false,
  className = '',
}) {
  if (!selection) {
    setSelection(multi ? [] : buttons[Object.keys(buttons)[0]].id);
  }

  return (
    <div className={`flex text-sm shadow rounded w-fit ${className}`}>
      {buttons.map(({ value, label }) => {
        if (!enabled) {
          return (
            <button key={value} type='button' className='button-group-base button-group-disabled' disabled>
              {label}
            </button>
          );
        }

        if (multi) {
          return (
            <MultiSelectButton
              key={value}
              label={label}
              value={value}
              selection={selection}
              setSelection={setSelection}
            />
          );
        }
        return (
          <SingleSelectButton
            key={value}
            label={label}
            value={value}
            selection={selection}
            setSelection={setSelection}
          />
        );
      })}
    </div>
  );
}

function SingleSelectButton({ label, value, selection, setSelection }) {
  const isSelected = selection === value;
  if (isSelected) {
    return (
      <button type='button' className='button-group-base button-group-selected' disabled>
        {label}
      </button>
    );
  }
  return (
    <button
      type='button'
      className='button-group-base button-group-unselected button-group-active'
      onClick={() => setSelection(value)}
    >
      {label}
    </button>
  );
}

function MultiSelectButton({ label, value, selection, setSelection }) {
  const isSelected = selection.includes(value);
  const buttonClass = isSelected
    ? 'button-group-base button-group-selected'
    : 'button-group-base button-group-unselected button-group-active';
  const onClick = isSelected
    ? () => setSelection(_.without(selection, value))
    : () => setSelection([...selection, value]);
  return (
    <button key={value} type='button' className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}
