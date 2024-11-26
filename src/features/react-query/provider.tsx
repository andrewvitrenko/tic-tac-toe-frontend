'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

import { queryClient } from './config/provider.config';

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
