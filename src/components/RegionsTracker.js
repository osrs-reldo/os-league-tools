import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ProgressBar from "./UnlockProgressBar";
import { MAX_TASKS, REGIONS, REGION_UNLOCKS, isRegionUnlocked, INITIAL_REGIONS_STATE, getTasksToNextRegion } from '../util/region-util';
import RegionMap from "./RegionMap";
import regionsData from '../resources/regionsData.json';
import _ from 'lodash';

export default function RegionsTracker({ totalTasks, unlockedRegions, setUnlockedRegionsCallback }) {
    const [selectedRegion, setSelectedRegion] = useState("Misthalin");
    const tasksToNextRegion = getTasksToNextRegion(totalTasks);

    return (
        <React.Fragment>
            <Card bg='dark' text='white' className="mt-3">
                <h1 className="m-3 text-center">
                    {
                        tasksToNextRegion > 0 ?
                        `${totalTasks} Tasks complete - ${tasksToNextRegion} To Next Region Unlock`
                        : 'All areas unlocked!'
                    }
                </h1>
                <ProgressBar
                    curValue={totalTasks}
                    maxValue={MAX_TASKS}
                    steps={REGION_UNLOCKS}
                />
            </Card>

            <Card bg='dark' text='white' className="mt-3">
                <Container fluid>
                    <Row>
                        <Col>
                            <Container fluid>
                                <Row>
                                    <Col className='text-center'>
                                        <h6 className="mt-2">Select a region to view more information or unlock it:</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-center'>
                                        {REGIONS.map(regionName =>
                                            <Button
                                                key={regionName}
                                                className='m-3'
                                                variant={selectedRegion === regionName ? 'light' : 'outline-light'}
                                                onClick={() => setSelectedRegion(regionName)}
                                            >
                                                {regionName}
                                            </Button>
                                        )}
                                    </Col>
                                </Row>
                            </Container>
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
                                                setUnlockedRegionsCallback(prevState => _.without(prevState, selectedRegion));
                                            }}
                                        >
                                            Re-lock this region
                                        </Button>
                                        :
                                        <Button variant='light' onClick={() => setUnlockedRegionsCallback(prevState => [...prevState, selectedRegion])}>
                                            Unlock this region
                                        </Button>
                                    )
                                }
                            </div>
                            <div className={'relic-table p-2'} style={{ maxHeight: '700px', overflowY: 'scroll' }}>

                                <p>
                                    <h5>Overview:</h5>
                                    {regionsData[selectedRegion].overview}
                                </p>

                                {regionsData[selectedRegion].travel &&
                                    <p>
                                        The following travel options are restricted unless you have access to the appropriate area:
                                        <ul>
                                            {regionsData[selectedRegion].travel.map(listItem => <li key={listItem}>{listItem}</li>)}
                                        </ul>
                                    </p>
                                }

                                <p>
                                    <h5>Key Info:</h5>

                                    Notable Settlements:
                                    <ul>
                                        {regionsData[selectedRegion].settlements.map(listItem => <li key={listItem}>{listItem}</li>)}
                                    </ul>

                                    Notable combat-related activities:
                                    <ul>
                                        {regionsData[selectedRegion].combatActivities.map(listItem => <li key={listItem}>{listItem}</li>)}
                                    </ul>

                                    Notable non-combat activities:
                                    <ul>
                                        {regionsData[selectedRegion].nonCombatActivities.map(listItem => <li key={listItem}>{listItem}</li>)}
                                    </ul>

                                    {regionsData[selectedRegion].shops &&
                                        <React.Fragment>
                                            Notable shops:
                                            <ul>
                                                {regionsData[selectedRegion].shops.map(listItem => <li key={listItem}>{listItem}</li>)}
                                            </ul>
                                        </React.Fragment>
                                    }
                                </p>

                                <p>
                                    All Slayer Masters will assign tasks from the same Slayer list and assign the same number of Slayer Points on task completion.
                                    Slayer tasks will still respect Slayer and Combat Level requirements.
                                </p>

                                <p>
                                    Unlocking Misthalin will add the following tasks to your Slayer list:
                                    <ul>
                                        {regionsData[selectedRegion].slayerTasks.map(listItem => <li key={listItem}>{listItem}</li>)}
                                    </ul>
                                </p>

                                <p>
                                    <h5>Unlocks:</h5>

                                    The following quests are automatically completed but will not reward any completion XP:
                                    <ul>
                                        {regionsData[selectedRegion].questUnlocks.map(listItem => <li key={listItem}>{listItem}</li>)}
                                    </ul>

                                    {regionsData[selectedRegion].diaryUnlocks &&
                                        <React.Fragment>
                                            {regionsData[selectedRegion].diaryUnlocks.map(diaryData => (
                                                <React.Fragment key={diaryData.area}>
                                                    <p>
                                                        The following tasks in the {diaryData.area} Achievement Diary are automatically completed.
                                                    </p>
                                                    <p>
                                                        Easy Tasks:
                                                        <ul>
                                                            {diaryData.easyTasks.map(listItem => <li key={listItem}>{listItem}</li>)}
                                                        </ul>
                                                        Medium Tasks:
                                                        <ul>
                                                            {diaryData.medTasks.map(listItem => <li key={listItem}>{listItem}</li>)}
                                                        </ul>
                                                        Hard Tasks:
                                                        <ul>
                                                            {diaryData.hardTasks.map(listItem => <li key={listItem}>{listItem}</li>)}
                                                        </ul>
                                                        Elite Tasks:
                                                        <ul>
                                                            {diaryData.eliteTasks.map(listItem => <li key={listItem}>{listItem}</li>)}
                                                        </ul>
                                                    </p>
                                                </React.Fragment>
                                            ))}
                                        </React.Fragment>
                                    }
                                </p>

                                <p>
                                    <h5>Drops:</h5>

                                    The drops listed below are affected by the drop rate modifier perks granted by passive Relic unlocks.
                                    Drop rates affected are always rounded down and are not tied to area unlocks, this list represents the key drops affected in {selectedRegion}.
                                    <ul>
                                        {regionsData[selectedRegion].notableDrops.map(listItem => <li key={listItem}>{listItem}</li>)}
                                    </ul>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </React.Fragment>
    );
}