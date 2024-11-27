import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NONE_RELIC_ID, PASSIVE_RELICS, RELICS } from '../data/relics';
import { updateRelic } from '../store/unlocks/unlocks';
import Modal from './Modal';

export default function RelicUnlockModal({ isOpen, setIsOpen, tier }) {
  const existingRelics = useSelector(state => state.unlocks.relics);
  const availableRelics = RELICS[tier]?.filter(relic => relic.tier === tier + 1) ?? [];
  const [selectedRelic, setSelectedRelic] = useState(0);
  const prevTierPassiveRelicData = tier !== NONE_RELIC_ID ? PASSIVE_RELICS[tier - 1] : null;
  const passiveRelicData = tier !== NONE_RELIC_ID ? PASSIVE_RELICS[tier] : PASSIVE_RELICS[0];
  const [showReloadedOptions, setShowReloadedOptions] = useState(false);
  const dispatch = useDispatch();

  const onSelectRelic = relicId => () => {
    setSelectedRelic(relicId);
  };

  const onConfirm = () => {
    if (!showReloadedOptions && tier === 3 && selectedRelic === 1) {
      setShowReloadedOptions(true);
    } else {
      dispatch(updateRelic({ tier, id: selectedRelic }));
      setShowReloadedOptions(false);
      setIsOpen(false);
      setSelectedRelic(0);
    }
  };

  const handleCancelClicked = () => {
    if (showReloadedOptions) {
      setShowReloadedOptions(false);
    } else {
      setIsOpen(false);
    }
  };

  const renderRelicPicker = () =>
    passiveRelicData && (
      <>
        <div className='flex flex-col gap-1 m-4 text-center'>
          <span className='text-accent small-caps'>Passive unlocks</span>
          {passiveRelicData.exp.increased && (
            <span key='exp'>
              · Exp rates x{prevTierPassiveRelicData?.exp.multiplier ?? 1} → x{passiveRelicData.exp.multiplier}
            </span>
          )}
          {passiveRelicData.drops.increased && (
            <span key='drops'>
              · Drop rates x{prevTierPassiveRelicData?.drops.multiplier ?? 1} → x{passiveRelicData.drops.multiplier}
            </span>
          )}
          {passiveRelicData.minigames.increased && (
            <span key='minigames'>
              · Minigame points x{prevTierPassiveRelicData?.minigames.multiplier ?? 1} → x
              {passiveRelicData.minigames.multiplier}
            </span>
          )}
          {passiveRelicData.extras.map(extra => (
            <span key={extra}>· {extra}</span>
          ))}
          {!passiveRelicData.exp.increased &&
            !passiveRelicData.drops.increased &&
            !passiveRelicData.minigames.increased &&
            passiveRelicData.extras.length === 0 && <span key='none'>None</span>}
        </div>
        <div className='flex flex-col gap-2 m-4'>
          {availableRelics.map((relicData, index) => (
            <div
              className={`flex flex-row gap-4 p-2 cursor-pointer hover:bg-secondary-alt ${
                selectedRelic === index ? 'bg-secondary border-accent rounded' : ''
              }`}
              onClick={onSelectRelic(index)}
              key={index}
            >
              <div className='flex flex-col gap-2 justify-center'>
                <img className='max-w-[3rem]' src={relicData.icon} alt={relicData.label} />
              </div>
              <div>
                <p className='text-accent small-caps'>{relicData.label}</p>
                <div className='text-sm'>
                  {typeof relicData.description === 'string'
                    ? relicData.description
                    : relicData.description.map(line => <div key={line}>{line}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );

  const renderReloadedOptions = () => {
    const reloadedRelics = [
      ...RELICS[0].filter(relic => existingRelics[0] !== relic.id),
      ...RELICS[1].filter(relic => existingRelics[1] !== relic.id),
      ...RELICS[2].filter(relic => existingRelics[2] !== relic.id),
    ];

    return reloadedRelics.map(relicData => {
      const relicId = 3 * relicData.tier + relicData.id;
      return (
        <div
          className={`flex flex-row gap-4 p-2 cursor-pointer hover:bg-secondary-alt ${
            selectedRelic === relicId ? 'bg-secondary border-accent rounded' : ''
          }`}
          onClick={onSelectRelic(relicId)}
          key={`${relicData.tier}${relicData.id}}`}
        >
          <div className='flex flex-col gap-2 justify-center'>
            <img className='max-w-[3rem]' src={relicData.icon} alt={relicData.label} />
          </div>
          <div>
            <p className='text-accent small-caps'>{relicData.label}</p>
            <div className='text-sm'>
              {typeof relicData.description === 'string'
                ? relicData.description
                : relicData.description.map(line => <div key={line}>{line}</div>)}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => setShowReloadedOptions(false)}
      className='w-[50rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Choose a relic to unlock
      </Modal.Header>
      <Modal.Body className='text-primary h-[75vh] overflow-y-scroll '>
        {showReloadedOptions ? renderReloadedOptions() : renderRelicPicker()}
      </Modal.Body>
      <Modal.Footer>
        <div className='m-2 mt-1 mb-4 flex justify-between text-sm'>
          <button className='w-40 button-outline' type='button' onClick={handleCancelClicked}>
            {showReloadedOptions ? 'Back' : 'Cancel'}
          </button>
          <button className='w-40 button-filled' type='button' onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
