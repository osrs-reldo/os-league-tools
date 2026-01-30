import { questsById } from '../data/quests';

function traverseQuestsRecursive(questId, callback) {
  const { prereqs } = questsById[questId];
  prereqs.forEach(id => {
    callback(id);
    traverseQuestsRecursive(id, callback);
  });
}

export default function getAllQuestPrereqs(questIds) {
  const allPrereqs = new Set();
  questIds.forEach(questId => {
    allPrereqs.add(questId);
    traverseQuestsRecursive(questId, id => allPrereqs.add(id));
  });
  return Array.from(allPrereqs);
}
