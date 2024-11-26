'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSignUp } from '@/features/auth';
import { omit } from '@/shared/lib/omit';
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
import { TSignUpForm } from './model/form.model';

export const SignUpForm: FC = memo(() => {
  const { mutateAsync, isPending } = useSignUp();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<TSignUpForm>({
    defaultValues: { confirmPassword: '', email: '', name: '', password: '' },
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const onSubmit = useCallback(
    async (data: TSignUpForm) => {
      await mutateAsync(omit(data, ['confirmPassword']));
      router.push('/');
    },
    [mutateAsync, router],
  );

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const toggleShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="email"
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter name"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="name"
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel> Password </FormLabel>
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
          name="password"
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel> Password </FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input
                    disabled={isPending}
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Repeat the password"
                    {...field}
                  />
                  <Button
                    size="icon"
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    variant="secondary"
                  >
                    {showConfirmPassword ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="confirmPassword"
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
});
SignUpForm.displayName = 'SignUpForm';
