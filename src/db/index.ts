// db/index.ts
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema'; // tu archivo con las tablas definidas

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
