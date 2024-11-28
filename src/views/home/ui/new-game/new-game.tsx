import { CirclePlusIcon, Copy, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { useCreateGame } from '@/views/home/api';

export const NewGame: FC = memo(() => {
  // 1. create game
  // 2. open dialog
  // 3. add game id route param
  // 4. add game provider

  const { isSuccess, mutate, isPending, data } = useCreateGame();

  const [copied, setCopied] = useState(false);

  const router = useRouter();

  const onCopyClick = useCallback(async () => {
    if (!data?.id) return;

    await navigator.clipboard.writeText(data.id);
    setCopied(true);
    toast.success('Copied to clipboard', { position: 'bottom-center' });
  }, [data?.id]);

  const onContinueClick = useCallback(() => router.push('/game'), [router]);

  const onCreateGame = useCallback(() => mutate(), [mutate]);

  return (
    <Dialog open={isSuccess}>
      <DialogTrigger asChild>
        <Button className="flex-1" disabled={isPending} onClick={onCreateGame} size="lg">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <CirclePlusIcon />
          )}{' '}
          New game
        </Button>
      </DialogTrigger>
      <DialogContent disableClose>
        <DialogHeader>
          <DialogTitle>Game code</DialogTitle>
          <DialogDescription>
            Send this code to the person you want to play with.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4">
          <Input
            id="code"
            defaultValue={data?.id}
            className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
          />
          <Button size="icon" onClick={onCopyClick} className="h-full shrink-0">
            <Copy />
          </Button>
        </div>
        <Button disabled={!copied} onClick={onContinueClick}>
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
});
NewGame.displayName = 'NewGame';
