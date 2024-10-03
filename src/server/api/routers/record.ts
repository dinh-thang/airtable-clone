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

})