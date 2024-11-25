'use client';

import { FC, memo, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { ECellValue } from '@/entities/game/model/cell.model';
import { EGameState } from '@/entities/game/model/game.model';
import { useGameStore } from '@/entities/game/store/game.store';
import { Button } from '@/shared/ui/button';

import { icons } from './config/cell.config';
import { TCellProps } from './model/props.model';

export const Cell: FC<TCellProps> = memo(({ onClick, id, value }) => {
  const { state } = useGameStore(
    useShallow((state) => ({ state: state.game.state })),
  );

  const Icon = useMemo(() => icons[value], [value]);
  const disabled = useMemo(
    () => value !== ECellValue.EMPTY || state !== EGameState.IN_PROGRESS,
    [state, value],
  );

  return (
    <Button
      disabled={disabled}
      variant="ghost"
      className="size-full py-4 disabled:opacity-100 [&_svg]:size-auto"
      onClick={() => onClick(id)}
    >
      {Icon}
    </Button>
  );
});
Cell.displayName = 'Cell';
