import React, { useState } from 'react';

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
const UNLOCKED_BOSSES = [
    'Callisto',
    'Chaos Elemental',
    'Chaos Fanatic',
    'Crazy Archaeologist',
    'Scorpia',
    'Venenatis',
    "Vet'ion",
];

export default function BossesPanel() {
    const [selectedBoss, setSelectedBoss] = useState(null);

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
                            />
                            {i * 5 + 1 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 1]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                />
                            ) : (
                                <td />
                            )}
                            {i * 5 + 2 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 2]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                />
                            ) : (
                                <td />
                            )}
                            {i * 5 + 3 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 3]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
                                />
                            ) : (
                                <td />
                            )}
                            {i * 5 + 3 < BOSSES.length ? (
                                <BossTile
                                    boss={BOSSES[i * 5 + 4]}
                                    selectedBoss={selectedBoss}
                                    setSelectedBoss={setSelectedBoss}
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
                        <span className='heading-accent-md'>{selectedBoss}</span>
                        <p className='italic text-sm'>Cost: 500 league points</p>
                        <button className='button-outline px-1 my-1 w-full' type='button'>
                            {UNLOCKED_BOSSES.includes(selectedBoss)
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

function BossTile({ boss, selectedBoss, setSelectedBoss }) {
    return (
        <td
            className={`p-1 border-r border-subdued last:border-none bg-hover cursor-pointer ${
                selectedBoss === boss && 'bg-secondary'
            }`}
            onClick={() => setSelectedBoss(boss)}
        >
            <div className='flex items-center'>
                <img
                    src={`/img/${boss.toLowerCase().replaceAll(':', '').replaceAll("'", '').replaceAll(' ', '-')}.png`}
                    alt={boss}
                    className='inline mx-1'
                />
                {UNLOCKED_BOSSES.includes(boss) ? (
                    <span className='text-center grow mr-1'>50</span>
                ) : (
                    <span className='text-error icon-outline text-lg text-center grow'>lock</span>
                )}
            </div>
        </td>
    );
}
