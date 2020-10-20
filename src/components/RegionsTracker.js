import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ProgressBar from "./UnlockProgressBar";
import RelicCheckImg from '../resources/img/relic-check.png';
import { MAX_TASKS, REGION_UNLOCKS } from '../util/region-util';
import RegionMap from "./RegionMap";

export default function RegionsTracker({totalTasks}) {


    return (
        <Card bg='dark' text='white' className="mt-3">
            <h1 className="m-3 text-center">{totalTasks + ' Tasks complete - 10 To Next Region Unlock'}</h1>
            <ProgressBar
                curValue={totalTasks}
                maxValue={MAX_TASKS}
                steps={REGION_UNLOCKS}
                stepImage={<img src={RelicCheckImg} alt='' height={50} />}
            />
            <Container fluid>
                <Row>
                    <Col>
                        <RegionMap />
                    </Col>
                    <Col className={'relic-table m-2'} sm={4}>
                        <div style={{ maxHeight: '600px', overflowY: 'scroll' }}>
                            <h3>Misthalin</h3>

                            <h5>Overview:</h5>
                            The Misthalin area covers the entire Kingdom of Misthalin along with Fossil Island, Zanaris and the Abyss.
                            Instances of areas in Misthalin and underground areas with an entrance in Misthalin will also be included.
                            Access to Al-Kharid, Port Sarim and the western exit of Barbarian Village are restricted and prevented through the use of magical barriers.
                            All transportation and teleportation through Charter Ships, Customs Officers, Gnome Gliders, Fairy Rings, etc will require you to have unlocked access to whichever area the destination is within.
                            <br /><br />
                            The following travel options are restricted unless you have access to the appropriate area:
                            <ul>
                                <li>The gate between Lumbridge and Al-Kharid</li>
                                <li>The grapple shortcut between Lumbridge and Al-Kharid</li>
                                <li>The stepping stones between Lumbridge Swamp and the Kalphite Lair</li>
                                <li>The under-wall shortcut between Draynor Village and Port Sarim</li>
                                <li>The underground sections of the Paterdomus Temple</li>
                                <li>The railing shortcut between the Paterdomus Temple and Canifis</li>
                            </ul>

                            <h5>Key Info:</h5>

                            Notable Settlements:
                            <ul>
                                <li>Barbarian Village</li>
                                <li>Draynor Village</li>
                                <li>Edgeville</li>
                                <li>Fossil Island</li>
                                <li>Lumbridge</li>
                                <li>The Digsite</li>
                                <li>Varrock</li>
                                <li>Zanaris</li>
                            </ul>

                            Notable combat-related activities:
                            <ul>
                                <li>Abyssal Sire</li>
                                <li>Bryophyta</li>
                                <li>Chaeldar Slayer Tasks</li>
                                <li>Edgeville Dungeon</li>
                                <li>Fossil Island Wyverns</li>
                                <li>Lumbridge Swamp Caves</li>
                                <li>Obor</li>
                                <li>Stronghold of Security</li>
                                <li>Vanakka Slayer Tasks</li>
                            </ul>

                            Notable non-combat activities:
                            <ul>
                                <li>Champions' Guild</li>
                                <li>Draynor Village Rooftop Agility Course</li>
                                <li>Fossil Island Herbiboar</li>
                                <li>Fossil Island Hardwoord Tree Patches</li>
                                <li>Fossil Island Sulliusceps Woodcutting</li>
                                <li>Fossil Island Volcanic Mine</li>
                                <li>Puro-Puro Implings</li>
                                <li>Cosmic, Earth and Water Altars</li>
                                <li>Varrock Rooftop Agility Course</li>
                            </ul>

                            All Slayer Masters will assign tasks from the same Slayer list and assign the same number of Slayer Points on task completion.
                            Slayer tasks will still respect Slayer and Combat Level requirements.
                            <br /><br />
                            Unlocking Misthalin will add the following tasks to your Slayer list:
                            <ul>
                                <li>Cows (while under level 50 Combat)</li>
                                <li>Goblins (while under level 50 Combat)</li>
                                <li>Minotaurs (while under level 50 Combat)</li>
                                <li>Zombies (while under level 50 Combat)</li>
                                <li>Abyssal Demons</li>
                                <li>Ankou</li>
                                <li>Fossil Island Wyverns</li>
                                <li>Hill Giants</li>
                                <li>Moss Giants</li>
                                <li>Spiders</li>
                                <li>Sourhogs (after completing a Porcine of Interest)</li>
                            </ul>

                            <h5>Unlocks:</h5>

                            The following quests are automatically completed but will not reward any completion XP:
                            <ul>
                                <li>Dragon Slayer</li>
                                <li>Druidic Ritual</li>
                                <li>Elemental Workshop I</li>
                                <li>Tears of Guthix</li>
                                <li>Bone Voyage Dig Site</li>
                                <li>Fairytale II - Cure a Queen</li>
                                <li>Fairytale I - Growing Pains</li>
                                <li>Lost City</li>
                                <li>Nature Spirit</li>
                                <li>Priest in Peril</li>
                                <li>The Restless Ghost</li>
                            </ul>

                            The following tasks in the Lumbridge & Draynor Achievement Diary are automatically completed.
                            Easy Tasks:
                            <ul>
                                <li>Catch some Anchovies in Al-Kharid</li>
                                <li>Mine some iron ore at the Al-Kharid mine</li>
                            </ul>
                            Medium Tasks:
                            <ul>
                                <li>Complete a lap of the Al-Kharid Rooftop Course</li>
                                <li>Grapple across the River Lum</li>
                                <li>Craft some lava runes at the fire altar in Al-Kharid</li>
                                <li>Purchase an upgraded device from Ava</li>
                            </ul>
                            Hard Tasks:
                            <ul>
                                <li>Cast Bones to Peaches in Al-Kharid Palace</li>
                                <li>Recharge your prayer at the Duel Arena with Smite activated</li>
                            </ul>
                            Elite Tasks:
                            <ul>
                                <li>Chop some magic logs at the magic training arena</li>
                                <li>Steal from a Dorgesh-Kaan rich chest</li>
                                <li>Pickpocket Movario on the Dorgesh-Kaan Agility Course</li>
                                <li>Perform the Quest Point cape emote in the Wise Old Man's house</li>
                            </ul>

                            The following tasks in the Varrock Diary are automatically completed:
                            Medium Tasks:
                            <ul>
                                <li>Select a colour for your kitten</li>
                                <li>Use the Spirit tree in the north-eastern corner of Grand Exchange</li>
                                <li>Pick a white tree fruit</li>
                                <li>Use the balloon to travel from Varrock</li>
                            </ul>
                            Hard Tasks:
                            <ul>
                                <li>Trade furs with the Fancy Dress Seller for a Spottier cape and equip it</li>
                                <li>Teleport to Paddewwa</li>
                            </ul>
                            Elite Tasks:
                            <ul>
                                <li>Use Lunar magic to make 20 mahogany planks in the Varrock Lumber Yard</li>
                                <li>Smith and fletch ten rune darts within Varrock</li>
                            </ul>

                            <h5>Drops:</h5>

                            The drops listed below are affected by the drop rate modifier perks granted by passive Relic unlocks.
                            Drop rates affected are always rounded down and are not tied to area unlocks, this list represents the key drops affected in Misthalin.
                            <ul>
                                <li>Abyssal Whip from Abyssal Demons</li>
                                <li>Unsired from Abyssal Sire</li>
                                <li>Wyvern Visage from all sources</li>
                                <li>Draconic Visage from all sources</li>
                                <li>Dragon platelegs/plateskirts from all sources</li>
                                <li>Dragon Limbs from all sources</li>
                                <li>Dragon Metal Slice from Adamant dragons</li>
                                <li>Dragon metal Lump from Rune dragons</li>
                                <li>Hill Giant Club from Obor</li>
                                <li>Bryophyta's Essence from Bryophyta</li>
                                <li>Beginner clue unique items</li>
                                <li>Easy clue unique items</li>
                                <li>Medium clue unique items</li>
                                <li>Hard clue unique items</li>
                                <li>Elite clue unique items</li>
                                <li>Master clue unique items</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}