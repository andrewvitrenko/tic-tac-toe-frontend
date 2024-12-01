import { useRouter } from 'next/navigation';
import { FC, memo, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useGameStore } from '@/entities/game/store';
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

export const GameOver: FC<TGameOverProps> = memo(() => {
  const { winner } = useGameStore(
    useShallow((state) => ({ winner: state.game.winner })),
  );

  const router = useRouter();

  const description = useMemo(() => {
    if (winner)
      return `Player ${winner.name} won! Start a new game and try you fate!`;

    return 'Game over! You both have done a great job. Start a new game and try you fate!';
  }, [winner]);

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Game over!</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => router.push('/')}>
            Got it
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});
GameOver.displayName = 'GameOver';
