import { create } from 'zustand';

import { TGame } from '@/entities/game';
import { ECellValue } from '@/entities/game/model/cell.model';
import { EGameState } from '@/entities/game/model/game.model';

type TGameStore = {
  game: TGame;
  setGame: (game: TGame) => void;
};

const game: TGame = {
  id: 'b958a908-2d5a-4b05-8caa-c6de04042308',
  createdAt: '2021-09-21T08:00:00.000Z',
  updatedAt: '2021-09-21T08:00:00.000Z',
  state: EGameState.IN_PROGRESS,
  players: [],
  cells: [
    {
      id: '1',
      row: 0,
      col: 0,
      value: ECellValue.EMPTY,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '2',
      row: 0,
      col: 1,
      value: ECellValue.O,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '3',
      row: 0,
      col: 2,
      value: ECellValue.X,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '4',
      row: 1,
      col: 0,
      value: ECellValue.EMPTY,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '5',
      row: 1,
      col: 1,
      value: ECellValue.X,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '6',
      row: 1,
      col: 2,
      value: ECellValue.O,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '7',
      row: 2,
      col: 0,
      value: ECellValue.X,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '8',
      row: 2,
      col: 1,
      value: ECellValue.X,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
    {
      id: '9',
      row: 2,
      col: 2,
      value: ECellValue.EMPTY,
      createdAt: '2021-09-21T08:00:00.000Z',
      updatedAt: '2021-09-21T08:00:00.000Z',
    },
  ],
};

export const useGameStore = create<TGameStore>((set) => ({
  game: game,
  setGame: (game) => set({ game }),
}));
