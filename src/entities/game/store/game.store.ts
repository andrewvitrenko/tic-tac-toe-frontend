import { create } from 'zustand';

import { TGame } from '@/entities/game';
import { EGameState } from '@/entities/game/model/game.model';

type TGameStore = {
  game: TGame;
  setGame: (game: TGame) => void;
};

export const useGameStore = create<TGameStore>((set) => ({
  game: {
    id: '',
    createdAt: '',
    updatedAt: '',
    state: EGameState.INITIAL,
    players: [],
    cells: [],
  },
  setGame: (game) => set({ game }),
}));
