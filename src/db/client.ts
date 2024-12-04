import { createClient } from '@libsql/client';
import { config } from '../config';

export const db = createClient({
  url: config.database.url,
  authToken: config.database.authToken,
});