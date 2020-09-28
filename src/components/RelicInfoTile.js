import React from "react";
import { Col } from "react-bootstrap";
import RelicOutlineImg from '../resources/img/relic-outline.png';
import { getRelicInfo } from '../util/relic-util';

export default function RelicInfoTile({ relicKey, selected, onClickEvent, isWide, additionalContent }) {
    const { name, description, icon } = getRelicInfo(relicKey);

    if (isWide) {
        return (
            <Col className={'relic-table-cell p-2' + (selected ? ' selected' : '')} onClick={onClickEvent}>
                <img src={RelicOutlineImg} alt='' height={75} width={75} className='float-left m-3' />
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    {additionalContent}
                </div>
            </Col>
        );
    }

    return (
        <Col
            className={'relic-table-cell p-2 d-flex flex-column align-items-center justify-content-center' + (selected ? ' selected' : '')}
            onClick={onClickEvent}
        >
            <h5>{name}</h5>
            {icon && <img src={RelicOutlineImg} alt='' height={75} width={75} />}
            {additionalContent}
        </Col>
    );
}