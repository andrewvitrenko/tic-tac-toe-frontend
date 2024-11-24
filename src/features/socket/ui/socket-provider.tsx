'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useGameStore } from '@/entities/game/store/game.store';
import { socket } from '@/features/socket/config/socket.config';

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const {} = useGameStore(useShallow((state) => ({ setGame: state.setGame })));

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return children;
};
