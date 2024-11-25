import { z, ZodString } from 'zod';

type TSchema = {
  name: ZodString;
};

export const formSchema = z.object<TSchema>({
  name: z
    .string()
    .min(6, { message: 'Player name must be at least 6 characters' }),
});
