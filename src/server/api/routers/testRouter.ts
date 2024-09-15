import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  addPost: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        content: z.string().optional(),
        tags: z.array(z.string()).optional(),
        coverImage: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.session.user;
    }),

});