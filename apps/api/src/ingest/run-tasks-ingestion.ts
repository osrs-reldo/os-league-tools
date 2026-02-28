import 'dotenv/config';

import { logger } from '@api/logger';
import { fetchTaskStoreManifest, fetchTaskTypes, fetchTasksForType } from '@api/ingest/task-json-store/client';
import { normalizeTaskDefinitions } from '@api/ingest/task-json-store/normalize';

async function run() {
  const manifest = await fetchTaskStoreManifest();
  const taskTypes = await fetchTaskTypes(manifest);
  const enabledTaskTypes = taskTypes.filter((taskType) => taskType.isEnabled !== false);

  logger.info(
    {
      baseUrl: process.env.TASK_JSON_STORE_BASE_URL,
      taskTypes: enabledTaskTypes.map((taskType) => taskType.taskJsonName),
    },
    'Starting task ingestion dry-run'
  );

  let totalTasks = 0;
  for (const taskType of enabledTaskTypes) {
    const rawTasks = await fetchTasksForType(taskType.taskJsonName);
    const normalized = normalizeTaskDefinitions(taskType.taskJsonName, rawTasks);
    totalTasks += normalized.length;

    logger.info(
      {
        taskType: taskType.taskJsonName,
        taskCount: normalized.length,
        sampleStructIds: normalized.slice(0, 3).map((task) => task.structId),
      },
      'Normalized task definitions'
    );
  }

  logger.info({ totalTasks, taskTypeCount: enabledTaskTypes.length }, 'Task ingestion dry-run complete');
}

void run();
