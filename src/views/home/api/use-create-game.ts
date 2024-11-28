'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { EGameApiKey, GameApi } from '@/entities/game/api';
import { useGameStore } from '@/entities/game/store';

export const useCreateGame = () => {
  const { setGame } = useGameStore(
    useShallow((state) => ({ setGame: state.setGame })),
  );

  return useMutation({
    mutationKey: [EGameApiKey.CREATE],
    mutationFn: () => GameApi.create(),
    onError: (error) => toast.error(error.message),
    onSuccess: (game) => setGame(game),
  });
};
