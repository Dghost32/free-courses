// db/schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const cursos = pgTable('cursos', {
  id: serial('id').primaryKey(),
  titulo: text('titulo').notNull(),
  descripcion: text('descripcion'),
  creadoEn: timestamp('creado_en').defaultNow(),
});
