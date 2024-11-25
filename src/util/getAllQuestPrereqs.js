import { questsById } from '../data/quests';

function traverseQuestsRecursive(questId, callback) {
  const { prereqs } = questsById[questId];
  prereqs.map(id => traverseQuestsRecursive(id, callback));
}

export default function getAllQuestPrereqs(questIds) {
  const allPrereqs = new Set();
  for (const questId of questIds) {
    traverseQuestsRecursive(questId, id => allPrereqs.add(id));
  }
  return Array.from(allPrereqs);
}
