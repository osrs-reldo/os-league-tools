import React from 'react';
import Card from '../components/common/Card';
import Separator from '../components/common/Separator';
import PageWrapper from '../components/PageWrapper';

export default function About() {
    const emphasisedText = 'text-tl-sage dark:text-tl-lime font-semibold';
    return (
        <PageWrapper>
            <div className='container max-w-[1024px] mx-auto'>
                <Card>
                    <Card.Header className=''>
                        <p className='text-accent font-bold text-center small-caps text-2xl tracking-widest'>
                            OS-LEAGUE-TOOLS
                        </p>
                        <p className='text-accent font-semibold text-center'>
                            open source trackers, tools, and more for Old School Runescape's seasonal leagues gamemode
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <Separator />
                        <p className='text-accent font-semibold text-center tracking-widest m-2'>about</p>
                        <p className='indent-8 m-2'>
                            OS League Tools was originally launched for Trailblazer League by{' '}
                            <span className={emphasisedText}>chaiinchomp</span>, a runescape veteran since 2005. After
                            spending all of the first league making checklists and custom calculators in a spreadsheet,
                            a website was the obvious next step.
                        </p>
                        <p className='indent-8 m-2'>
                            Thanks to huge community support and positive feedback, we're back for Leagues 3 with an all
                            new site! A special massive shoutout goes to{' '}
                            <span className={emphasisedText}>perterter</span>, who developed the accompanying RuneLite
                            plugin, without which I'm sure the site would never have taken off as much as it did.
                        </p>
                        <Separator />
                        <p className='text-accent font-semibold text-center tracking-widest m-2'>contributing</p>
                        <p className='indent-8 m-2'>
                            If you're interested in supporting the site's development, you can do so by (most
                            importantly) continuing to use it and spread the word to others! This is a passion project
                            built entirely by volunteers, so the biggest reward is just to see people using what we've
                            created.
                        </p>
                        <p className='indent-8 m-2'>
                            New code contributors are always welcome, too. Check out the source code on{' '}
                            <a
                                href='https://github.com/chaiinchomp/os-league-tools'
                                target='_blank'
                                rel='noreferrer'
                                className={`hover:underline ${emphasisedText}`}
                            >
                                github
                            </a>
                            , and come by the <span className='text-code'>#development</span> channel in{' '}
                            <a
                                href='https://discord.gg/GQ5kVyU'
                                target='_blank'
                                rel='noreferrer'
                                className={`hover:underline ${emphasisedText}`}
                            >
                                discord
                            </a>{' '}
                            to chat, ask questions, and see which features and bugs need help.
                        </p>
                        <p className='indent-8 m-2'>
                            Finally, if you would like to support us financially, you can drop a few bucks in our{' '}
                            <a
                                href='https://ko-fi.com/chaiinchomp'
                                target='_blank'
                                rel='noreferrer'
                                className={`hover:underline ${emphasisedText}`}
                            >
                                tip jar
                            </a>
                            . All funds will go directly into supporting the site's hosting costs.
                        </p>
                        <Separator />
                        <p className='text-accent font-semibold text-center tracking-widest m-2'>what's next</p>
                        <p className='indent-8 m-2'>
                            New features will continue to be added throughout the duration of the league. I plan to
                            continue developing and supporting the site for future leagues as well. Updates,
                            announcements, and previews of new features can all be found in our{' '}
                            <a
                                href='https://discord.gg/GQ5kVyU'
                                target='_blank'
                                rel='noreferrer'
                                className={`hover:underline ${emphasisedText}`}
                            >
                                discord
                            </a>
                            .
                        </p>
                        <p className='indent-8 m-2'>
                            Eventually, the aim is to launch a companion site for the main game, with all the features
                            from the leagues version, plus even more trackers, calculators, and tools. My goal is to
                            create the #1 hub for OSRS completionists, efficiencyscape nerds, staunch anti-efficiency
                            activists, noobs, main accounts, snowflake ironmen, and everyone in between. It's hard to
                            put a launch date on it since the development speed depends entirely on how much free time I
                            have IRL, but it is coming (...someday)!
                        </p>
                        <Separator />
                        <p className='text-accent font-semibold text-center tracking-widest m-2'>credits</p>
                        <div className='m-2 grid md:grid-cols-3 grid-cols-2'>
                            <span className={`${emphasisedText} whitespace-nowrap`}>developed with:</span>
                            <ul className='col-span-2 list-disc text-sm mb-3'>
                                <li>React/JS</li>
                                <li>Tailwind CSS</li>
                                <li>
                                    Additional libraries: react-redux, react-table, lodash, match-sorter,
                                    immutability-helper, react-dnd, react-step-progress-bar, tailwindcss-multi-theme
                                </li>
                            </ul>
                            <span className={`${emphasisedText} whitespace-nowrap`}>with help from:</span>
                            <ul className='col-span-2 list-disc text-sm mb-3'>
                                <li>
                                    Massive amount of data, images, and more from the{' '}
                                    <a
                                        href='https://oldschool.runescape.wiki/'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        Official OSRS Wiki
                                    </a>{' '}
                                    (with help figuring out how to parse the wiki API from{' '}
                                    <a
                                        href='https://www.osrsbox.com/blog/2018/12/12/scraping-the-osrs-wiki-part1/'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        osrsbox
                                    </a>
                                    )
                                </li>
                                <li>
                                    Lots of helpful research and data compilations from the folks in the{' '}
                                    <a
                                        href='http://discord.osrs-leagues.com/'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        OSRS Leagues Discord
                                    </a>
                                </li>
                                <li>
                                    Icons from{' '}
                                    <a
                                        href='https://fonts.google.com/icons'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        google fonts
                                    </a>{' '}
                                    (+ RuneLite icon from{' '}
                                    <a
                                        href='http://runelite.net/'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        runelite.net
                                    </a>
                                    )
                                </li>
                                <li>
                                    Some obscure numbers used in skill calculators from tweeting questions at{' '}
                                    <a
                                        href='https://twitter.com/JagexAsh'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        Mod Ash
                                    </a>
                                </li>
                                <li>
                                    All of the awesome people who have contributed code, bug reports, and feedback in
                                    the{' '}
                                    <a
                                        href='https://discord.gg/GQ5kVyU'
                                        target='_blank'
                                        rel='noreferrer'
                                        className={`hover:underline ${emphasisedText}`}
                                    >
                                        discord
                                    </a>
                                </li>
                                <li>
                                    you <span className={`icon-base inline align-sub ${emphasisedText}`}>favorite</span>
                                </li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </PageWrapper>
    );
}
