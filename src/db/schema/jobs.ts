import { z } from 'zod';

export const jobPostSchema = z.object({
  id: z.string().uuid(),
  company_id: z.string().uuid(),
  title: z.string(),
  location: z.string(),
  remote_days: z.number().min(0).max(5),
  is_automation: z.boolean(),
  is_manual: z.boolean(),
  salary_min: z.number(),
  salary_max: z.number(),
  skills: z.array(z.string()),
  description: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const missionSchema = jobPostSchema.omit({ salary_min: true, salary_max: true }).extend({
  duration: z.number(),
  daily_rate: z.number(),
});

export type JobPost = z.infer<typeof jobPostSchema>;
export type Mission = z.infer<typeof missionSchema>;