import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ProgressBar from "./UnlockProgressBar";
import RelicCheckImg from '../resources/img/relic-check.png';
import RelicInfoTile from "./RelicInfoTile";
import relicData from '../resources/relicData.json';
import { getRelicKey, MAX_POINTS, RELIC_UNLOCKS, unlockRelicInState, lockRelicInState, isRelicUnlocked } from '../util/relic-util';
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from '../util/browser-util';

export default function RelicsTracker() {
    const [selectedRelic, setSelectedRelic] = useState();
    const [unlockedRelics, setUnlockedRelics] = useLocalStorage(LOCALSTORAGE_KEYS.UNLOCKED_RELICS, {});
    const [totalPoints] = useLocalStorage(LOCALSTORAGE_KEYS.TOTAL_POINTS, 0);

    return (
        <Card bg='dark' text='white' className="mt-3">
            <h1 className="m-3 text-center">{totalPoints + ' Points - 500 To Next Unlock'}</h1>
            <ProgressBar
                curValue={totalPoints}
                maxValue={MAX_POINTS}
                steps={RELIC_UNLOCKS}
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
                                        selected={isRelicUnlocked(relicKey, unlockedRelics)}
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
                                additionalContent={
                                    <React.Fragment>
                                        {isRelicUnlocked(selectedRelic, unlockedRelics) ?
                                            <Button
                                                variant='dark' onClick={() => setUnlockedRelics(prevState => { return lockRelicInState(prevState, selectedRelic) })}>
                                                Re-lock this relic
                                            </Button>
                                            :
                                            <Button variant='light' onClick={() => setUnlockedRelics(prevState => { return unlockRelicInState(prevState, selectedRelic) })}>
                                                Unlock this relic
                                            </Button>
                                        }
                                    </React.Fragment>
                                }
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