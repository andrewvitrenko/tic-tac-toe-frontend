'use client';

import { FC, memo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useGameStore } from '@/entities/game/store/game.store';

export const CurrentTurn: FC = memo(() => {
  const { turn } = useGameStore(
    useShallow((state) => ({ turn: state.game.turn })),
  );

  return (
    <h1 className="text-center text-4xl font-bold">Current turn: {turn}</h1>
  );
});
CurrentTurn.displayName = 'CurrentTurn';
