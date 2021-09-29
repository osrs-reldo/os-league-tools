import React from 'react';
import NavBar from './NavBar';

function Page({ children, sidebarPosition = 'left' }) {
    const bannerItems = filterChildrenBySlot(children, 'banner');
    const sidebarItems = filterChildrenBySlot(children, 'sidebar');
    const bodyItems = filterChildrenBySlot(children, 'body');
    return (
        <div className='bg-gray-200 w-full h-full'>
            <NavBar />
            <div className='mt-5 page-wrapper'>
                {bannerItems.length > 0 && <div>{bannerItems}</div>}
                <div className='flex md:flex-row flex-col justify-center'>
                    {sidebarPosition === 'left' && sidebarItems.length > 0 && (
                        <div className='sidebar-wrapper'>{sidebarItems}</div>
                    )}
                    {bodyItems && <div className='content-wrapper'>{bodyItems}</div>}
                    {sidebarPosition === 'right' && sidebarItems.length > 0 && (
                        <div className='sidebar-wrapper'>{sidebarItems}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

function filterChildrenBySlot(children, slot, allowUndefined = false) {
    return React.Children.toArray(children).filter(element => {
        const position = element?.props?.pagePosition;
        const validPosition = position === slot || (!position && allowUndefined);
        return validPosition;
    });
}

function Banner({ children }) {
    return children;
}
Banner.defaultProps = {
    pagePosition: 'banner',
};

function Sidebar({ children }) {
    return children;
}
Sidebar.defaultProps = {
    pagePosition: 'sidebar',
};

function Body({ children }) {
    return children;
}
Body.defaultProps = {
    pagePosition: 'body',
};

Page.Banner = Banner;
Page.Sidebar = Sidebar;
Page.Body = Body;

export default Page;
