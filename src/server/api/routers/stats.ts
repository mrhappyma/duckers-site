import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const statsRouter = createTRPCRouter({
  get: publicProcedure.query(async () => {
    const appDirectoryRequest = await fetch(
      "https://discord.com/api/v9/application-directory/applications/906651557829967902/embed",
      {
        headers: {
          Authorization: env.DISCORD_TOKEN,
        },
      },
    );
    if (!appDirectoryRequest.ok) {
      return {};
    }
    const appDirectory = (await appDirectoryRequest.json()) as {
      directory_entry: {
        guild_count: number;
      };
    };
    return {
      guildCount: appDirectory.directory_entry.guild_count,
    };
  }),
});
