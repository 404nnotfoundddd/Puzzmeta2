import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { createCuid2 } from '@/sqlDb/utils/createCuid2'
import { relations } from 'drizzle-orm'
import { subGig } from '../subGig'
import { subGigMetadataOption } from '../subGigMetadataOption'

export const subGigMetadata = pgTable('sub_gig_metadata', {
  ID: createCuid2(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  subGigID: varchar('sub_gig_ID', { length: 128 }).references(() => subGig.ID),
})

export const subGigMetadataRelations = relations(
  subGigMetadata,
  ({ many, one }) => ({
    subGigMetadataOptions: many(subGigMetadataOption),
    subGig: one(subGig, {
      fields: [subGigMetadata.subGigID],
      references: [subGig.ID],
    }),
  }),
)
