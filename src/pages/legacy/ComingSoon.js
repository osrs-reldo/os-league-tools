import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { getContentWidthClass } from '../../util/legacy/settings-util';

export default function ComingSoon() {
    return (
        <div className={getContentWidthClass()}>
            <Card bg='dark' text='white' className='mt-3'>
                <h1 className='mt-2 light-text text-center'>OS LEAGUE TOOLS WILL RETURN!</h1>
            </Card>

            <CardDeck>
                <Card bg='dark' text='white' className='mt-3'>
                    <h3 className='mt-2 light-text text-center'>Yes, we are coming back for leagues 3!</h3>
                    <div className='d-flex flex-column text-center m-4'>
                        <p>
                            There's a lot to do before then though. The site is being rewritten from the ground up to
                            support all the things you've been asking for:
                        </p>
                        <p>
                            <div className='mb-1'>
                                <strong>New and improved UI:</strong>
                            </div>
                            <div>
                                Faster, snappier, more compact, and more customizable. Yes, there will even be a light
                                mode.
                            </div>
                        </p>
                        <p>
                            <div className='mb-1'>
                                <strong>User login:</strong>
                            </div>
                            <div>
                                Sync your data across browsers without manually importing and exporting. Alt-scapers,
                                got you covered: this will include multiple character support.
                            </div>
                        </p>
                        <p>
                            <div className='mb-1'>
                                <strong>Revamped Runelite plugin:</strong>
                            </div>
                            <div>
                                Link your OS League account with Runelite for effortless syncing.{' '}
                                <i>Pending discussion and approval from Runelite team.</i>
                            </div>
                        </p>
                        <p>
                            <div className='mb-1'>
                                <strong>More tools and trackers:</strong>
                            </div>
                            <div>
                                Quests! Achievement and combat diaries! <i>Theeeee</i> collection log! Plus all new
                                calculators for every skill, with much-requested features like a configurable "from
                                scratch" mode, and better support for activities with variable exp rates like barbarian
                                fishing and minigames.
                            </div>
                        </p>
                        <p>
                            <div className='mb-1'>
                                <strong>Expansion to the main game:</strong>
                            </div>
                            <div>
                                Kind of a shame to waste all this effort for only a couple months each year, isn't it?
                                I'll be rewriting everything with main-game support in mind, so keep an eye out for a
                                new site launching soon with all your favorite tools, trackers, and calculators for your
                                main account.
                            </div>
                        </p>
                        <p>
                            <div className='mb-1'>
                                <strong>And more...</strong>
                            </div>
                            <div>
                                As usual, the <a href='https://discord.gg/GQ5kVyU'>OS Leagues discord</a> is the place
                                to track changes, announcements, and make suggestions. Come by if you're interested in
                                following the progress and maybe even helping out! Currently things aren't yet in a
                                stable enough state for contributors, but I'll be announcing in the discord when that
                                changes.
                            </div>
                        </p>
                    </div>
                </Card>
                <Card bg='dark' text='white' className='mt-3'>
                    <h3 className='mt-2 light-text text-center'>Leagues 3 announcement</h3>
                    <p className='text-center m-3'>
                        <iframe
                            title='Leagues 3 announcement on Twitch'
                            src='https://player.twitch.tv/?video=v1104047132&time=1h14m27s&parent=localhost&parent=www.osleague.tools&autoplay=false'
                            width='100%'
                            height='500'
                            allowFullScreen
                        />
                    </p>
                </Card>
            </CardDeck>
        </div>
    );
}
