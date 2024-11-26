import { QueryClient } from '@tanstack/query-core';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: { retry: false, throwOnError: false },
    queries: {
      retry: false,
      throwOnError: false,
      refetchOnMount: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
