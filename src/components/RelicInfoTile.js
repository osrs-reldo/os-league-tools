import React from 'react';
import { getRelicInfo } from '../util/relic-util';

export default function RelicInfoTile({ relicKey, selected, onClickEvent, isWide, additionalContent }) {
    const { name, description, icon } = getRelicInfo(relicKey);

    const cellStyle = {
        width: '100%',
        minWidth: '150px',
    };

    if (!name) {
        return <div className='relic-table-cell p-2' style={cellStyle} />;
    }

    if (isWide) {
        return (
            <div
                className={`relic-table-cell p-2${selected ? ' selected' : ''}`}
                style={cellStyle}
                onClick={onClickEvent}
            >
                {icon && <img src={icon} alt='' height={75} width={75} className='float-left m-3' />}
                <div>
                    <h5>{name}</h5>
                    <ul>
                        {description.map(listItem => (
                            <li>{listItem}</li>
                        ))}
                    </ul>
                    {additionalContent}
                </div>
            </div>
        );
    }

    return (
        <div
            className={`relic-table-cell p-2 d-flex flex-column align-items-center justify-content-center text-center${
                selected ? ' selected' : ''
            }`}
            onClick={onClickEvent}
            style={cellStyle}
        >
            <h5>{name}</h5>
            {icon && <img src={icon} alt='' height={75} width={75} />}
            {additionalContent}
        </div>
    );
}
