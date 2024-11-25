import { Copy } from 'lucide-react';
import { FC, memo, useCallback } from 'react';
import { toast } from 'sonner';

import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';

import { TGameCodeCopyProps } from './mode/props.model';

export const GameCodeCopy: FC<TGameCodeCopyProps> = memo(
  ({ code, open, onOpenChange, onContinueClick }) => {
    const onCopyClick = useCallback(async () => {
      await navigator.clipboard.writeText(code);

      toast.success('Copied to clipboard', { position: 'bottom-center' });
    }, [code]);

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Game code</DialogTitle>
            <DialogDescription>
              Send this code to the person you want to play with.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4">
            <Input
              id="code"
              defaultValue={code}
              className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
            />
            <Button
              size="icon"
              onClick={onCopyClick}
              className="h-full shrink-0"
            >
              <Copy />
            </Button>
          </div>
          <Button onClick={onContinueClick}>Continue</Button>
        </DialogContent>
      </Dialog>
    );
  },
);
GameCodeCopy.displayName = 'GameCodeCopy';
