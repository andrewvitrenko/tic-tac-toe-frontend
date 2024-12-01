'use client';

import { FC, memo, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { ECellValue } from '@/entities/game/model/cell.model';
import { EGameState } from '@/entities/game/model/game.model';
import { useGameStore } from '@/entities/game/store/game.store';
import { useUserStore } from '@/features/user-context/store';
import { Button } from '@/shared/ui/button';

import { icons } from './config/cell.config';
import { TCellProps } from './model/props.model';

export const Cell: FC<TCellProps> = memo(({ onClick, id, value }) => {
  const { state, turn, players } = useGameStore(
    useShallow((state) => ({
      state: state.game.state,
      turn: state.game.turn,
      players: state.game.players,
    })),
  );

  const { user } = useUserStore(useShallow((state) => ({ user: state.user })));

  const Icon = useMemo(() => icons[value], [value]);
  const disabled = useMemo(() => {
    return (
      value !== ECellValue.EMPTY ||
      state !== EGameState.IN_PROGRESS ||
      !turn ||
      turn !== players.find((p) => p.user.id === user.id)?.id
    );
  }, [state, value, turn, user.id, players]);

  return (
    <Button
      disabled={disabled}
      variant="ghost"
      className="size-full rounded-none py-4 disabled:opacity-100 [&:not(:nth-child(3n))]:border-r [&:not(:nth-child(n+6))]:border-b [&_svg]:size-auto"
      onClick={() => onClick(id)}
    >
      {Icon}
    </Button>
  );
});
Cell.displayName = 'Cell';
