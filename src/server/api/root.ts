import { createTRPCRouter } from "~/server/api/trpc";
import { statsRouter } from "./routers/stats";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  stats: statsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
