import React from 'react';
import Card from '../components/common/Card';
import Separator from '../components/common/Separator';
import PageWrapper from '../components/PageWrapper';

export default function Faq() {
  const emphasisedText = 'text-accent font-semibold';
  return (
    <PageWrapper>
      <div className='container lg:max-w-[768px] mx-auto'>
        <Card>
          <Card.Header className=''>
            <p className='text-accent font-bold text-center small-caps text-2xl tracking-widest'>
              FREQUENTLY ASKED QUESTIONS
            </p>
            <p className='text-accent font-semibold text-center'>
              If your question is missing, come ask us in <Link text='discord' href='https://discord.gg/GQ5kVyU' />!
            </p>
          </Card.Header>
          <Card.Body>
            <Separator />
            <Header>How do I use the plugin on OpenOSRS / some other client?</Header>
            <Paragraph>
              OS League Tools <span className={emphasisedText}>does not</span> officially support any clients other than
              RuneLite.
            </Paragraph>
            <Paragraph>
              If the plugin is broken on the client you are using, it is most likely caused by an out-of-date version.
              Generally this will be synced within a day or two, but it is outside my control. For the most stable
              experience, use the official RuneLite client only.
            </Paragraph>
            <Separator />
            <Header>How do I import tasks from the plugin to the site?</Header>
            <Paragraph>
              <ol>
                <li>
                  1. Click the sidebar icon to open the Tasks Tracker plugin panel. Make sure "Leagues IV: Trailblazer
                  Reloaded" is selected on the dropdown menu.
                </li>
                <li>
                  2. Click the "Export" button at the bottom of the panel. Your task data will be automatically copied
                  to your clipboard.
                </li>
                <li>
                  3. Open https://www.osleague.tools and go to Manage Data -{'>'} Import. Paste your data into the text
                  box and click "Sync".
                </li>
              </ol>
            </Paragraph>
            <Separator />
            <Header>How do I export my to-do list to the plugin?</Header>
            <Paragraph>
              <ol>
                <li>
                  1. Open https://www.osleague.tools and go to Manage Data -{'>'} Export. Click on the text box to copy
                  your data to the clipboard.
                </li>
                <li>
                  2. On Runelite, click the sidebar icon to open the Tasks Tracker plugin panel. Make sure "Leagues IV:
                  Trailblazer Reloaded" is selected on the dropdown menu.
                </li>
                <li>3. Click the "Import" button at the bottom of the panel and paste into the text box.</li>
              </ol>
            </Paragraph>
            <Separator />
            <Header>Importing tasks isn't working / Tasks aren't showing complete when they should</Header>
            <Paragraph>
              First, double check that you have the latest plugin version. You can see this by searching for{' '}
              <span className={emphasisedText}>Task Tracker</span> in the plugin hub. If it has an option to update,
              click it and retry your export.
            </Paragraph>
            <Paragraph>
              As a last resort, you can also try:
              <ol>
                <li>1. Rebooting the runelite client and/or reinstalling the plugin</li>
                <li>2. Clear your browser data on the website to start fresh</li>
              </ol>
            </Paragraph>
            <Paragraph>
              If none of that helped, send a bug report (use the Feedback option in the top right menu) with as much
              information as you can, or come by the <Link text='discord' href='https://discord.gg/GQ5kVyU' /> to ask
              for help.
            </Paragraph>
            <Separator />
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
