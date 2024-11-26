'use client';

import { AxiosInstance } from 'axios';
import axios, { isAxiosError } from 'axios';
import { getCookie } from 'cookies-next';

import { TUser } from '@/entities/user';
import { TError } from '@/shared/model/api.model';

class UserApiFactory {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/users`,
    });
  }

  async getMe(): Promise<TUser> {
    try {
      const { data } = await this.axios.get<TUser>('/me', {
        headers: { Authorization: `Bearer ${getCookie('access_token')}` },
      });

      return data;
    } catch (e) {
      if (isAxiosError<TError>(e)) {
        const { message } = e.response!.data;

        throw new Error(Array.isArray(message) ? message[0] : message);
      } else {
        return Promise.reject(e);
      }
    }
  }
}

export const UserApi = new UserApiFactory();
