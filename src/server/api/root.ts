import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { baseRouter } from "~/server/api/routers/base";
import { fieldRouter } from "~/server/api/routers/field";
import { tableRouter } from "~/server/api/routers/table";
import { workspaceRouter } from "~/server/api/routers/workspace";
import { recordRouter } from "~/server/api/routers/record";
import { userRouter } from "~/server/api/routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  base: baseRouter,
  field: fieldRouter,
  table: tableRouter,
  workspace: workspaceRouter,
  record: recordRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
