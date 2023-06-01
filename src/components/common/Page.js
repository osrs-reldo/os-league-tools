import React from 'react';
import { getLayoutSlots, LayoutSlot } from './util/layout';

function Page({ children, sidebarPosition = 'left', limitContentWidth = true }) {
  const { nav, banner, sidebar, body } = getLayoutSlots(children);
  return (
    <div className='bg-secondary w-full h-full min-h-screen'>
      {nav}
      <div className='py-5 page-wrapper'>
        {banner && <div>{banner}</div>}
        <div className='flex md:flex-row flex-col justify-center'>
          {sidebar && sidebarPosition === 'left' && <div className='sidebar-wrapper'>{sidebar}</div>}
          {body && <div className={`w-full ${limitContentWidth ? '2xl:container' : ''}`}>{body}</div>}
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
