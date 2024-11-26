'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { toast } from 'sonner';

import { EUsersApiKey } from '@/entities/user/api/model';

import { AuthApi, EAuthApiKey, TLoginPayload } from '../api';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [EAuthApiKey.LOGIN],
    mutationFn: (data: TLoginPayload) => AuthApi.login(data),
    onError: (error) => toast.error(error.message),
    onSuccess: async ({ access_token }) => {
      setCookie('access_token', access_token);
      await queryClient.invalidateQueries({ queryKey: [EUsersApiKey.ME] });
    },
  });
};
