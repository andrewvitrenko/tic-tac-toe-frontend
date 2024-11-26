'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { toast } from 'sonner';

import { EUsersApiKey } from '@/entities/user/api/model';

import { AuthApi, EAuthApiKey, TSignupPayload } from '../api';

export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [EAuthApiKey.SIGNUP],
    mutationFn: (data: TSignupPayload) => AuthApi.signUp(data),
    onSuccess: async ({ access_token }) => {
      setCookie('access_token', access_token);
      await queryClient.invalidateQueries({ queryKey: [EUsersApiKey.ME] });
    },
    onError: (error) => toast.error(error.message),
  });
};
