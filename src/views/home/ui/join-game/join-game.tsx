'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, UserPlus2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/shared/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { useJoinGame } from '@/views/home/api';

import { formSchema } from './config/form.config';
import { TJoinGameForm } from './model/form.model';

export const JoinGame: FC = memo(() => {
  const { mutateAsync } = useJoinGame();

  const router = useRouter();

  const form = useForm<TJoinGameForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<TJoinGameForm> = useCallback(
    async ({ code }) => {
      await mutateAsync(code);
      router.push('/game');
    },
    [mutateAsync, router],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="flex-1" variant="secondary">
          <UserPlus2Icon />
          Join Game
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Join Game</DialogHeader>
        <DialogDescription>
          Enter the game code your friend shared with you
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input
                      className="overflow-hidden text-ellipsis whitespace-nowrap"
                      placeholder="Enter the game code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name="code"
              shouldUnregister
            />
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              className="w-full"
              type="submit"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin" />
              )}
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
});
JoinGame.displayName = 'JoinGame';
