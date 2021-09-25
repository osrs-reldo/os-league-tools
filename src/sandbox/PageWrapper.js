import React from 'react';
// import TopNav from '../components/TopNav';
import NavBar from './NavBar';
import { getContentWidthClass } from '../util/settings-util';

export default function PageWrapper({ children }) {
    return (
        <>
            {/* <TopNav /> */}
            <NavBar />
            <div className={getContentWidthClass()}>{children}</div>
        </>
    );
}
