import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ProgressBar from "./UnlockProgressBar";
import RelicCheckImg from '../resources/img/relic-check.png';
import RelicInfoTile from "./RelicInfoTile";
import relicData from '../resources/relicData.json';
import { getRelicKey } from '../util/relic-util';

export default function RelicsTracker() {
    const [selectedRelic, setSelectedRelic] = useState();

    return (
        <Card bg='dark' text='white' className="mt-3">
            <h1 className="m-3 text-center">2000 Points - 500 To Next Unlock</h1>
            <ProgressBar
                curValue={2000}
                maxValue={10000}
                steps={[0, 400, 1200, 2500, 5000, 10000]}
                stepImage={<img src={RelicCheckImg} alt='' height={50} />}
            />
            <Container className='relic-table mt-4 mb-4'>
                <Row>
                    {Array.from({ length: 6 }, (_, i) => {
                        const relicCategory = relicData[i].category;
                        return (
                            <Col key={i} className='relic-table-cell d-flex flex-column align-items-center'>
                                <h3>{'Tier ' + (i + 1)}</h3>
                                <h5 className='text-muted'>{relicCategory}</h5>
                            </Col>
                        );
                    })}
                </Row>
                {Array.from({ length: 4 }, (_, i) => {
                    return (
                        <Row key={i}>
                            {Array.from({ length: 6 }, (_, j) => {
                                const relicKey = getRelicKey(j, i);
                                return (
                                    <RelicInfoTile
                                        key={relicKey}
                                        relicKey={relicKey}
                                        onClickEvent={() => setSelectedRelic(relicKey)}
                                    />
                                );
                            })}
                        </Row>
                    );
                })}
            </Container>
            <Container className='relic-table mb-4'>
                <Row>
                    {
                        selectedRelic ? (
                            <RelicInfoTile
                                relicKey={selectedRelic}
                                isWide
                                additionalContent={<Button variant='light'>Unlock this relic</Button>}
                            />
                        ) : (
                                <p className='m-1'>Select a relic to view more information or unlock it.</p>
                            )
                    }
                </Row>
            </Container>
        </Card>
    );
}