import { readFileSync } from 'fs';
import { join } from 'path';
import { db } from '../client';

async function runMigrations() {
  try {
    const sql = readFileSync(join(process.cwd(), 'src/db/migrations/001_initial.sql'), 'utf-8');
    await db.execute(sql);
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}