import React from 'react';

export default function Divider({ spacingProps = 'mt-2 mb-2' }) {
    return <div className={spacingProps} style={{ borderTop: '0.5px solid', width: '100%' }} />;
}
