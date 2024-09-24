import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const tableRouter = createTRPCRouter({
  createTable: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
        baseId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.table.create({
        data: {
          name: input.name,
          description: input.description,
          baseId: input.baseId,
          fields: {
            create: [
              {name: "Name", type: "Single line text"},
              {name: "Notes", type: "Long text"},
              {name: "Assignee", type: "User"},
              {name: "Status", type: "Single select"},
            ]
          }
        }
      })
    }),

  getTableById: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.table.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          fields: true,
          records: {
            select: {
              id: true,
              fields: true
            }
          }
        },
      })
    }),
})