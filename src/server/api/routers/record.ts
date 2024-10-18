import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const recordRouter = createTRPCRouter({
  updateRowContent: publicProcedure
    .input(
      z.object({
        rowId: z.string().min(1),
        fieldKey: z.string(),
        fieldValue: z.union([z.string(), z.number(), z.boolean(), z.null()]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { rowId, fieldKey, fieldValue } = input;

      const existingRecord = await ctx.db.record.findUnique({
        where: { id: rowId },
        select: { fields: true },
      });

      if (!existingRecord) {
        throw new Error('Record not found');
      }

      const currentFields = typeof existingRecord.fields === 'object' && existingRecord.fields !== null
        ? existingRecord.fields
        : {};

      const updatedFields = {
        ...currentFields,
        [fieldKey]: fieldValue,
      };

      return ctx.db.record.update({
        where: { id: rowId },
        data: {
          fields: updatedFields,
        },
      });
    }),

  addNewEmptyRecord: publicProcedure
    .input(
      z.object({
        tableId: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const table = await ctx.db.table.findUnique({
        where: { id: input.tableId },
      });

      if (!table) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Table not found',
        });
      }

      return ctx.db.record.create({
        data: {
          tableId: table.id,
          createdAt: new Date(),
          fields: {},
        },
      });
    }),

  getTotalRowsByTableId: publicProcedure
    .input(z.object({
      tableId: z.string(),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db.record.count({
        where: {
          tableId: input.tableId
        }
      })
    }),

  getAllRecordsByTableId: publicProcedure
    .input(z.object({
      tableId: z.string(),
      limit: z.number().min(1).max(200),
      cursor: z.string().nullish(),
    }))
    .query(async ({ ctx, input }) => {
      const { tableId, limit, cursor } = input;

      const records = await ctx.db.record.findMany({
        take: limit + 1,
        where: {
          tableId: tableId,
        },
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          index: "asc",
        }
      })

      let nextCursor: typeof cursor | undefined = undefined;

      if (records.length > limit) {
        const nextRecord = records.pop();
        nextCursor = nextRecord?.id;
      }

      return {
        records,
        nextCursor
      }
    })
})