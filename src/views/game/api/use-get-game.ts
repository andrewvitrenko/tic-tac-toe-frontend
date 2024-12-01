'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { EGameApiKey, GameApi } from '@/entities/game/api';
import { useGameStore } from '@/entities/game/store';

export const useGetGame = (id: string) => {
  const { game, setGame } = useGameStore(
    useShallow((state) => ({ setGame: state.setGame, game: state.game })),
  );

  const response = useQuery({
    queryKey: [EGameApiKey.GET],
    queryFn: () => GameApi.getOne(id),
    enabled: !game.id,
  });

  useEffect(() => {
    if (response.data) {
      setGame(response.data);
    }
  }, [response.data, setGame]);

  useEffect(() => {
    if (response.error) {
      toast.error(response.error.message);
    }
  }, [response.error]);

  return response;
};
