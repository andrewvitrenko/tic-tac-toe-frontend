'use client';

import { FC, memo, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useGameStore } from '@/entities/game/store/game.store';

export const CurrentTurn: FC = memo(() => {
  const { turn, players } = useGameStore(
    useShallow((state) => ({
      turn: state.game.turn,
      players: state.game.players,
    })),
  );

  const playerName = useMemo(() => {
    const player = players.find(({ id }) => id === turn);

    return player?.user.name;
  }, [players, turn]);

  return (
    <h1 className="text-center text-4xl font-bold">
      Current turn: {playerName}
    </h1>
  );
});
CurrentTurn.displayName = 'CurrentTurn';
