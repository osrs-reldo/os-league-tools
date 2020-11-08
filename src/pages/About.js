import React from "react";
import { Card, CardDeck } from "react-bootstrap";


export default function About() {
    return (
        <div className="content-wrapper">
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <h1 className="mt-2 light-text text-center">OS LEAGUE TOOLS</h1>
                <p className="text-center">
                    Your hub for all your OSRS leagues needs.
                </p>
            </Card>
            <CardDeck>
                <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                    <h3 className="mt-2 light-text text-center">Features:</h3>
                    <div className="d-flex flex-column text-center mb-2">
                        <div>Plan your relic and area unlocks</div>
                        <div>View, sort, and filter lists of tasks to decide what to do next</div>
                        <div>Create a task to-do list</div>
                        <div>Use calculators to plan your grind</div>
                        <div>Filter and adjust calculators to your liking</div>
                        <div>Integrate your personal league build with calculator settings</div>
                        <div>Catch up on league-related news posts</div>
                        <div>...and more coming soon!</div>
                    </div>
                </Card>
                <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                    <h3 className="mt-2 light-text text-center">About the site:</h3>
                    <div className="text-center p-1">
                        <p>
                            OS League Tools is lovingly crafted by chaiinchomp, a runescape veteran since 2005 and longtime spreadsheet enthusiast.
                        </p>
                        <p>
                            The site is developed in React JS, with images and data from the official OSRS wiki. It is open source - head over to <a href="https://github.com/chaiinchomp/os-league-tools">Github</a> if you're interested in contributing.
                        </p>
                        <p>
                            If you'd like to keep up-to-date on site changes, report bugs, make suggestions, or just hang out, please come by the <a href="https://discord.gg/GQ5kVyU">discord server</a>.
                        </p>
                        <p>
                            You can also message me ingame (RSN: chaiinchomp) where I usually have private chat on.
                        </p>
                    </div>
                </Card>
            </CardDeck>
        </div >
    );
}
