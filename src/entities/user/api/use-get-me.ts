'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { useUserStore } from '@/entities/user';

import { UserApi } from './api';
import { EUsersApiKey } from './model';

export const useGetMe = () => {
  const { setUser } = useUserStore(
    useShallow((state) => ({ setUser: state.setUser })),
  );

  const result = useQuery({
    queryKey: [EUsersApiKey.ME],
    queryFn: () => UserApi.getMe(),
  });

  useEffect(() => {
    if (result.error) {
      toast.error(result.error.message);
    }
  }, [result.error]);

  useEffect(() => {
    if (result.data) {
      setUser(result.data);
    }
  }, [result.data, setUser]);

  return result;
};
