'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { UserApi } from '@/entities/user';
import { EUsersApiKey } from '@/entities/user/api';

import { useUserStore } from '../store';

export const useGetMe = () => {
  const router = useRouter();

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
      router.push('/login');
    }
  }, [result.error, router]);

  useEffect(() => {
    if (result.data) {
      setUser(result.data);
    }
  }, [result.data, setUser]);

  return result;
};
