import { difference } from 'lodash';
import { UNLOCKED_REGION_FILTER_VALUE } from '../components/CalculatorFilters';
import { STATS } from '../data/constants';
import { regionsById } from '../data/regions';
import tasks, { REGION_ANY } from '../data/tasks';

function difficultyFilter(record, filterState) {
  if (filterState.difficulty === null) {
    return true;
  }
  return filterState.difficulty.includes(record.difficulty.label);
}

function categoryFilter(record, filterState) {
  if (filterState.categories === null) {
    return true;
  }
  const recordCategory = `${record.category.label}-${record.subcategory.label}`;

  return filterState.categories.includes(recordCategory);
}

function skillFilter(record, filterState, { hiscoresState }) {
  const taskSkills = record.skillReqs.map(req => req.skill);

  // Check if required skills are included in filter
  const includeNoReq = filterState.showNoRequirements;
  const hasValidSkills = difference(taskSkills, filterState.skills).length === 0;
  if (!hasValidSkills || (!includeNoReq && taskSkills.length === 0)) {
    return false;
  }

  // Check if level requirements should be ignored
  if (!hiscoresState || hiscoresState.loading || hiscoresState.error || filterState.showUnmetRequirements) {
    return true;
  }

  // Check if level requirements are met
  let meetsRequirements = true;
  record.skillReqs.forEach(skillReq => {
    const hiscores = hiscoresState.skills[skillReq.skill.toLowerCase()];
    const levelBoost = filterState.isProductionProdigy && STATS[skillReq.skill]?.productionProdigyEligible ? 12 : 0;
    const level = (hiscores?.level || 1) + levelBoost;
    meetsRequirements = meetsRequirements && level >= skillReq.level;
  });
  return meetsRequirements;
}

function prereqFilter(record, filterState, { taskState }) {
  if (filterState.showIncompletePrereqs || !record.prerequisite) {
    return true;
  }

  const prereq = tasks[record.prerequisite];
  return !!taskState[prereq.id]?.completed;
}

function completedFilter(record, filterState, { taskState }) {
  if (filterState.status === 'all') {
    return true;
  }
  const status = !!taskState[record.id]?.completed;
  return (filterState.status === 'cmpl') === !!status;
}

function todoFilter(record, filterState, { taskState }) {
  if (filterState.todo === 'all') {
    return true;
  }
  const todo = !!taskState[record.id]?.todo;
  return (filterState.todo === 'only') === !!todo;
}

function ignoredFilter(record, filterState, { taskState }) {
  if (filterState.ignored === 'all') {
    return true;
  }
  const ignored = !!taskState[record.id]?.ignored;
  return (filterState.ignored === 'only') === !!ignored;
}

function regionsFilter(record, filterState, { regionsState }) {
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);
  if (filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE) {
    return record.regions[0] === REGION_ANY || record.regions.some(area => unlockedRegionNames.includes(area));
  }
  return record.regions.some(area => filterState.regions.includes(area));
}

export default [
  difficultyFilter,
  categoryFilter,
  skillFilter,
  completedFilter,
  todoFilter,
  ignoredFilter,
  prereqFilter,
  regionsFilter,
];
