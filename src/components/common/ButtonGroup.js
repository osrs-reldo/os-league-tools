import React from 'react';
import _ from 'lodash';

export default function ButtonGroup({
    buttons,
    selection = null,
    setSelection = () => {},
    enabled = true,
    multi = false,
}) {
    if (!selection) {
        setSelection(multi ? [] : buttons[Object.keys(buttons)[0]].id);
    }

    return (
        <div className='flex text-sm shadow rounded w-fit'>
            {buttons.map(({ id, text }) => {
                if (!enabled) {
                    return (
                        <button key={id} type='button' className='button-group-base button-group-disabled' disabled>
                            {text}
                        </button>
                    );
                }

                if (multi) {
                    const isSelected = selection.includes(id);
                    const buttonClass = isSelected
                        ? 'button-group-base button-group-selected'
                        : 'button-group-base button-group-unselected button-group-active';
                    const onClick = isSelected
                        ? () => setSelection(_.without(selection, id))
                        : () => setSelection([...selection, id]);
                    return (
                        <button key={id} type='button' className={buttonClass} onClick={onClick}>
                            {text}
                        </button>
                    );
                }

                const isSelected = selection === id;
                if (isSelected) {
                    return (
                        <button key={id} type='button' className='button-group-base button-group-selected' disabled>
                            {text}
                        </button>
                    );
                }
                return (
                    <button
                        key={id}
                        type='button'
                        className='button-group-base button-group-unselected button-group-active'
                        onClick={() => setSelection(id)}
                    >
                        {text}
                    </button>
                );
            })}
        </div>
    );
}
