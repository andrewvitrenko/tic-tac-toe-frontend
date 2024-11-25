import { zodResolver } from '@hookform/resolvers/zod';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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

import { formSchema } from './config/form.config';
import { TPlayerNameForm } from './model/form.model';
import { TPlayerNameProps } from './model/props.model';

export const PlayerName: FC<TPlayerNameProps> = memo(
  ({ onOpenChange, onSubmit, open }) => {
    const form = useForm<TPlayerNameForm>({
      resolver: zodResolver(formSchema),
      defaultValues: { name: '' },
    });

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Player name</DialogTitle>
            <DialogDescription>
              Enter you player&#39;s name. It will be unique for this game.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your player's name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                shouldUnregister
                name="name"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  },
);
PlayerName.displayName = 'PlayerName';
