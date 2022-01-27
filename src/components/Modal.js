import React from 'react';
import { useSelector } from 'react-redux';

import ReactModal from 'react-modal';
import Separator from './common/Separator';

const DEFAULT_STYLE = 'w-96 min-h-[16rem] shadow shadow-primary rounded-md bg-primary-alt';

function Modal({ isOpen, setIsOpen, children, className, onClose }) {
    // Modal is an overlay located outside of the root element, so it doesn't inherit the theming classes. Need to add them explicitly
    const theme = useSelector(state => state.settings.theme);
    const mode = useSelector(state => state.settings.mode);

    // For accessibility, see http://reactcommunity.org/react-modal/examples/set_app_element/
    ReactModal.setAppElement('#root');

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => {
                setIsOpen(false);
                onClose();
            }}
            className={`${mode} theme-${theme}`}
            style={{
                overlay: {
                    zIndex: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.50)',
                },
            }}
        >
            <div className='relative'>
                <CloseButton setIsOpen={setIsOpen} />
                <div className={`${className || DEFAULT_STYLE} flex flex-col`}>{children}</div>
            </div>
        </ReactModal>
    );
}

function CloseButton({ setIsOpen }) {
    return (
        <button
            type='button'
            className='absolute right-0 top-0 cursor-pointer text-secondary-alt px-2 icon-xl'
            onClick={() => setIsOpen(false)}
        >
            close
        </button>
    );
}

function Header({ children, className }) {
    return (
        <div className={`${className} w-full p-1`}>
            {children}
            <Separator className='mt-1' />
        </div>
    );
}

function Footer({ children, className }) {
    return (
        <div className={`${className} w-full p-1`}>
            <Separator className='mb-1' />
            {children}
        </div>
    );
}

function Body({ children, className }) {
    return <div className={`${className} w-full px-1 grow`}>{children}</div>;
}

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Body = Body;

export default Modal;
