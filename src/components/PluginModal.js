/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import importFromPlugin from '../client/plugin-importer';
import Separator from './common/Separator';
import Modal from './Modal';

const PLUGIN_EXPORT_VERSION = 1;

export default function PluginModal({ isOpen, setIsOpen }) {
    const [pluginImport, setPluginImport] = useState('');
    const [errorText, setErrorText] = useState('');
    const [isCopySuccess, setIsCopySuccess] = useState(false);
    const userState = useSelector(state => state);
    const dispatch = useDispatch();
    const taskExport = convertTasksToPluginExport(userState.tasks.tasks, userState.character.username);

    const onClose = () => {
        setPluginImport('');
        setErrorText('');
        setIsCopySuccess('');
    };

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClose={onClose}
            className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
        >
            <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
                Tasks Tracker RuneLite Plugin
            </Modal.Header>
            <Modal.Body className='text-primary text-sm'>
                <span className='heading-accent-md ml-1'>About</span>
                <p className='m-2 mt-1'>
                    OS League Tools has RuneLite integration! Enable the plugin to sync your tasks (and soon, your
                    quests, relics, and unlocks too).
                </p>
                <Separator className='mb-2' />
                <span className='heading-accent-md ml-1'>Sync data</span>
                <div className='m-2 mt-1'>
                    How to sync:
                    <ol className='list-decimal list-inside ml-2'>
                        <li>
                            Install the{' '}
                            <a
                                className='text-accent font-semibold hover:underline'
                                href='https://github.com/osrs-reldo/tasks-tracker-plugin/tree/main#tasks-tracker'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Tasks Tracker
                            </a>{' '}
                            from the Plugin Hub in your runelite settings.
                        </li>
                        <li>Open your tasks menu ingame and make sure filters are set to "All"</li>
                        <li>
                            Click the book icon on the sidebar to open the task tracker panel, and click the Export
                            button
                        </li>
                        <li>Paste it below!</li>
                    </ol>
                </div>
                <p className='m-2 mt-1'>
                    <textarea
                        className='input-primary form-textarea w-full my-1 text-sm'
                        placeholder='Paste your exported data from the plugin'
                        value={pluginImport}
                        onChange={e => setPluginImport(e.target.value)}
                    />
                    {errorText && <span className='text-error text-sm'>{errorText}</span>}
                    <button
                        className='w-full my-1 button-filled'
                        type='button'
                        onClick={() => {
                            try {
                                importFromPlugin(JSON.parse(pluginImport), userState, dispatch);
                                setPluginImport('');
                                setErrorText('');
                                setIsOpen(false);
                            } catch (e) {
                                console.warn(e);
                                setErrorText('Unable to parse input. Check your plugin export and try again.');
                            }
                        }}
                    >
                        Sync
                    </button>
                </p>
                <Separator className='mb-2' />
                <span className='heading-accent-md ml-1'>Export to-do list</span>
                <p className='m-2 mt-1'>
                    Click on the text box below to copy your task data, then paste it into the plugin's import menu.
                </p>
                <p className='m-2 mt-1'>
                    <textarea
                        className='input-primary form-textarea w-full mt-1 text-sm select-all cursor-text'
                        onClick={() => {
                            navigator.clipboard.writeText(taskExport);
                            setIsCopySuccess(true);
                        }}
                        value={taskExport}
                        readOnly
                    />
                    {isCopySuccess && <span className='text-accent text-sm'>Copied!</span>}
                </p>
            </Modal.Body>
        </Modal>
    );
}

function convertTasksToPluginExport(taskState, rsn) {
    const reformattedTasks = {
        version: PLUGIN_EXPORT_VERSION,
        rsn,
        tasks: {},
    };
    Object.keys(taskState).forEach(taskId => {
        reformattedTasks.tasks[taskId] = {
            completed: taskState[taskId].completed || 0,
            todo: taskState[taskId].todo || 0,
            ignored: taskState[taskId].ignored || 0,
            order: taskState[taskId].order || 0,
            notes: taskState[taskId].notes,
            lastUpdated: taskState[taskId].lastUpdated,
        };
    });
    return JSON.stringify(reformattedTasks);
}
