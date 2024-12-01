'use client';

import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { EGameState } from '@/entities/game/model/game.model';
import { useGameStore } from '@/entities/game/store';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { useGetGame } from '@/views/game/api';
import { GameOver } from '@/views/game/ui/game-over';

import { TParams } from './model/params.model';
import { CurrentTurn } from './ui/current-turn';
import { Field } from './ui/field';
import { Header } from './ui/header';
import { SocketProvider } from './ui/socket-provider';

export const GamePage: FC = () => {
  const { game } = useGameStore(useShallow((state) => ({ game: state.game })));

  const params = useParams<TParams>();

  const { isFetching } = useGetGame(params.id);

  if (isFetching) {
    return (
      <Dialog open>
        <DialogContent disableClose>
          <DialogHeader className="hidden">
            <DialogTitle>Loading</DialogTitle>
            <DialogDescription>Wait for game to be loaded</DialogDescription>
          </DialogHeader>
          <Loader2 strokeWidth={1} size={80} className="animate-spin" />
        </DialogContent>
      </Dialog>
    );
  }

  if (game.state === EGameState.FINISHED) {
    return <GameOver />;
  }

  return (
    <SocketProvider>
      <Header />
      <div className="mx-auto max-w-md pt-12">
        <CurrentTurn />
        <Field />
      </div>
    </SocketProvider>
  );
};
