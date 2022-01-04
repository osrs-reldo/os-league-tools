import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { update } from '../reducer/settings';
import LabeledCheckbox from '../components/common/LabeledCheckbox';
import TabbedCard from '../components/common/TabbedCard';
import PageWrapper from '../components/PageWrapper';

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
                                <span className='heading-block-md small-caps mb-2'>General</span>
                                <div className='ml-2'>
                                    <LabeledCheckbox
                                        label='Limit maximum content width'
                                        defaultChecked={settingsState.limitContentWidth}
                                        onClick={e =>
                                            dispatch(update({ field: 'limitContentWidth', value: e.target.checked }))
                                        }
                                    />
                                    <div className='ml-5'>
                                        <p className='text-sm italic'>
                                            <span className='icon-outline text-xs inline mr-1'>info</span>On large
                                            screens, site content will be limited to a maximum of 1536px wide.
                                        </p>
                                        <p className='text-sm italic'>
                                            Uncheck if you wish to use the full width of your browser window.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='heading-block-md small-caps my-2'>Theme</span>
                                <div className='ml-2 grid grid-cols-4 gap-1'>
                                    <ThemeSelectCard label='Twisted Dusk' theme='tl-dark' />
                                    <ThemeSelectCard label='Malevolent Trailblazer' theme='tb-dark' />
                                    <ThemeSelectCard label='Shattered Shadows' theme='sl-dark' />
                                    <ThemeSelectCard label='Mono Dark' theme='mono-dark' />
                                    <ThemeSelectCard label='Twisted Dawn' theme='tl-light' />
                                    <ThemeSelectCard label='Benevolent Trailblazer' theme='tb-light' />
                                    <ThemeSelectCard label='Shattered Lights' theme='sl-light' />
                                    <ThemeSelectCard label='Mono Bright' theme='mono-light' />
                                </div>
                            </div>
                        </div>
                    </TabbedCard.Tab>
                </TabbedCard>
            </div>
        </PageWrapper>
    );
}

function ThemeSelectCard({ label, theme }) {
    const activeTheme = useSelector(state => state.settings.theme);
    const dispatch = useDispatch();

    const selected = activeTheme === theme;
    const selectedStyle = selected ? 'border-x-2 border-accent bg-secondary-alt' : 'cursor-pointer bg-hover';
    return (
        <div
            className={`rounded p-2 w-[100px] min-w-[100px] ${selectedStyle}`}
            onClick={() =>
                batch(() => {
                    dispatch(update({ field: 'theme', value: theme }));
                    dispatch(update({ field: 'mode', value: theme.split('-')[1] }));
                })
            }
        >
            <img className='h-9 w-9 mx-auto' src={`/img/icon-${theme}.png`} alt='' />
            <span className={`text-center heading-block-sm small-caps force-wrap ${selected && 'text-accent'}`}>
                {label}
            </span>
        </div>
    );
}
