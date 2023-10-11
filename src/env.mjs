import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "tst", "production"]).optional(),
  DISCORD_TOKEN: z.string(), //Not the bot token! A user token to grab the guild count from the application directory :)
})
export const env = envSchema.parse(process.env);