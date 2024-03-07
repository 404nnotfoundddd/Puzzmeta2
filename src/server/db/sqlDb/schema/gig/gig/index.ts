import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { createCuid2 } from '@/sqlDb/utils/createCuid2'
import { relations } from 'drizzle-orm'
import { subGig } from '../subGig'

export const gig = pgTable('gig', {
  ID: createCuid2(),
  name: varchar('name', { length: 255 }).notNull().unique(),
})

export const gigRelations = relations(gig,({ many }) => ({
  subGigs: many(subGig),
}))
