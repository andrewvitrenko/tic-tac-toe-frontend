'use client';

import { useParams } from 'next/navigation';
import { FC, memo, useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { GameApi } from '@/entities/game';
import { useGameStore } from '@/entities/game/store/game.store';
import { TParams } from '@/views/game/model/params.model';
import { EMessage } from '@/views/game/model/socket.model';
import { Cell } from '@/views/game/ui/cell';

export const Field: FC = memo(() => {
  const params = useParams<TParams>();

  const { cells } = useGameStore(
    useShallow((state) => ({ cells: state.game.cells })),
  );

  const socket = useMemo(() => GameApi.getSocket(), []);

  const sortedCells = useMemo(
    () =>
      [...cells].sort((a, b) => {
        if (a.row === b.row) {
          // Compare cells on the same row
          return a.col - b.col;
        }

        return a.row - b.row;
      }),
    [cells],
  );

  const onClick = useCallback(
    (id: string) => {
      socket.emit(EMessage.MAKE_MOVE, { gameId: params.id, cellId: id });
    },
    [params.id, socket],
  );

  return (
    <div className="mt-8 grid h-96 grid-cols-3 grid-rows-3 rounded border">
      {sortedCells.map((cell) => (
        <div key={cell.id}>
          <Cell {...cell} onClick={onClick} />
        </div>
      ))}
    </div>
  );
});
Field.displayName = 'Field';
