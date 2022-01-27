import React from 'react';
import Card from '../components/common/Card';
import Separator from '../components/common/Separator';
import PageWrapper from '../components/PageWrapper';

export default function About() {
    const emphasisedText = 'text-accent font-semibold';
    return (
        <PageWrapper>
            <div className='container lg:max-w-[768px] mx-auto'>
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
                        <Header>about</Header>
                        <Paragraph>
                            OS League Tools was originally launched for Trailblazer League by{' '}
                            <Link text='chaiinchomp' href='https://github.com/chaiinchomp' />, a runescape veteran since
                            2005. After spending all of the first league making checklists and custom calculators in a
                            spreadsheet, a website was the obvious next step.
                        </Paragraph>
                        <Paragraph>
                            Thanks to huge community support and positive feedback, we're back for Leagues 3 with an all
                            new site! A special massive shoutout goes to{' '}
                            <Link text='perterter' href='https://github.com/tylerthardy' />, who developed the
                            accompanying RuneLite plugin, without which I'm sure the site would never have taken off as
                            much as it did.
                        </Paragraph>
                        <Separator />
                        <Header>contributing</Header>
                        <Paragraph>
                            If you're interested in supporting the site's development, you can do so by (most
                            importantly) continuing to use it and spread the word to others! This is a passion project
                            built entirely by volunteers, so the biggest reward is just to see people using what we've
                            created.
                        </Paragraph>
                        <Paragraph>
                            New code contributors are always welcome, too. Check out the source code on{' '}
                            <Link text='github' href='https://github.com/osrs-reldo/os-league-tools' />, and come by the{' '}
                            <span className='text-code'>#development</span> channel in{' '}
                            <Link text='discord' href='https://discord.gg/GQ5kVyU' />
                            to chat, ask questions, and see which features and bugs need help.
                        </Paragraph>
                        <Paragraph>
                            Finally, if you would like to support the site financially, you can drop a few bucks in the{' '}
                            <Link text='tip jar' href='https://ko-fi.com/osleaguetools' />. All funds go directly into
                            paying the site's hosting costs.
                        </Paragraph>
                        <Separator />
                        <Header>what's next</Header>
                        <Paragraph>
                            New features will continue to be added throughout the duration of the league. I plan to
                            continue developing and supporting the site for future leagues as well. Updates,
                            announcements, and previews of new features can all be found in the{' '}
                            <Link text='discord' href='https://discord.gg/GQ5kVyU' />.
                        </Paragraph>
                        <Paragraph>
                            Eventually, the aim is to launch a companion site for the main game, with all the features
                            from the leagues version, plus even more trackers, calculators, and tools. My goal is to
                            create the #1 hub for OSRS completionists, efficiencyscape nerds, staunch anti-efficiency
                            activists, noobs, main accounts, snowflake ironmen, and everyone in between. It's hard to
                            put a launch date on it since the development speed depends entirely on how much free time I
                            have IRL, but it is coming (...someday)!
                        </Paragraph>
                        <Separator />
                        <Header>credits</Header>
                        <div className='m-2 grid md:grid-cols-4 grid-cols-2'>
                            <span className={`${emphasisedText} whitespace-nowrapp md:text-right`}>
                                developed using:
                            </span>
                            <ul className='col-span-3 list-disc text-sm mb-3 ml-6'>
                                <li>React/JS with Tailwind CSS</li>
                                <li>
                                    Additional libraries: react-redux, react-table, lodash, match-sorter,
                                    immutability-helper, react-dnd, react-step-progress-bar, tailwindcss-multi-theme
                                </li>
                            </ul>
                            <span className={`${emphasisedText} whitespace-nowrap md:text-right`}>with help from:</span>
                            <ul className='col-span-3 list-disc text-sm ml-6'>
                                <li>
                                    All of the awesome people who have contributed code, bug reports, and feedback in
                                    the <Link text='discord' href='https://discord.gg/GQ5kVyU' newTab />
                                </li>
                                <li>
                                    Massive amount of data, images, and more from the{' '}
                                    <Link text='Official OSRS Wiki' href='https://oldschool.runescape.wiki/' />
                                    (with help figuring out how to parse the wiki API from{' '}
                                    <Link
                                        text='osrsbox'
                                        href='https://www.osrsbox.com/blog/2018/12/12/scraping-the-osrs-wiki-part1/'
                                    />
                                    )
                                </li>
                                <li>
                                    Lots of helpful research and data compilations from the folks in the{' '}
                                    <Link text='OSRS Leagues Discord' href='http://discord.osrs-leagues.com/' />
                                </li>
                                <li>
                                    Thanks to /u/NoGoodOnesRemain and /u/lollipop283 for their work on the{' '}
                                    <Link
                                        text='Shattered Relics Spreadsheet'
                                        href='https://docs.google.com/spreadsheets/d/1vovOVvgeFszbwEP86zajz1ubT8C5NelXqNGTUAhC_Ck/edit#gid=728016874'
                                    />{' '}
                                    and for kindly allowing me to copy their homework and use their nicely formatted
                                    data!
                                </li>
                                <li>
                                    Icons from <Link text='google fonts' href='https://fonts.google.com/icons' />
                                    (+ RuneLite icon from <Link text='runelite.net' href='https://runelite.net/' />)
                                </li>
                                <li>
                                    Some obscure numbers used in skill calculators from tweeting questions at{' '}
                                    <Link text='Mod Ash' href='https://twitter.com/JagexAsh' />
                                </li>
                                <li>
                                    ...and all of you{' '}
                                    <span className={`icon-base inline align-sub ${emphasisedText}`}>favorite</span>
                                </li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </PageWrapper>
    );
}

function Header({ children }) {
    return <p className='text-accent font-semibold text-center tracking-widest m-2'>{children}</p>;
}

function Link({ text, href }) {
    return (
        <a href={href} target='_blank' rel='noreferrer' className='hover:underline text-accent font-semibold'>
            {text}
        </a>
    );
}

function Paragraph({ children }) {
    return <p className='indent-8 m-2 text-sm'>{children}</p>;
}
