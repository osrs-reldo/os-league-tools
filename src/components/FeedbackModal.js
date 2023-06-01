import React, { useState } from 'react';
import { submitBug, submitFeedback, submitSuggestion } from '../client/feedback-client';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';
import Modal from './Modal';

export default function FeedbackModal({ isOpen, setIsOpen }) {
  const [feedbackType, setFeedbackType] = useState('bug');

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='w-fit min-h-[16rem] min-w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-primary font-semibold'>
        Submit Feedback
      </Modal.Header>
      <Modal.Body className='flex flex-col gap-1 mx-1'>
        <ButtonGroup
          className='mx-auto my-2'
          buttons={[
            { value: 'bug', label: 'Bug Report' },
            { value: 'suggestion', label: 'Suggestion' },
            { value: 'other', label: 'General Feedback' },
          ]}
          selection={feedbackType}
          setSelection={val => setFeedbackType(val)}
        />
        {feedbackType === 'bug' && <BugReportFields onSubmit={() => setIsOpen(false)} />}
        {feedbackType === 'suggestion' && (
          <TextInputField
            onSubmit={() => setIsOpen(false)}
            submitFn={submitSuggestion}
            title='Make a suggestion'
            prompt='What would you like to see changed or added to OS League Tools?'
            placeholder='(enter suggestion)'
          />
        )}
        {feedbackType === 'other' && (
          <TextInputField
            onSubmit={() => setIsOpen(false)}
            submitFn={submitFeedback}
            title='Feedback'
            prompt='Have some feedback about OS League tools?'
            placeholder='(enter feedback)'
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

function BugReportFields({ onSubmit }) {
  const [bugDescription, setBugDescription] = useState(null);
  const [bugDescriptionError, setBugDescriptionError] = useState(false);
  const [reproSteps, setReproSteps] = useState(null);
  const [device, setDevice] = useState('unselected');
  const [deviceFreeText, setDeviceFreeText] = useState(null);
  const [browser, setBrowser] = useState('unselected');
  const [browserFreeText, setBrowserFreeText] = useState(null);
  const [client, setClient] = useState('unselected');
  const [clientFreeText, setClientFreeText] = useState(null);
  const [submitError, setSubmitError] = useState(false);

  return (
    <>
      <span className='heading-accent-md'>Bug details</span>
      <span className='text-primary text-sm ml-1'>Describe with as much detail as possible:</span>
      <textarea
        className={`input-primary text-sm form-input w-96 mx-2 h-24 ${bugDescriptionError && 'ring-2 ring-error'}`}
        placeholder='(bug description)'
        value={bugDescription || ''}
        onChange={e => {
          setBugDescription(e.target.value);
        }}
      />
      {bugDescriptionError && <span className='ml-2 text-xs text-error'>Please enter a description.</span>}
      <span className='text-primary text-sm ml-1'>If you can reproduce the bug, describe how:</span>
      <textarea
        className='input-primary text-sm form-input w-96 mx-2 h-24'
        placeholder='(reproduction steps)'
        value={reproSteps || ''}
        onChange={e => {
          setReproSteps(e.target.value);
        }}
      />
      <span className='heading-accent-md'>System info</span>
      <span className='text-primary text-sm ml-1'>What type of computer/device are you using?</span>
      <div>
        <InputSelect
          label='device'
          className='text-sm ml-2 w-fit'
          options={[
            {
              value: 'unselected',
              label: '(select device)',
            },
            {
              value: 'pc',
              label: 'Computer - Windows PC',
            },
            {
              value: 'macos',
              label: 'Computer - Mac',
            },
            {
              value: 'linux',
              label: 'Computer - Linux',
            },
            {
              value: 'android',
              label: 'Phone - Android',
            },
            {
              value: 'ios',
              label: 'Phone - iOS',
            },
            {
              value: 'androidTablet',
              label: 'Tablet - Android',
            },
            {
              value: 'iosTablet',
              label: 'Tablet - iPad',
            },
            {
              value: 'other',
              label: 'Other (specify)',
            },
          ]}
          selection={device}
          setSelection={val => setDevice(val)}
        />
        {device === 'other' && (
          <input
            type='text'
            className='input-primary text-sm form-input w-40 ml-2'
            placeholder='your internet browser'
            value={deviceFreeText || ''}
            onChange={e => {
              setDeviceFreeText(e.target.value);
            }}
          />
        )}
      </div>
      <span className='text-primary text-sm ml-1'>What browser are you using?</span>
      <div>
        <InputSelect
          label='browser'
          className='text-sm ml-2 w-fit'
          options={[
            {
              value: 'unselected',
              label: '(select browser)',
            },
            {
              value: 'chrome',
              label: 'Google chrome',
            },
            {
              value: 'safari',
              label: 'Safari',
            },
            {
              value: 'firefox',
              label: 'Firefox',
            },
            {
              value: 'opera',
              label: 'Opera',
            },
            {
              value: 'other',
              label: 'Other (specify)',
            },
          ]}
          selection={browser}
          setSelection={val => setBrowser(val)}
        />
        {browser === 'other' && (
          <input
            type='text'
            className='input-primary text-sm form-input w-40 ml-2'
            placeholder='your internet browser'
            value={browserFreeText || ''}
            onChange={e => {
              setBrowserFreeText(e.target.value);
            }}
          />
        )}
      </div>
      <span className='text-primary text-sm'>What client are you playing on?</span>
      <div>
        <InputSelect
          label='client'
          className='text-sm ml-2 w-fit'
          options={[
            {
              value: 'unselected',
              label: '(select client)',
            },
            {
              value: 'runelite',
              label: 'Runelite',
            },
            {
              value: 'oprs',
              label: 'OpenOSRS',
            },
            {
              value: 'official',
              label: 'Official client',
            },
            {
              value: 'steam',
              label: 'Steam client',
            },
            {
              value: 'mobile',
              label: 'Mobile app',
            },
            {
              value: 'other',
              label: 'Other (specify)',
            },
          ]}
          selection={client}
          setSelection={val => setClient(val)}
        />
        {client === 'other' && (
          <input
            type='text'
            className='input-primary text-sm form-input w-40 ml-2'
            placeholder='your game client'
            value={clientFreeText || ''}
            onChange={e => {
              setClientFreeText(e.target.value);
            }}
          />
        )}
      </div>
      {submitError && (
        <span className='ml-2 text-xs text-error'>Unable to submit feedback at this time. Please try again later.</span>
      )}
      <div className='flex justify-around py-2'>
        <button type='button' onClick={() => onSubmit()} className='py-1 px-2 button-outline'>
          Cancel
        </button>
        <button
          type='button'
          onClick={() => {
            if (bugDescription) {
              submitBug({
                description: bugDescription,
                reproSteps,
                device: device === 'other' ? deviceFreeText : device,
                browser: browser === 'other' ? browserFreeText : browser,
                client: client === 'other' ? clientFreeText : client,
              }).then(res => {
                if (res.success) {
                  onSubmit();
                } else {
                  setSubmitError(true);
                }
              });
            } else {
              setBugDescriptionError(true);
            }
          }}
          className='py-1 px-2 button-filled'
        >
          Submit
        </button>
      </div>
    </>
  );
}

function TextInputField({ title, prompt, placeholder, onSubmit, submitFn }) {
  const [userInput, setUserInput] = useState(null);
  const [inputError, setInputError] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  return (
    <>
      <span className='heading-accent-md'>{title}</span>
      <span className='text-primary text-sm ml-1'>{prompt}</span>
      <textarea
        className={`input-primary text-sm form-input w-96 mx-2 h-24 ${inputError && 'ring-2 ring-error'}`}
        placeholder={placeholder}
        value={userInput || ''}
        onChange={e => {
          setUserInput(e.target.value);
        }}
      />
      {inputError && <span className='ml-2 text-xs text-error'>Please enter your feedback.</span>}
      {submitError && (
        <span className='ml-2 text-xs text-error'>Unable to submit feedback at this time. Please try again later.</span>
      )}
      <div className='flex justify-around py-2'>
        <button type='button' onClick={() => onSubmit()} className='py-1 px-2 button-outline'>
          Cancel
        </button>
        <button
          type='button'
          onClick={() => {
            if (userInput) {
              submitFn({
                description: userInput,
              }).then(res => {
                if (res.success) {
                  onSubmit();
                } else {
                  setSubmitError(true);
                }
              });
            } else {
              setInputError(true);
            }
          }}
          className='py-1 px-2 button-filled'
        >
          Submit
        </button>
      </div>
    </>
  );
}
