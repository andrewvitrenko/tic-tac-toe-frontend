'use client';

import { FC, PropsWithChildren, useEffect } from 'react';

import { socket } from '@/features/socket/config/socket.config';

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    socket.on('disconnect', (reason, description) => {
      console.log('Disconnected from server', reason, description);
    });
    socket.on('connect_error', (error) => {
      console.log('Connection error', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return children;
};
