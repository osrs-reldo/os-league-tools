import React from 'react';
import { Card } from 'react-bootstrap';

export default function PluginInfo() {
    return (
        <div className='content-wrapper'>
            <Card bg='dark' text='white' className='m-2 p-2 text-center'>
                <h2 className='mt-2 light-text text-center'>OS League Tools RuneLite Plugin</h2>
                <p>
                    {`OS League Tools has RuneLite integration! The official plugin can export your tasks, regions, and
                    relics to the site so you don't have to input them manually.`}
                </p>
            </Card>
            <Card bg='dark' text='white' className='m-2 p-2 text-center'>
                <h4>Instructions:</h4>
                <ol>
                    <li>
                        Install the "OsLeague" plugin using the{' '}
                        <a href='https://github.com/runelite/runelite/wiki/Information-about-the-Plugin-Hub'>
                            plugin hub
                        </a>
                    </li>
                    <li>
                        Go to the Leagues tab ingame and open/close each interface to make sure your data is up-to-date.
                    </li>
                    <li>Click on the OS League Tools checkmark icon on the top toolbar to copy your data</li>
                    <li>
                        Open the Manage Data window (top right) and paste the copied data in to the Runelite Import tab
                    </li>
                </ol>

                <a href='https://user-images.githubusercontent.com/17709869/98069290-0535cd00-1e24-11eb-90a1-49a8a04b7072.gif'>
                    <img
                        style={{ width: '100%', maxWidth: '1069px' }}
                        src='https://user-images.githubusercontent.com/17709869/98069290-0535cd00-1e24-11eb-90a1-49a8a04b7072.gif'
                        alt=''
                    />
                </a>
                <p className='small mt-0'>
                    <i>(click to enlarge gif)</i>
                </p>
            </Card>
        </div>
    );
}
