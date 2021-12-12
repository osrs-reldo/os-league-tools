import React from 'react';
import { getLayoutSlots, LayoutSlot } from './layout';

function Page({ children, sidebarPosition = 'left' }) {
    const { nav, banner, sidebar, body } = getLayoutSlots(children);
    return (
        <div className='bg-secondary w-full h-full'>
            {nav}
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

Page.Nav = LayoutSlot('nav');
Page.Banner = LayoutSlot('banner');
Page.Sidebar = LayoutSlot('sidebar');
Page.Body = LayoutSlot('body');

export default Page;
