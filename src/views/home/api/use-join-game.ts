'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { EGameApiKey, GameApi } from '@/entities/game/api';
import { useGameStore } from '@/entities/game/store';

export const useJoinGame = () => {
  const { setGame } = useGameStore(
    useShallow((state) => ({ setGame: state.setGame })),
  );

  return useMutation({
    mutationKey: [EGameApiKey.JOIN],
    mutationFn: (id: string) => GameApi.join(id),
    onSuccess: (game) => setGame(game),
    onError: (error) => toast.error(error.message),
  });
};
