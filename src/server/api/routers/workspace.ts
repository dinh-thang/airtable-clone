import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const workspaceRouter = createTRPCRouter({
  getWorkspaceById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.workspace.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          bases: {
            select: {
              id: true,
              name: true,
              backgroundColor: true,
            }
          }
        }
      })
    }),
})