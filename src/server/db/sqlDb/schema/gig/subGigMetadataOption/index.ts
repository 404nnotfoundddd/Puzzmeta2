import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { createCuid2 } from '@/sqlDb/utils/createCuid2'
import { relations } from 'drizzle-orm'
import { subGigMetadata } from '../subGigMetadata'

export const subGigMetadataOption = pgTable('sub_gig_metadata_option', {
  ID: createCuid2(),
  name: varchar('name', { length: 255 }).notNull(),
  subGigMetadataID: varchar('sub_gig_metadata_ID', { length: 128 }).references(
    () => subGigMetadata.ID,
  ),
})

export const subGigMetadataOptionRelations = relations(
  subGigMetadataOption,
  ({ one }) => ({
    subGigMetadata: one(subGigMetadata, {
      fields: [subGigMetadataOption.subGigMetadataID],
      references: [subGigMetadata.ID],
    }),
  }),
)
