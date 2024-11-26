'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '@/features/auth';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

import { formSchema } from './config/form.config';
import { TLoginForm } from './model/form.model';

export const LoginForm: FC = memo(() => {
  const { mutateAsync, isPending } = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const form = useForm<TLoginForm>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = useCallback(
    async (data: TLoginForm) => {
      await mutateAsync(data);
      router.push('/');
    },
    [mutateAsync, router],
  );

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  disabled={isPending}
                  placeholder="Enter email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input
                    disabled={isPending}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    {...field}
                  />
                  <Button
                    size="icon"
                    type="button"
                    onClick={toggleShowPassword}
                    variant="secondary"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
});
LoginForm.displayName = 'LoginForm';
