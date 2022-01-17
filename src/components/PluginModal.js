import React from 'react';
import Modal from './Modal';

export default function PluginModal({ isOpen, setIsOpen }) {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
        >
            <Modal.Header className='text-center small-caps tracking-wide text-xl text-primary font-semibold'>
                RuneLite Plugin Info
            </Modal.Header>
            <Modal.Body className='text-primary'>
                <p className='m-2'>Runelite integration coming soon! Currently pending plugin hub approval.</p>
                {/* <p className='m-2'>
                    OS League Tools has RuneLite integration! The official plugin can export your tasks, unlocks, and
                    relics to the site so you don't have to input them manually. To get it, search for{' '}
                    <span className='text-accent font-semibold'>Tasks Tracker</span> in the Plugin Hub in your runelite
                    settings.
                </p> */}
            </Modal.Body>
        </Modal>
    );
}
