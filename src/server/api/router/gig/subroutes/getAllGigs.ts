import { publicProcedure } from '../../../trpc'
import { gig } from '@/schema/gig'

export const getAllGigs = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.db
    .select({
      ID: gig.ID,
      name: gig.name,
    })
    .from(gig)

  return data
})
