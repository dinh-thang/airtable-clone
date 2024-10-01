import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  getAllWorkspacesByUserId: publicProcedure
    .input(
      z.object({
        userId: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.workspace.findMany({
        where: {
          userId: input.userId,
        },
        select: {
          id: true,
          name: true,
        }
      })
    })
})