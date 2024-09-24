import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const workspaceRouter = createTRPCRouter({
  getWorkspaceById: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.base.findUnique({
        where: {
          id: input.id,
        }
      })
    }),
})