// eslint-enable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilePicker } from 'react-file-picker';
import { saveAs } from 'file-saver';
import importFromPlugin from '../client/plugin-importer';
import Separator from './common/Separator';
import Modal from './Modal';
import { loadNewState, resetState } from '../store/common';
import { selectActiveCharacter, addCharacter } from '../store/user/character';
import { importDataFromBackend } from '../api/fetchDisplayNames';

const PLUGIN_EXPORT_VERSION = 1;

export default function ManageDataModal({ variant, isOpen, setIsOpen }) {
  switch (variant) {
    case 'import':
      return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} headerText='Import and Sync Data'>
          <Modal.Body className='text-primary text-sm'>
            <p className='heading-accent-md ml-1'>Sync data to plugin</p>
            <ImportFromPluginContent />
            <Separator className='mb-2' />
            <p className='heading-accent-md ml-1'>Import saved data</p>
            <ImportFromDatabaseContent />
            <ImportFromFileContent />
          </Modal.Body>
        </ModalWrapper>
      );
    case 'export':
      return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} headerText='Export data'>
          <Modal.Body className='text-primary text-sm'>
            <p className='heading-accent-md ml-1'>Export to-do list to plugin</p>
            <ExportToPluginContent />
            <Separator className='mb-2' />
            <p className='heading-accent-md ml-1'>Export data backup</p>
            <ExportToFileContent />
          </Modal.Body>
        </ModalWrapper>
      );
    case 'reset':
      return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} headerText='Reset User Data'>
          <Modal.Body className='text-primary text-sm'>
            <ResetDataModalContent setIsOpen={setIsOpen} />
          </Modal.Body>
        </ModalWrapper>
      );
    case 'plugin':
      return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} headerText='Tasks Tracker RuneLite Plugin'>
          <Modal.Body className='text-primary text-sm'>
            <p className='heading-accent-md ml-1'>About</p>
            <p className='m-2 mt-1'>OS League Tools has RuneLite integration! Enable the plugin to sync your tasks.</p>
            <Separator className='mb-2' />
            <p className='heading-accent-md ml-1'>Sync data</p>
            <ImportFromPluginContent />
            <Separator className='mb-2' />
            <p className='heading-accent-md ml-1'>Export to-do list</p>
            <ExportToPluginContent />
            <Separator className='mb-2' />
            <p className='heading-accent-md ml-1'>Reset data</p>
            <ResetDataModalContent setIsOpen={setIsOpen} />
          </Modal.Body>
        </ModalWrapper>
      );
    case 'share':
      return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen} headerText='Share Tasks'>
          <Modal.Body className='text-primary text-sm'>
            <ShareLinkContent />
          </Modal.Body>
        </ModalWrapper>
      );
    default:
      return null;
  }
}

function ModalWrapper({ isOpen, setIsOpen, headerText, children }) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        {headerText}
      </Modal.Header>
      {children}
    </Modal>
  );
}

function ImportFromDatabaseContent() {
  const dispatch = useDispatch();
  const displayNames = useSelector(state => state.account.accountCache.displayNames); // Get displayNames from Redux
  const isLoggedIn = useSelector(state => state.account.accountCache.isLoggedIn);
  const loggedInUser = useSelector(state => state.account.accountCache.username) || localStorage.getItem('username');

  if (!isLoggedIn) {
    return <p>Please log in to manage your data.</p>;
  }

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  // eslint-disable-next-line no-console
  console.log('Logged-in user:', loggedInUser);

  const handleImport = async name => {
    try {
      setSuccessMessage('');
      setError('');

      // Call the backend to import data
      await importDataFromBackend(loggedInUser, name);

      // Dispatch addCharacter to add the imported character
      dispatch(
        addCharacter({
          rsn: name, // Use the imported displayName
          setActive: true, // Automatically set it as the active character
        })
      );

      setSuccessMessage(`Successfully imported data for "${name}" and set it as the active character.`);
    } catch (err) {
      setError(`Failed to import data for "${name}".`);
      console.error(err);
    }
  };

  if (displayNames.length === 0) {
    return <p>No saved data found for this account.</p>;
  }

  return (
    <div>
      {successMessage && <p className='text-success'>{successMessage}</p>}
      {error && <p className='text-error'>{error}</p>}

      {displayNames.length > 0 && <p className='text-primary mt-4 mb-2'>We found these users on the server already!</p>}

      <ul>
        {displayNames.map(name => (
          <li key={name} className='flex items-center justify-between mb-2'>
            <span>{name}</span>
            <button className='button-filled' type='button' onClick={() => handleImport(name)}>
              Import from server
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function ImportFromPluginContent() {
  const [pluginImport, setPluginImport] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorText, setErrorText] = useState('');
  const characterState = useSelector(state => state.character);
  const userState = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
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
          <li>Click the book icon on the sidebar to open the task tracker panel, and click the Export button</li>
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
        {errorText && <p className='text-error text-sm'>{errorText}</p>}
        {successMessage && <p className='text-accent text-sm'>{successMessage}</p>}
        <button
          className='w-full my-1 button-filled'
          type='button'
          onClick={() => {
            try {
              importFromPlugin(JSON.parse(pluginImport), userState, dispatch, characterState);
              setPluginImport('');
              setErrorText('');
              setSuccessMessage('Successfully synced data!');
            } catch (e) {
              console.warn(e);
              setErrorText('Unable to parse input. Check your plugin export and try again.');
            }
          }}
        >
          Sync
        </button>
      </p>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
function ExportToPluginContent() {
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const userState = useSelector(state => state);
  const taskExport = convertTasksToPluginExport(userState.tasks.tasks, selectActiveCharacter(userState));
  return (
    <>
      <p className='m-2 mt-1'>
        Click on the text box below to copy your task data, then paste it into the Task Tracker plugin's import menu to
        sync your to-do list to the client.
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
        {isCopySuccess && <p className='text-accent text-sm'>Copied!</p>}
      </p>
    </>
  );
}
// eslint-enable-next-line no-unused-vars
function ImportFromFileContent() {
  const [successText, setSuccessText] = useState('');
  const [errorText, setErrorText] = useState('');
  const dispatch = useDispatch();

  const loadStateFromFile = async fileObject => {
    let loadedText;
    try {
      loadedText = await fileObject.text();
    } catch (err) {
      console.error(err);
      setSuccessText('');
      setErrorText('Unable to load file. Please try again.');
    }

    let storageJson;
    try {
      storageJson = JSON.parse(loadedText);
    } catch (err) {
      console.error(err);
      setSuccessText('');
      setErrorText('Unable to parse file, please check the file and try again.');
    }

    loadNewState(dispatch, storageJson);

    setSuccessText('Successfully imported character data.');
    setErrorText('');
  };

  return (
    <>
      <div className='m-2 mt-1'>
        <p>Upload a file below to restore your data from a backup.</p>
        <p>
          <span className='text-error'>Warning</span>: Any existing data will be overwritten!
        </p>
      </div>
      <div className='flex'>
        <FilePicker
          onChange={FileObject => {
            loadStateFromFile(FileObject);
          }}
          onError={errMsg => {
            setSuccessText('');
            setErrorText(errMsg);
          }}
          style={{
            width: '100%',
            margin: '0.25rem',
            marginBottom: '0.375rem',
          }}
        >
          <button className='w-full button-filled' type='button'>
            Import from file
          </button>
        </FilePicker>
      </div>
      {errorText && <p className='text-error text-sm'>{errorText}</p>}
      {successText && <p className='text-accent text-sm'>{successText}</p>}
    </>
  );
}

function ExportToFileContent() {
  const localState = useSelector(state => state);

  const saveStateToFile = () => {
    const blob = new Blob([JSON.stringify(localState)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `osLeagueTools_backup_${Date.now()}.txt`);
  };

  return (
    <>
      <p className='m-2 mt-1'>
        Export all your data to a file if you'd like to create a backup, or to transfer it to another computer.
      </p>
      <div className='flex'>
        <button className='w-full m-1 button-filled mb-2' onClick={saveStateToFile} type='button'>
          Export
        </button>
      </div>
    </>
  );
}

function ResetDataModalContent({ setIsOpen }) {
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <p className='m-2 mt-1'>Warning! Resetting your data is irreversible. Are you sure you wish to continue?</p>
      <div className='flex'>
        <button
          className='w-full my-1 button-outline mr-1'
          type='button'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          No, Cancel
        </button>
        <button
          className='w-full my-1 button-filled ml-1'
          type='button'
          onClick={() => {
            resetState(dispatch);
            setSuccessMessage('Data has been deleted. Reloading page...');
            const currentParams = new URLSearchParams(window.location.search);
            currentParams.delete('open');
            setTimeout(() => {
              window.location.search = currentParams.toString();
            }, 1000);
          }}
        >
          Yes, Permanently Delete Data
        </button>
      </div>
      {successMessage && <p className='text-accent text-sm'>{successMessage}</p>}
    </>
  );
}

function ShareLinkContent() {
  const accountState = useSelector(state => state.account);
  const characterState = useSelector(state => state.character);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  if (!accountState.accountCache.isLoggedIn || !characterState.characters[characterState.activeCharacter]) {
    return (
      <p className='m-2 mt-1 text-error'>
        You must be logged in and have set up at least one character in order to share your progress link.
      </p>
    );
  }

  const shareLink = `https://www.osleague.tools/tracker/${characterState.characters[characterState.activeCharacter]}`;

  return (
    <>
      <p className='m-2 mt-1'>Click to copy the link below to share your task progress!</p>
      <p className='m-2 mt-1'>
        <textarea
          className='input-primary form-textarea w-full mt-1 text-sm select-all cursor-text'
          onClick={() => {
            navigator.clipboard.writeText(shareLink);
            setIsCopySuccess(true);
          }}
          value={shareLink}
          readOnly
        />
        {isCopySuccess && <p className='text-accent text-sm'>Copied!</p>}
      </p>
    </>
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
      notes: taskState[taskId].notes,
      lastUpdated: taskState[taskId].lastUpdated,
    };
  });
  return JSON.stringify(reformattedTasks);
}
// eslint-disable-next-line no-unused-vars
