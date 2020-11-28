import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';
import ProgressBar from './UnlockProgressBar';
import {
    MAX_TASKS,
    REGIONS,
    REGION_UNLOCKS,
    isRegionUnlocked,
    INITIAL_REGIONS_STATE,
    getTasksToNextRegion,
} from '../util/region-util';
import RegionMap from './RegionMap';
import regionsData from '../resources/regionsData.json';

export default function RegionsTracker({ totalTasks, unlockedRegions, setUnlockedRegionsCallback }) {
    const [selectedRegion, setSelectedRegion] = useState('Misthalin');
    const tasksToNextRegion = getTasksToNextRegion(totalTasks);

    return (
        <>
            <Card bg='dark' text='white' className='mt-3'>
                <h1 className='m-3 text-center'>
                    {tasksToNextRegion > 0
                        ? `${totalTasks} Tasks complete - ${tasksToNextRegion} To Next Region Unlock`
                        : 'All areas unlocked!'}
                </h1>
                <ProgressBar curValue={totalTasks} maxValue={MAX_TASKS} steps={REGION_UNLOCKS} />
            </Card>

            <Card bg='dark' text='white' className='mt-3'>
                <Container fluid>
                    <Row>
                        <Col>
                            <Container fluid>
                                <Row>
                                    <Col className='text-center'>
                                        <h6 className='mt-2'>Select a region to view more information or unlock it:</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-center'>
                                        {REGIONS.map(regionName => (
                                            <Button
                                                key={regionName}
                                                className='m-1'
                                                variant={selectedRegion === regionName ? 'light' : 'outline-light'}
                                                onClick={() => setSelectedRegion(regionName)}
                                            >
                                                {regionName}
                                            </Button>
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                            <div className='m-3'>
                                <RegionMap unlockedRegions={unlockedRegions} />
                            </div>
                        </Col>
                        <Col className="m-2" sm={4}>
                            <div className='text-center mb-2'>
                                <h3>{selectedRegion}</h3>
                                {!INITIAL_REGIONS_STATE.includes(selectedRegion) &&
                                    (isRegionUnlocked(selectedRegion, unlockedRegions) ? (
                                        <Button
                                            variant='outline-light'
                                            onClick={() => {
                                                setUnlockedRegionsCallback(prevState =>
                                                    _.without(prevState, selectedRegion)
                                                );
                                            }}
                                        >
                                            Re-lock this region
                                        </Button>
                                    ) : (
                                        <Button
                                            variant='light'
                                            onClick={() =>
                                                setUnlockedRegionsCallback(prevState => [...prevState, selectedRegion])
                                            }
                                        >
                                            Unlock this region
                                        </Button>
                                    ))}
                            </div>
                            <div className="relic-table-cell p-2" style={{ maxHeight: '700px', overflowY: 'scroll' }}>
                                <h5>Overview:</h5>
                                <p>{regionsData[selectedRegion].overview}</p>
                                {regionsData[selectedRegion].travel && (
                                    <>
                                        <p>
                                            The following travel options are restricted unless you have access to the
                                            appropriate area:
                                        </p>
                                        <ul>
                                            {regionsData[selectedRegion].travel.map(listItem => (
                                                <li key={listItem}>{listItem}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <h5>Key Info:</h5>
                                <p>Notable Settlements:</p>
                                <ul>
                                    {regionsData[selectedRegion].settlements.map(listItem => (
                                        <li key={listItem}>{listItem}</li>
                                    ))}
                                </ul>
                                Notable combat-related activities:
                                <ul>
                                    {regionsData[selectedRegion].combatActivities.map(listItem => (
                                        <li key={listItem}>{listItem}</li>
                                    ))}
                                </ul>
                                Notable non-combat activities:
                                <ul>
                                    {regionsData[selectedRegion].nonCombatActivities.map(listItem => (
                                        <li key={listItem}>{listItem}</li>
                                    ))}
                                </ul>
                                {regionsData[selectedRegion].shops && (
                                    <>
                                        Notable shops:
                                        <ul>
                                            {regionsData[selectedRegion].shops.map(listItem => (
                                                <li key={listItem}>{listItem}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                <p>
                                    All Slayer Masters will assign tasks from the same Slayer list and assign the same
                                    number of Slayer Points on task completion. Slayer tasks will still respect Slayer
                                    and Combat Level requirements.
                                </p>
                                <p>Unlocking Misthalin will add the following tasks to your Slayer list:</p>
                                <ul>
                                    {regionsData[selectedRegion].slayerTasks.map(listItem => (
                                        <li key={listItem}>{listItem}</li>
                                    ))}
                                </ul>
                                <h5>Unlocks:</h5>
                                <p>
                                    The following quests are automatically completed but will not reward any completion
                                    XP:
                                </p>
                                <ul>
                                    {regionsData[selectedRegion].questUnlocks.map(listItem => (
                                        <li key={listItem}>{listItem}</li>
                                    ))}
                                </ul>
                                {regionsData[selectedRegion].diaryUnlocks && (
                                    <>
                                        {regionsData[selectedRegion].diaryUnlocks.map(diaryData => (
                                            <React.Fragment key={diaryData.area}>
                                                <p>
                                                    {`The following tasks in the ${diaryData.area} Achievement Diary are
                                                    automatically completed.`}
                                                </p>
                                                <p>Easy Tasks:</p>
                                                <ul>
                                                    {diaryData.easyTasks.map(listItem => (
                                                        <li key={listItem}>{listItem}</li>
                                                    ))}
                                                </ul>
                                                <p>Medium Tasks:</p>
                                                <ul>
                                                    {diaryData.medTasks.map(listItem => (
                                                        <li key={listItem}>{listItem}</li>
                                                    ))}
                                                </ul>
                                                <p>Hard Tasks:</p>
                                                <ul>
                                                    {diaryData.hardTasks.map(listItem => (
                                                        <li key={listItem}>{listItem}</li>
                                                    ))}
                                                </ul>
                                                <p>Elite Tasks:</p>
                                                <ul>
                                                    {diaryData.eliteTasks.map(listItem => (
                                                        <li key={listItem}>{listItem}</li>
                                                    ))}
                                                </ul>
                                            </React.Fragment>
                                        ))}
                                    </>
                                )}
                                <h5>Drops:</h5>
                                <p>
                                    {`The drops listed below are affected by the drop rate modifier perks granted by
                                    passive Relic unlocks. Drop rates affected are always rounded down and are not tied
                                    to area unlocks, this list represents the key drops affected in ${selectedRegion}.`}
                                </p>
                                <ul>
                                    {regionsData[selectedRegion].notableDrops.map(listItem => (
                                        <li key={listItem}>{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
}
