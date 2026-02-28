import 'dotenv/config';

import { logger } from '@api/logger';
import { fetchTaskStoreManifest, fetchTaskTypes, fetchTasksForType } from '@api/ingest/task-json-store/client';
import { normalizeTaskDefinitions } from '@api/ingest/task-json-store/normalize';
import { upsertTasks, upsertTaskTypes } from '@api/ingest/task-json-store/upsert';
import { pool } from '@api/db/client';

async function run() {
  try {
    const manifest = await fetchTaskStoreManifest();
    const taskTypes = await fetchTaskTypes(manifest);
    const enabledTaskTypes = taskTypes.filter((taskType) => taskType.isEnabled !== false);

    logger.info(
      {
        baseUrl: process.env.TASK_JSON_STORE_BASE_URL,
        taskTypes: enabledTaskTypes.map((taskType) => taskType.taskJsonName),
      },
      'Starting task ingestion'
    );

    const taskTypeUpserts = await upsertTaskTypes(enabledTaskTypes);
    logger.info({ taskTypeUpserts }, 'Task types upserted');

    let totalTasks = 0;
    for (const taskType of enabledTaskTypes) {
      const rawTasks = await fetchTasksForType(taskType.taskJsonName);
      const normalized = normalizeTaskDefinitions(taskType.taskJsonName, rawTasks);
      totalTasks += normalized.length;
      const upserted = await upsertTasks(normalized);

      logger.info(
        {
          taskType: taskType.taskJsonName,
          taskCount: normalized.length,
          upserted,
          sampleStructIds: normalized.slice(0, 3).map((task) => task.structId),
        },
        'Task definitions normalized and upserted'
      );
    }

    logger.info({ totalTasks, taskTypeCount: enabledTaskTypes.length }, 'Task ingestion complete');
  } catch (error) {
    logger.error({ error }, 'Task ingestion failed');
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

void run();
