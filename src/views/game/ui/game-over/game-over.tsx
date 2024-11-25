import { FC, memo } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui/alert-dialog';

import { TGameOverProps } from './model/props.model';

export const GameOver: FC<TGameOverProps> = memo(
  ({ onContinueClick, onOpenChange, open, winner }) => {
    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Game over!</AlertDialogTitle>
            <AlertDialogDescription>
              Player {winner} won! Start a new game and try you fate!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={onContinueClick}>
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
);
GameOver.displayName = 'GameOver';
