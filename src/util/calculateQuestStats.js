import QUESTS from '../data/quests';
import { QUEST_STATUS } from '../data/constants';

export default function calculateQuestStats(questState) {
  const completedQuests = Object.entries(questState).filter(([, status]) => status === QUEST_STATUS.FINISHED);
  const inProgressQuests = Object.entries(questState).filter(([, status]) => status === QUEST_STATUS.IN_PROGRESS);
  const totalQuests = QUESTS.length;

  let questPoints = 0;
  const finished = completedQuests.length;
  const inProgress = inProgressQuests.length;
  const notStarted = totalQuests - finished - inProgress;

  for (const [id] of completedQuests) {
    const questDetails = QUESTS.find(quest => quest.id === id);
    questPoints += questDetails.points || 0;
  }

  return { points: questPoints, finished, inProgress, notStarted };
}
