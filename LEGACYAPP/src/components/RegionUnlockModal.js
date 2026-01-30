import React, { useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { diaryTasksById } from '../data/diaries';
import { questsById } from '../data/quests';
import { regionsById, LEAGUES_REGIONS } from '../data/regions';
import { autoUnlockDiariesForRegion, autoUnlockQuestsForRegion, updateRegion } from '../store/unlocks/unlocks';
import Select from './common/Select';
import Modal from './Modal';

const UNLOCKABLE_REGION_OPTIONS = LEAGUES_REGIONS.map(region => ({
  label: region.label,
  value: region.id,
  icon: region.icon,
}));

export default function RegionUnlockModal({ isOpen, setIsOpen, tier, initialSelectedRegion }) {
  const regions = useSelector(state => state.unlocks.regions);
  const availableRegionOptions = UNLOCKABLE_REGION_OPTIONS.filter(
    ({ value }) => value === initialSelectedRegion || !regions.includes(value)
  );
  const [selectedRegion, setSelectedRegion] = useState();
  const selectedRegionData = regionsById[selectedRegion ?? availableRegionOptions[0].value];
  const dispatch = useDispatch();

  const onConfirm = () => {
    const regionId = selectedRegion ?? availableRegionOptions[0].value;
    batch(() => {
      dispatch(updateRegion({ tier, id: regionId }));
      dispatch(autoUnlockQuestsForRegion({ id: regionId }));
      dispatch(autoUnlockDiariesForRegion({ id: regionId }));
    });
    setIsOpen(false);
    setSelectedRegion(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Choose a region to unlock
      </Modal.Header>
      <Modal.Body className='text-primary text-sm'>
        <div className='m-2 mt-1'>
          <Select
            options={availableRegionOptions}
            value={selectedRegion ?? availableRegionOptions[0].value}
            onSelect={({ value }) => setSelectedRegion(value)}
          />
        </div>
        <div className='m-2 mt-1 text-accent text-base'>
          Click image to view region unlocks:
          <a href={selectedRegionData.infographic} target='_blank' rel='noreferrer'>
            <img src={selectedRegionData.infographic} alt='' />
          </a>
        </div>
        <div className='m-2 mt-1 text-accent text-base'>
          Unlocking {selectedRegionData.label} will automatically complete the following:
        </div>
        <div className='m-2 mt-1 flex flex-col gap-1 text-sm italic max-h-[200px] overflow-auto'>
          {selectedRegionData.questUnlocks.length > 0 && <p className='text-accent'>Quests</p>}
          {selectedRegionData.questUnlocks.map(questId => {
            const questData = questsById[questId];
            return (
              <p key={questData.id} className='pl-4'>
                {questData.label}
              </p>
            );
          })}
          {selectedRegionData.diaryUnlocks.length > 0 && <p className='text-accent'>Diary tasks</p>}
          {selectedRegionData.diaryUnlocks.map(diaryId => {
            const diaryData = diaryTasksById[diaryId];
            return (
              <p key={diaryData.id} className='pl-4'>
                {diaryData.task} ({diaryData.location.label} {diaryData.difficulty.label})
              </p>
            );
          })}
        </div>
        <div className='m-2 mt-1 text-accent text-base'>This cannot be undone. Are you sure?</div>
        <div className='m-2 mt-1 mb-4 flex justify-between'>
          <button className='w-40 button-outline' type='button' onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button className='w-40 button-filled' type='button' onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
