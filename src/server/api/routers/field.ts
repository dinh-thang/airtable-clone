import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure, publicProcedure
} from "~/server/api/trpc";

export const fieldRouter = createTRPCRouter({
  createField: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        type: z.string().min(1),
        description: z.string().optional(),
        tableId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {


      return ctx.db.field.create({
        data: {
          name: input.name,
          type: input.type,
          description: input.description,
          tableId: input.tableId,
        }
      })
    }),

  getAllFieldsByTableId: publicProcedure
    .input(z.object({
      tableId: z.string(),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db.field.findMany({
        where: {
          tableId: input.tableId,
        },
        select: {
          id: true,
          name: true,
        },
        orderBy: {
          createdAt: "asc"
        }
      })
    })
});