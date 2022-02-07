import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { lockBoss, unlockBoss } from '../store/unlocks/unlocks';
import { BOSSES } from '../data/constants';
import { numberWithCommas } from '../util/numberFormatters';

export default function BossesPanel() {
    const [selectedBoss, setSelectedBoss] = useState(null);
    const unlockedBosses = useSelector(state => state.unlocks.bosses);
    const hiscores = useSelector(state => state.character.hiscoresCache.data?.bosses);
    const dispatch = useDispatch();

    const renderBossDetails = () =>
        selectedBoss ? (
            <>
                <p className='heading-accent-md'>{selectedBoss.label}</p>
                {hiscores && unlockedBosses.includes(selectedBoss.label) && (
                    <>
                        <p className='italic text-sm'>
                            Kills:{' '}
                            {numberWithCommas(
                                hiscores[selectedBoss.hiscoresName].score > 0
                                    ? hiscores[selectedBoss.hiscoresName].score
                                    : '-'
                            )}
                        </p>
                        <p className='italic text-sm'>
                            Rank:{' '}
                            {numberWithCommas(
                                hiscores[selectedBoss.hiscoresName].rank > 0
                                    ? hiscores[selectedBoss.hiscoresName].rank
                                    : '-'
                            )}
                        </p>
                    </>
                )}

                {!selectedBoss.isDefaultUnlock && (
                    <div className='mt-4'>
                        {!unlockedBosses.includes(selectedBoss.label) && (
                            <p className='italic text-sm'>Cost: {selectedBoss.unlockCost}</p>
                        )}
                        <button
                            className='button-outline px-1 my-1 w-full'
                            type='button'
                            onClick={() =>
                                unlockedBosses.includes(selectedBoss.label)
                                    ? dispatch(lockBoss({ boss: selectedBoss }))
                                    : dispatch(unlockBoss({ boss: selectedBoss }))
                            }
                        >
                            {unlockedBosses.includes(selectedBoss.label)
                                ? `Re-lock ${selectedBoss.label}`
                                : `Unlock ${selectedBoss.label}`}
                        </button>
                    </div>
                )}
            </>
        ) : (
            <p className='italic text-sm'>Click on a boss to lock/unlock it.</p>
        );

    return (
        <>
            <div className='grid grid-cols-4 gap-px w-fit bg-subdued'>
                {Object.values(BOSSES).map(boss => (
                    <BossTile
                        key={boss.label}
                        boss={boss}
                        bossHiscores={hiscores ? hiscores[boss.hiscoresName] : {}}
                        selectedBoss={selectedBoss}
                        setSelectedBoss={setSelectedBoss}
                        unlockedBosses={unlockedBosses}
                    />
                ))}
            </div>

            {renderBossDetails()}
        </>
    );
}

function BossTile({ boss, bossHiscores, selectedBoss, setSelectedBoss, unlockedBosses }) {
    const dispatch = useDispatch();
    const isUnlocked = unlockedBosses.includes(boss.label);
    const killCount = bossHiscores?.score > 0 ? bossHiscores?.score : '-';

    useEffect(() => {
        if (!isUnlocked && killCount > 0) {
            dispatch(unlockBoss({ boss }));
        }
    }, [bossHiscores]);

    return boss ? (
        <>
            <div
                className={`p-1 bg-primary bg-hover cursor-pointer ${selectedBoss === boss && 'bg-secondary'}`}
                onClick={() => setSelectedBoss(boss)}
                data-tip
                data-for={boss.label}
            >
                <div className='flex items-center'>
                    <img src={boss.icon} alt={boss.label} className='inline mx-1' />
                    {boss.isDefaultUnlock || unlockedBosses.includes(boss.label) ? (
                        <p className='text-center grow mr-1'>{killCount < 0 ? 0 : killCount}</p>
                    ) : (
                        <p className='text-sm flex justify-center items-center text-error'>
                            <span className='icon-outline text-sm mr-1'>lock</span> {boss.unlockCost}
                        </p>
                    )}
                </div>
            </div>
            <ReactTooltip id={boss.label}>{boss.label}</ReactTooltip>
        </>
    ) : (
        <div className='bg-primary' />
    );
}
