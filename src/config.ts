import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const configSchema = z.object({
  database: z.object({
    url: z.string(),
    authToken: z.string(),
  }),
});

export const config = configSchema.parse({
  database: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});