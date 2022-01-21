import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lockBoss, unlockBoss } from '../store/user/unlocks';

const BOSSES = [
    'Alchemical Hydra',
    'Barrows',
    'Bryophyta',
    'Callisto',
    'Cerberus',
    'Chambers of Xeric',
    'Chambers of Xeric: Challenge Mode',
    'Chaos Elemental',
    'Chaos Fanatic',
    'Commander Zilyana',
    'Corporeal Beast',
    'Crazy Archaeologist',
    'Dagannoth Prime',
    'Dagannoth Rex',
    'Dagannoth Supreme',
    'Deranged Archaeologist',
    'General Graardor',
    'Giant Mole',
    'Grotesque Guardians',
    'Hespori',
    'Kalphite Queen',
    'King Black Dragon',
    'Kraken',
    "Kree'Arra",
    "K'ril Tsutsaroth",
    'Mimic',
    'Nex',
    'Nightmare',
    "Phosani's Nightmare",
    'Obor',
    'Sarachnis',
    'Scorpia',
    'Skotizo',
    'Tempoross',
    'The Gauntlet',
    'The Corrupted Gauntlet',
    'Theatre of Blood',
    'Theatre of Blood: Hard Mode',
    'Thermonuclear Smoke Devil',
    'TzKal-Zuk',
    'TzTok-Jad',
    'Venenatis',
    "Vet'ion",
    'Vorkath',
    'Wintertodt',
    'Zalcano',
    'Zulrah',
];

export default function BossesPanel({ characterStats }) {
    const [selectedBoss, setSelectedBoss] = useState(null);
    const unlockedBosses = useSelector(state => state.unlocks.bosses);
    const dispatch = useDispatch();

    return (
        <div>
            <table className='table-auto'>
                <tbody>
                    {Array.from({ length: 10 }, (_, i) => (
                        <tr key={i} className='border-b border-subdued last:border-none'>
                            <BossTile
                                boss={BOSSES[i * 5]}
                                selectedBoss={selectedBoss}
                                setSelectedBoss={setSelectedBoss}
                                unlockedBosses={unlockedBosses}
                                characterStats={characterStats}
                            />
                            {i * 5 + 1 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 1]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                    unlockedBosses={unlockedBosses}
                                    characterStats={characterStats}
                                />
                            ) : (
                                <td />
                            )}
                            {i * 5 + 2 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 2]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                    unlockedBosses={unlockedBosses}
                                    characterStats={characterStats}
                                />
                            ) : (
                                <td />
                            )}
                            {i * 5 + 3 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 3]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                    unlockedBosses={unlockedBosses}
                                    characterStats={characterStats}
                                />
                            ) : (
                                <td />
                            )}
                            {i * 5 + 3 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 4]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                    unlockedBosses={unlockedBosses}
                                    characterStats={characterStats}
                                />
                            ) : (
                                <td />
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='w-full px-1 mt-2 align-top'>
                {selectedBoss ? (
                    <>
                        {/* TODO add sage's renown values for unlocks */}
                        {/* <span className='heading-accent-md'>{selectedBoss}</span>
                        <p className='italic text-sm'>Cost: 500 league points</p> */}
                        <button
                            className='button-outline px-1 my-1 w-full'
                            type='button'
                            onClick={() =>
                                unlockedBosses.includes(selectedBoss)
                                    ? dispatch(lockBoss({ boss: selectedBoss }))
                                    : dispatch(unlockBoss({ boss: selectedBoss }))
                            }
                        >
                            {unlockedBosses.includes(selectedBoss)
                                ? `Re-lock ${selectedBoss}`
                                : `Unlock ${selectedBoss}`}
                        </button>
                    </>
                ) : (
                    <span className='italic text-sm'>Click on a boss to lock/unlock it.</span>
                )}
            </div>
        </div>
    );
}

function BossTile({ boss, selectedBoss, setSelectedBoss, unlockedBosses, characterStats }) {
    const killCount =
        characterStats?.bosses[`${boss.substring(0, 1).toLowerCase()}${cleanBossString(boss).substring(1)}`]?.score ||
        0;
    return (
        <td
            className={`p-1 border-r border-subdued last:border-none bg-hover cursor-pointer ${
                selectedBoss === boss && 'bg-secondary'
            }`}
            onClick={() => setSelectedBoss(boss)}
        >
            <div className='flex items-center'>
                <img src={`/img/${cleanBossString(boss, '-').toLowerCase()}.png`} alt={boss} className='inline mx-1' />
                {unlockedBosses.includes(boss) ? (
                    <span className='text-center grow mr-1'>{killCount < 0 ? 0 : killCount}</span>
                ) : (
                    <span className='text-error icon-outline text-lg text-center grow'>lock</span>
                )}
            </div>
        </td>
    );
}

function cleanBossString(boss, whitespaceReplacement = '') {
    return boss.replaceAll(':', '').replaceAll("'", '').replaceAll(' ', whitespaceReplacement);
}
