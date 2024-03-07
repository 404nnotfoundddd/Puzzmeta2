import { createTRPCRouter } from '../../trpc'
import {
  getAllGigs,
  getSubGigs_WITH_Metadata_WITH_Options,
} from './subroutes/_routes'

export const gigRouter = createTRPCRouter({
  getAllGigs: getAllGigs,
  getSubGigs_WITH_Metadata_WITH_Options: getSubGigs_WITH_Metadata_WITH_Options,
})
