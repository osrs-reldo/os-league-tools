import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { update } from '../store/settings/settings';
import LabeledCheckbox from '../components/common/LabeledCheckbox';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';
import images from '../assets/images';

export default function Settings() {
  const settingsState = useSelector(state => state.settings);
  const dispatch = useDispatch();

  return (
    <PageWrapper>
      <div className='mx-auto'>
        <TabbedCard defaultActiveTab='interface'>
          <TabbedCard.Tab id='interface' label='Interface'>
            <div className='grid xl:grid-cols-2'>
              <div>
                <span className='heading-block-md small-caps mb-2 text-accent'>
                  General{' '}
                  <span className='icon-outline text-xs inline mr-1' data-tip data-for='general'>
                    info
                  </span>
                </span>
                <ReactTooltip id='general'>
                  <p className='text-sm italic'>
                    On large screens, site content will be limited to a maximum of 1500px.
                  </p>
                  <p className='text-sm italic'>Uncheck if you wish to use the full width of your browser window.</p>
                </ReactTooltip>
                <div className='ml-2'>
                  <LabeledCheckbox
                    label='Limit maximum content width'
                    checked={settingsState.limitContentWidth}
                    onClick={e => dispatch(update({ field: 'limitContentWidth', value: e.target.checked }))}
                  />
                </div>
                <span className='heading-block-md small-caps mb-2 mt-2 text-accent'>
                  Task tracker{' '}
                  <span className='icon-outline text-xs inline mr-1' data-tip data-for='taskTracker'>
                    info
                  </span>
                </span>
                <ReactTooltip id='taskTracker'>
                  <p className='text-sm italic'>Choose which columns to show on the task tracker.</p>
                  <p className='text-sm italic'>
                    Note that on small screens, some columns may be hidden regardless of this setting.
                  </p>
                </ReactTooltip>
                <div className='ml-2'>
                  <LabeledCheckbox
                    label='Show "Priority" column'
                    checked={settingsState.taskColumns.priority}
                    onClick={e =>
                      dispatch(update({ field: 'taskColumns', subfield: 'priority', value: e.target.checked }))
                    }
                  />
                  <LabeledCheckbox
                    label='Show "Category" column'
                    checked={settingsState.taskColumns.category}
                    onClick={e =>
                      dispatch(update({ field: 'taskColumns', subfield: 'category', value: e.target.checked }))
                    }
                  />
                  <LabeledCheckbox
                    label='Show "Completed At" column'
                    checked={settingsState.taskColumns.completedAt}
                    onClick={e =>
                      dispatch(update({ field: 'taskColumns', subfield: 'completedAt', value: e.target.checked }))
                    }
                  />
                  <LabeledCheckbox
                    label='Show "Regions" column'
                    checked={settingsState.taskColumns.regions}
                    onClick={e =>
                      dispatch(update({ field: 'taskColumns', subfield: 'regions', value: e.target.checked }))
                    }
                  />
                </div>
              </div>
              <div>
                <span className='heading-block-md small-caps my-2 text-accent'>Mode</span>
                <div className='ml-2 mb-4 flex flex-row flex-wrap gap-4'>
                  <ModeSelectCard label='Dark' mode='dark' />
                  <ModeSelectCard label='Light' mode='light' />
                </div>
                <span className='heading-block-md small-caps my-2 text-accent'>Theme</span>
                <div className='ml-2 flex flex-row flex-wrap gap-4'>
                  <ThemeSelectCard label='Twisted' theme='tl' />
                  <ThemeSelectCard label='Trailblazer' theme='tb' />
                  <ThemeSelectCard label='Shattered' theme='sl' />
                  <ThemeSelectCard label='Reloaded' theme='tr' />
                  <ThemeSelectCard label='Echoes' theme='re' />
                  <ThemeSelectCard label='Mono' theme='mono' />
                </div>
              </div>
            </div>
          </TabbedCard.Tab>
        </TabbedCard>
      </div>
    </PageWrapper>
  );
}

function ModeSelectCard({ label, mode }) {
  const activeTheme = useSelector(state => state.settings.theme);
  const activeMode = useSelector(state => state.settings.mode);
  const dispatch = useDispatch();

  const themeMode = `${activeTheme.split('-')[0]}-${mode}`;
  const selected = activeMode === mode;
  const selectedStyle = selected ? 'border-x-2 border-accent bg-secondary-alt' : 'cursor-pointer bg-hover';
  return (
    <div
      className={`rounded p-2 w-[100px] min-w-[100px] ${selectedStyle}`}
      onClick={() =>
        batch(() => {
          dispatch(update({ field: 'theme', value: themeMode }));
          dispatch(update({ field: 'mode', value: mode }));
        })
      }
    >
      <img className='h-9 w-9 mx-auto' src={images[`icon-blank-${mode}.png`]} alt='' />
      <span className={`text-center heading-block-sm pt-2 small-caps force-wrap ${selected && 'text-accent'}`}>
        {label}
      </span>
    </div>
  );
}

function ThemeSelectCard({ label, theme }) {
  const activeTheme = useSelector(state => state.settings.theme);
  const activeMode = useSelector(state => state.settings.mode);
  const dispatch = useDispatch();

  const themeMode = `${theme}-${activeMode}`;
  const selected = activeTheme === themeMode;
  const selectedStyle = selected ? 'border-x-2 border-accent bg-secondary-alt' : 'cursor-pointer bg-hover';
  return (
    <div
      className={`rounded p-2 my-auto w-[100px] min-w-[100px] ${selectedStyle}`}
      onClick={() =>
        batch(() => {
          dispatch(update({ field: 'theme', value: themeMode }));
        })
      }
    >
      <img className='h-9 w-9 mx-auto' src={images[`icon-${theme}-split.png`]} alt='' />
      <span className={`text-center heading-block-sm pt-2 small-caps force-wrap ${selected && 'text-accent'}`}>
        {label}
      </span>
    </div>
  );
}
