import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const tableRouter = createTRPCRouter({
  createTable: publicProcedure
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

  getAllFieldsByTableId: publicProcedure
    .input(
      z.object({
        tableId: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.table.findUnique({
        where: {
          id: input.tableId,
        },
        select: {
          fields: {
            orderBy: {
              createdAt: "asc"
            }
          },
        }
      })
    }),

  getTableById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
        direction: z.enum(['forward', 'backward']).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 100;
      const cursor = input.cursor ? { id: input.cursor } : undefined;

      const table = await ctx.db.table.findUnique({
        where: {
          id: input.id,
        },
        include: {
          records: {
            orderBy: {
              createdAt: "asc"
            },
            take: limit + 1,
            cursor: cursor,
            skip: cursor ? 1 : 0,
          },
          fields: {
            orderBy: {
              createdAt: "asc"
            }
          }
        },
      });

      if (!table) return null;

      let nextCursor: typeof input.cursor | undefined = undefined;

      if (table.records.length > limit) {
        const nextItem = table.records.pop();
        nextCursor = nextItem?.id
      }

      return {
        table,
        nextCursor,
      }
    }),
})