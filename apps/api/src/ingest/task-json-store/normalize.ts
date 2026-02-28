import type { NormalizedTaskDefinition, RawTaskDefinition } from '@api/ingest/task-json-store/types';

export function normalizeTaskDefinitions(taskType: string, tasks: RawTaskDefinition[]): NormalizedTaskDefinition[] {
  return tasks.map((task) => ({
    taskType,
    structId: task.structId,
    sortId: task.sortId,
    completionPercent: task.completionPercent ?? null,
    skillRequirements: task.skills ?? [],
    wikiNotes: task.wikiNotes ?? null,
    raw: task,
  }));
}
