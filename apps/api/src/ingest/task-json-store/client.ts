import { env } from '@api/env';
import { logger } from '@api/logger';

import type { RawTaskDefinition, TaskStoreManifest, TaskTypeDefinition, TaskTypeEnrichment } from '@api/ingest/task-json-store/types';

function buildUrl(path: string): string {
  return `${env.TASK_JSON_STORE_BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(buildUrl(path));
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }
  return (await response.json()) as T;
}

export async function fetchTaskStoreManifest(): Promise<TaskStoreManifest> {
  return fetchJson<TaskStoreManifest>('manifest.json');
}

export async function fetchTaskTypes(manifest: TaskStoreManifest): Promise<TaskTypeDefinition[]> {
  return fetchJson<TaskTypeDefinition[]>(manifest.taskTypeMetadata);
}

export async function fetchTasksForType(taskJsonName: string): Promise<RawTaskDefinition[]> {
  const tasks = await fetchJson<RawTaskDefinition[]>(`tasks/${taskJsonName}.min.json`);
  logger.info({ taskJsonName, taskCount: tasks.length }, 'Fetched task definitions');
  return tasks;
}

type TaskCustomData<T> = {
  key: string;
  values: Record<string, T>;
};

export async function fetchTaskEnrichmentForType(taskJsonName: string): Promise<TaskTypeEnrichment> {
  const [skillsResult, questsResult] = await Promise.allSettled([
    fetchJson<TaskCustomData<Array<{ skill: string; level: number }>>>(`custom-data/${taskJsonName}/skills.json`),
    fetchJson<TaskCustomData<number[]>>(`custom-data/${taskJsonName}/quests.json`),
  ]);

  const enrichment: TaskTypeEnrichment = {
    skillsByTaskId: {},
    questsByTaskId: {},
  };

  if (skillsResult.status === 'fulfilled') {
    enrichment.skillsByTaskId = skillsResult.value.values ?? {};
  }
  if (questsResult.status === 'fulfilled') {
    enrichment.questsByTaskId = questsResult.value.values ?? {};
  }

  logger.info(
    {
      taskJsonName,
      skillsMappings: Object.keys(enrichment.skillsByTaskId).length,
      questMappings: Object.keys(enrichment.questsByTaskId).length,
    },
    'Fetched task enrichment mappings'
  );

  return enrichment;
}
