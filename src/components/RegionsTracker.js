import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ProgressBar from "./UnlockProgressBar";
import RelicCheckImg from '../resources/img/relic-check.png';
import { MAX_TASKS, REGIONS, REGION_UNLOCKS, isRegionUnlocked, INITIAL_REGIONS_STATE } from '../util/region-util';
import RegionMap from "./RegionMap";
import regionsData from '../resources/regionsData.json';
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from "../util/browser-util";
import _ from 'lodash';

export default function RegionsTracker({totalTasks}) {
    const [selectedRegion, setSelectedRegion] = useState("Misthalin");
    const [unlockedRegions, setUnlockedRegions, refreshRegionState] = useLocalStorage(LOCALSTORAGE_KEYS.UNLOCKED_REGIONS, INITIAL_REGIONS_STATE);

    return (
        <React.Fragment>
            <Card bg='dark' text='white' className="mt-3">
                <h1 className="m-3 text-center">{totalTasks + ' Tasks complete - 10 To Next Region Unlock'}</h1>
                <ProgressBar
                    curValue={totalTasks}
                    maxValue={MAX_TASKS}
                    steps={REGION_UNLOCKS}
                    stepImage={<img src={RelicCheckImg} alt='' height={30} />}
                />
            </Card>

            <Card bg='dark' text='white' className="mt-3">
                <Container fluid>
                    <Row>
                        <Col className='text-center'>
                            Select a region to view more information or unlock it:
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            {REGIONS.map(regionName =>
                                <Button
                                    className='m-3'
                                    variant={selectedRegion === regionName ? 'light' : 'dark'}
                                    onClick={() => setSelectedRegion(regionName)}
                                >
                                    {regionName}
                                </Button>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Card>

            <Card bg='dark' text='white' className="mt-3">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className='m-3'>
                                <RegionMap unlockedRegions={unlockedRegions} />
                            </div>
                        </Col>
                        <Col className={'m-2'} sm={4}>
                            <div className='text-center mb-2'>
                                <h3>{selectedRegion}</h3>
                                {!INITIAL_REGIONS_STATE.includes(selectedRegion) && (
                                    isRegionUnlocked(selectedRegion, unlockedRegions) ?
                                        <Button
                                            variant='outline-light'
                                            onClick={() => {
                                                setUnlockedRegions(prevState => _.pull(prevState, selectedRegion));
                                                refreshRegionState();
                                            }}
                                        >
                                            Re-lock this region
                                        </Button>
                                        :
                                        <Button variant='light' onClick={() => setUnlockedRegions(prevState => [...prevState, selectedRegion])}>
                                            Unlock this region
                                        </Button>
                                    )
                                }
                            </div>
                            <div className={'relic-table p-2'} style={{ maxHeight: '500px', overflowY: 'scroll' }}>

                                <h5>Overview:</h5>
                                {regionsData[selectedRegion].overview}

                                {regionsData[selectedRegion].travel &&
                                    <React.Fragment>
                                        <br /><br />
                                        The following travel options are restricted unless you have access to the appropriate area:
                                        <ul>
                                            {regionsData[selectedRegion].travel.map(listItem => <li>{listItem}</li>)}
                                        </ul>
                                    </React.Fragment>
                                }

                                <h5>Key Info:</h5>

                                Notable Settlements:
                                <ul>
                                    {regionsData[selectedRegion].settlements.map(listItem => <li>{listItem}</li>)}
                                </ul>

                                Notable combat-related activities:
                                <ul>
                                    {regionsData[selectedRegion].combatActivities.map(listItem => <li>{listItem}</li>)}
                                </ul>

                                Notable non-combat activities:
                                <ul>
                                    {regionsData[selectedRegion].nonCombatActivities.map(listItem => <li>{listItem}</li>)}
                                </ul>

                                {regionsData[selectedRegion].shops &&
                                    <React.Fragment>
                                        Notable shops:
                                        <ul>
                                            {regionsData[selectedRegion].shops.map(listItem => <li>{listItem}</li>)}
                                        </ul>
                                    </React.Fragment>
                                }

                                All Slayer Masters will assign tasks from the same Slayer list and assign the same number of Slayer Points on task completion.
                                Slayer tasks will still respect Slayer and Combat Level requirements.
                                <br /><br />
                                Unlocking Misthalin will add the following tasks to your Slayer list:
                                <ul>
                                    {regionsData[selectedRegion].slayerTasks.map(listItem => <li>{listItem}</li>)}
                                </ul>

                                <h5>Unlocks:</h5>

                                The following quests are automatically completed but will not reward any completion XP:
                                <ul>
                                    {regionsData[selectedRegion].questUnlocks.map(listItem => <li>{listItem}</li>)}
                                </ul>

                                {regionsData[selectedRegion].diaryUnlocks &&
                                    <React.Fragment>
                                        {regionsData[selectedRegion].diaryUnlocks.map(diaryData => (
                                            <React.Fragment>
                                                The following tasks in the {diaryData.area} Achievement Diary are automatically completed.
                                                <br /><br />
                                                Easy Tasks:
                                                <ul>
                                                    {diaryData.easyTasks.map(listItem => <li>{listItem}</li>)}
                                                </ul>
                                                Medium Tasks:
                                                <ul>
                                                    {diaryData.medTasks.map(listItem => <li>{listItem}</li>)}
                                                </ul>
                                                Hard Tasks:
                                                <ul>
                                                    {diaryData.hardTasks.map(listItem => <li>{listItem}</li>)}
                                                </ul>
                                                Elite Tasks:
                                                <ul>
                                                    {diaryData.eliteTasks.map(listItem => <li>{listItem}</li>)}
                                                </ul>
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                }

                                <h5>Drops:</h5>

                                The drops listed below are affected by the drop rate modifier perks granted by passive Relic unlocks.
                                Drop rates affected are always rounded down and are not tied to area unlocks, this list represents the key drops affected in {selectedRegion}.
                                <ul>
                                    {regionsData[selectedRegion].notableDrops.map(listItem => <li>{listItem}</li>)}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </React.Fragment>
    );
}