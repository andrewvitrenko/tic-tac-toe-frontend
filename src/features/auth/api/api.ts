import axios, { AxiosInstance, isAxiosError } from 'axios';

import { TError } from '@/shared/model/api.model';

import { TLoginPayload, TSignupPayload, TTokenResponse } from './model';

class AuthApiFactory {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
    });
  }

  async login(payload: TLoginPayload): Promise<TTokenResponse> {
    try {
      const { data } = await this.axios.post<TTokenResponse>('/login', payload);

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

  async signUp(payload: TSignupPayload): Promise<TTokenResponse> {
    try {
      const { data } = await this.axios.post<TTokenResponse>(
        '/sign-up',
        payload,
      );

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

export const AuthApi = new AuthApiFactory();
