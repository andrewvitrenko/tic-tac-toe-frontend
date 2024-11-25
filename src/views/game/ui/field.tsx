'use client';

import { FC, memo, useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useGameStore } from '@/entities/game/store/game.store';
import { Cell } from '@/views/game/ui/cell';

export const Field: FC = memo(() => {
  const { cells } = useGameStore(
    useShallow((state) => ({ cells: state.game.cells })),
  );

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

  const onClick = useCallback((id: string) => {
    console.log(id);
  }, []);

  return (
    <div className="mt-8 grid grid-cols-3 grid-rows-3 divide-x divide-y border">
      {sortedCells.map((cell) => (
        <div key={cell.id}>
          <Cell {...cell} onClick={onClick} />
        </div>
      ))}
    </div>
  );
});
Field.displayName = 'Field';
