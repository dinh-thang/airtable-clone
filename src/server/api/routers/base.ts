import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const baseRouter = createTRPCRouter({
  createBase: publicProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        name: z.string().min(1),
        color: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.base.create({
        data: {
          name: input.name,
          backgroundColor: input.color,
          workspaceId: input.workspaceId,
          tables: {
            create: {
              name: "Default",
              description: "Default table",
              fields: {
                create: [
                  { name: "Name", type: "Single line text" },
                  { name: "Notes", type: "Long text" },
                  { name: "Assignee", type: "User" },
                  { name: "Status", type: "Single select" },
                ],
              },
            },
          },
        },
      });
    }),

  getListOfTables: publicProcedure
    .input(
      z.object({
        baseId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.base.findUnique({
        where: {
          id: input.baseId,
        },
        select: {
          tables: {
            select: {
              id: true,
              name: true,
            }
          }
        }
      })
    }),

  getBaseById: publicProcedure
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