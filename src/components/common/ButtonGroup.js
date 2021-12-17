import React, { useState } from 'react';

export default function ButtonGroup({ buttons, defaultSelectedButtonId = null, enabled = true }) {
    const [selectedButtonId, setSelectedButtonId] = useState(defaultSelectedButtonId);

    if (!selectedButtonId) {
        setSelectedButtonId(buttons[Object.keys(buttons)[0]].id);
    }

    return (
        <div className='flex text-sm shadow rounded w-fit'>
            {buttons.map(({ id, text, onSelect = () => {} }) => {
                if (!enabled) {
                    return (
                        <button key={id} type='button' className='button-group-base button-group-disabled' disabled>
                            {text}
                        </button>
                    );
                }

                const isSelected = selectedButtonId === id;
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
                        onClick={e => {
                            setSelectedButtonId(id);
                            onSelect(e);
                        }}
                    >
                        {text}
                    </button>
                );
            })}
        </div>
    );
}
