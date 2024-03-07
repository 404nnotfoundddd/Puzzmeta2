import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { createCuid2 } from '@/sqlDb/utils/createCuid2'
import { gig } from '../gig'
import { relations } from 'drizzle-orm'
import { subGigMetadata } from '../subGigMetadata'

export const subGig = pgTable('sub_gig', {
  ID: createCuid2(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  gigID: varchar('gig_ID', { length: 128 }).references(() => gig.ID),
})

export const subGigRelations = relations(subGig, ({ many, one }) => ({
  metadata: many(subGigMetadata),

  gig: one(gig, {
    fields: [subGig.gigID],
    references: [gig.ID],
  }),
}))
