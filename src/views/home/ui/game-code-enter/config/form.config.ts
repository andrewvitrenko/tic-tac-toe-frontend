import { z, ZodString } from 'zod';

type TSchema = {
  code: ZodString;
};

export const formSchema = z.object<TSchema>({
  code: z.string().uuid({ message: 'Code must be a UUID string' }),
});
