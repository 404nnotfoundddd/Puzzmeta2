import { z } from 'zod'
import { publicProcedure } from '../../../trpc'
import { eq } from 'drizzle-orm'
import { subGig } from '@/schema/gig'

export const getSubGigs_WITH_Metadata_WITH_Options = publicProcedure
  .input(
    z.object({
      parentGigID: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const { parentGigID } = input

    const data = await ctx.db.query.subGig.findMany({
      columns: {
        name: true,
      },
      with: {
        metadata: {
          columns: {
            name: true,
          },
          with: {
            subGigMetadataOptions: {
              columns: {
                name: true,
              },
            },
          },
        },
      },
      where: eq(subGig.gigID, parentGigID),
    })

    return data
  })
