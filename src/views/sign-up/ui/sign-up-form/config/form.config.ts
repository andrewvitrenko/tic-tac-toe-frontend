import { z } from 'zod';

export const formSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(2),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
