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
                <li>1. Install "Tasks Tracker" plugin from the plugin hub and open the sidebar panel</li>
                <li>2. Select "League IV: Trailblazer Reloaded" from the dropdown</li>
                <li>3. Open your ingame task menu, check that all filters are set to All</li>
                <li>4. Click the 'Export' button (bottom of plugin panel) to copy your data</li>
                <li>
                  5. On the website, click the RL icon on the top right. Paste the exported data in the box and click
                  Sync
                </li>
              </ol>
            </Paragraph>
            <Separator />
            <Header>How do I export my to-do list to the plugin?</Header>
            <Paragraph>
              <ol>
                <li>1. On the website, click the RL icon on the top right</li>
                <li>2. Click on the text box under "Export To-do List" to copy your data</li>
                <li>
                  3. On the plugin, click the Import button (bottom of the plugin sidebar panel) and paste your data
                </li>
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
              If you still have issues, make sure you have followed all of the instructions above for how to import. The
              most important step is to make sure all task filters are set to All when you open your ingame task menu.
              Otherwise, you will only export the tasks that you have filtered.
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
