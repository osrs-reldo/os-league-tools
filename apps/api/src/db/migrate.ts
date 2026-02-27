import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

import { db, pool } from '@api/db/client';

async function main() {
  await migrate(db, { migrationsFolder: 'src/db/migrations' });
  await pool.end();
}

void main();
