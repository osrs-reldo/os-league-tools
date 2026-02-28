import type { NormalizedTaskDefinition, RawTaskDefinition, TaskTypeEnrichment } from '@api/ingest/task-json-store/types';

function mergeSkills(
  rawSkills: Array<{ skill: string; level: number }>,
  extraSkills: Array<{ skill: string; level: number }>
): Array<{ skill: string; level: number }> {
  const merged = new Map<string, number>();
  for (const entry of [...rawSkills, ...extraSkills]) {
    const current = merged.get(entry.skill);
    if (!current || entry.level > current) {
      merged.set(entry.skill, entry.level);
    }
  }
  return Array.from(merged.entries()).map(([skill, level]) => ({ skill, level }));
}

export function normalizeTaskDefinitions(
  taskType: string,
  tasks: RawTaskDefinition[],
  enrichment: TaskTypeEnrichment
): NormalizedTaskDefinition[] {
  return tasks.map((task) => {
    const taskId = String(task.structId);
    const extraSkills = enrichment.skillsByTaskId[taskId] ?? [];
    const extraQuests = enrichment.questsByTaskId[taskId] ?? [];

    return {
      taskType,
      structId: task.structId,
      sortId: task.sortId,
      completionPercent: task.completionPercent ?? null,
      skillRequirements: mergeSkills(task.skills ?? [], extraSkills),
      questRequirements: extraQuests,
      wikiNotes: task.wikiNotes ?? null,
      raw: task,
    };
  });
}
