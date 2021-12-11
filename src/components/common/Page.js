import React from 'react';
import NavBar from '../NavBar';
import { getLayoutSlots, LayoutSlot } from './layout';

function DefaultPage({ children, sidebarPosition = 'left' }) {
    const { banner, sidebar, body } = getLayoutSlots(children);
    return (
        <div className='bg-gray-200 w-full h-full'>
            <NavBar />
            <div className='mt-5 page-wrapper'>
                {banner && <div>{banner}</div>}
                <div className='flex md:flex-row flex-col justify-center'>
                    {sidebar && sidebarPosition === 'left' && <div className='sidebar-wrapper'>{sidebar}</div>}
                    {body && <div className='content-wrapper'>{body}</div>}
                    {sidebar && sidebarPosition === 'right' && <div className='sidebar-wrapper'>{sidebar}</div>}
                </div>
            </div>
        </div>
    );
}

DefaultPage.Banner = LayoutSlot('banner');
DefaultPage.Sidebar = LayoutSlot('sidebar');
DefaultPage.Body = LayoutSlot('body');

export default DefaultPage;
