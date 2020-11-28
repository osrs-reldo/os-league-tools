import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProgressBar from './UnlockProgressBar';
import RelicInfoTile from './RelicInfoTile';
import relicData from '../resources/relicData.json';
import {
    getRelicKey,
    MAX_POINTS,
    RELIC_UNLOCKS,
    unlockRelicInState,
    lockRelicInState,
    isRelicUnlocked,
    getPointsToNextRelic,
    isPassiveRelic,
} from '../util/relic-util';
import useLocalStorage from '../hooks/useLocalStorage';
import { LOCALSTORAGE_KEYS } from '../util/browser-util';
import DoubleScrollbar from '../components/DoubleScrollbar';

export default function RelicsTracker({ totalPoints }) {
    const [selectedRelic, setSelectedRelic] = useState();
    const [unlockedRelics, setUnlockedRelics] = useLocalStorage(LOCALSTORAGE_KEYS.UNLOCKED_RELICS, {});
    const pointsToNextRelic = getPointsToNextRelic(totalPoints);

    return (
        <Card bg='dark' text='white' className='mt-3'>
            <h1 className='m-3 text-center'>
                {pointsToNextRelic > 0
                    ? `${totalPoints} Points - ${pointsToNextRelic} To Next Unlock`
                    : 'All relics unlocked!'}
            </h1>
            <ProgressBar curValue={totalPoints} maxValue={MAX_POINTS} steps={RELIC_UNLOCKS} />
            <Card bg='dark' style={{ border: 'none' }}>
                <Card.Body>
                    <DoubleScrollbar>
                        <div>
                            <div className='d-flex no-wrap align-items-stretch'>
                                {Array.from({ length: 6 }, (_, i) => {
                                    const relicCategory = relicData[i].category;
                                    return (
                                        <div
                                            key={i}
                                            className='relic-table-cell d-flex flex-column align-items-center'
                                            style={{ width: '100%', minWidth: '150px' }}
                                        >
                                            <h3>{'Tier ' + (i + 1)}</h3>
                                            <h5 className='text-muted'>{relicCategory}</h5>
                                        </div>
                                    );
                                })}
                            </div>
                            {Array.from({ length: 4 }, (_, i) => {
                                return (
                                    <div className='d-flex no-wrap align-items-stretch' key={i}>
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
                                    </div>
                                );
                            })}
                        </div>
                    </DoubleScrollbar>
                </Card.Body>
            </Card>
            <div className='relic-table-cell m-4'>
                {selectedRelic ? (
                    <RelicInfoTile
                        relicKey={selectedRelic}
                        isWide
                        additionalContent={
                            <React.Fragment>
                                {!isPassiveRelic(selectedRelic) &&
                                    (isRelicUnlocked(selectedRelic, unlockedRelics) ? (
                                        <Button
                                            variant='dark'
                                            onClick={() =>
                                                setUnlockedRelics(prevState => {
                                                    return lockRelicInState(prevState, selectedRelic);
                                                })
                                            }
                                        >
                                            Re-lock this relic
                                        </Button>
                                    ) : (
                                        <Button
                                            variant='light'
                                            onClick={() =>
                                                setUnlockedRelics(prevState => {
                                                    return unlockRelicInState(prevState, selectedRelic);
                                                })
                                            }
                                        >
                                            Unlock this relic
                                        </Button>
                                    ))}
                            </React.Fragment>
                        }
                    />
                ) : (
                    <p className='m-1'>Select a relic to view more information or unlock it.</p>
                )}
            </div>
        </Card>
    );
}
