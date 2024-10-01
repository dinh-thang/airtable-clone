import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const baseRouter = createTRPCRouter({
  getBaseById: protectedProcedure
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

  getAllBasesByWorkspaceIds: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.base.findMany({
        where: {
          workspaceId: input.workspaceId,
        },
      })
    }),
})