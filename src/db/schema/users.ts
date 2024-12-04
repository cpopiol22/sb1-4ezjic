import { z } from 'zod';
import { db } from '../client';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(['candidate', 'company']),
  password_hash: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const candidateSchema = userSchema.extend({
  first_name: z.string(),
  last_name: z.string(),
  search_type: z.array(z.enum(['mission', 'job'])),
  skills: z.array(z.string()),
  tools: z.array(z.string()),
  years_of_experience: z.number(),
  cv_url: z.string().optional(),
});

export const companySchema = userSchema.extend({
  name: z.string(),
  description: z.string(),
  is_premium: z.boolean(),
});

export type User = z.infer<typeof userSchema>;
export type Candidate = z.infer<typeof candidateSchema>;
export type Company = z.infer<typeof companySchema>;