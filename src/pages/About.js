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
                    <div className="text-center">
                        <ul>
                            <li>Plan your relic and area unlocks</li>
                            <li>View, sort, and filter lists of tasks to decide what to do next</li>
                            <li>Create a task to-do list</li>
                            <li>Use calculators to plan your grind</li>
                            <li>Filter and adjust calculators to your liking</li>
                            <li>Integrate your personal league build with calculator settings</li>
                            <li>Catch up on league-related news posts</li>
                            <li>...and more coming soon!</li>
                        </ul>
                    </div>
                </Card>
                <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                    <h3 className="mt-2 light-text text-center">About the site:</h3>
                    <div className="text-center p-1">
                        <p>
                            OS League Tools is lovingly crafted by chaiinchomp, a runescape veteran since 2005 and longtime spreadsheet enthusiast.
                        </p>
                        <p>
                            The site is developed in React JS with components from react-bootstrap and react-bootstrap-table-2, and images from the official OSRS wiki. It will soon be open source, once I tidy up a few things!
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
