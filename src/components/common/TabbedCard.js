import React, { useState } from 'react';
import Card from './Card';
import { getLayoutSlots } from './layout';

function TabbedCard({ children, defaultActiveTab = null }) {
    const [activeTabId, setActiveTabId] = useState(defaultActiveTab);

    const tabs = getLayoutSlots(children, 'id');
    if (!tabs) {
        return (
            <Card>
                <Card.Body>{children}</Card.Body>
            </Card>
        );
    }

    if (!activeTabId) {
        setActiveTabId(Object.keys(tabs)[0]);
    }

    return (
        <>
            <div className='flex flex-row flex-nowrap gap-x-1 justify-around w-full'>
                {Object.keys(tabs).map(tabId => (
                    <Tab
                        key={tabId}
                        title={tabs[tabId][0].props.title}
                        active={tabId === activeTabId}
                        onClick={() => setActiveTabId(tabId)}
                    />
                ))}
            </div>
            <Card corners='none' className='h-full grow'>
                <Card.Body>
                    {Object.keys(tabs).map(tabId => (
                        <Content key={tabId} active={tabId === activeTabId}>
                            {tabs[tabId][0]}
                        </Content>
                    ))}
                </Card.Body>
            </Card>
        </>
    );
}

function Tab({ title, onClick, active = false }) {
    const hoverStyle = active ? '' : 'bg-hover cursor-pointer';
    const titleStyle = active ? 'text-accent' : 'text-primary';
    const shadowStyle = active ? 'shadow-top' : 'shadow-top-under';

    return (
        <Card onClick={onClick} corners='rounded-t-md' shadow={shadowStyle} className={`h-full grow ${hoverStyle}`}>
            <Card.Body>
                <span className={`heading-block-md small-caps ${titleStyle}`}>{title}</span>
            </Card.Body>
        </Card>
    );
}

function Content({ children, active = false }) {
    return <div className={active ? '' : 'hidden'}>{children}</div>;
}

function TabWrapper({ id, title, children }) {
    return (
        <div id={id} title={title}>
            {children}
        </div>
    );
}

TabbedCard.Tab = TabWrapper;

export default TabbedCard;
