import { zodResolver } from '@hookform/resolvers/zod';
import { Clipboard } from 'lucide-react';
import { FC, memo, useCallback } from 'react';
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
import { TGameCodeEnterForm } from './model/form.model';
import { TGameCodeEnterProps } from './model/props.model';

export const GameCodeEnter: FC<TGameCodeEnterProps> = memo(
  ({ onOpenChange, open, onSubmit }) => {
    const form = useForm<TGameCodeEnterForm>({
      resolver: zodResolver(formSchema),
      defaultValues: { code: '' },
    });

    const onPaste = useCallback(async () => {
      const code = await navigator.clipboard.readText();

      if (code) {
        form.setValue('code', code, {
          shouldValidate: true,
          shouldTouch: true,
        });
      }
    }, [form]);

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Game code</DialogTitle>
            <DialogDescription>
              Enter the code of the game you want to join
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Input
                          className="overflow-hidden text-ellipsis whitespace-nowrap"
                          placeholder="Enter the game code"
                          {...field}
                        />
                        <Button
                          onClick={onPaste}
                          variant="secondary"
                          size="icon"
                        >
                          <Clipboard />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                name="code"
                shouldUnregister
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  },
);
GameCodeEnter.displayName = 'GameCodeEnter';
