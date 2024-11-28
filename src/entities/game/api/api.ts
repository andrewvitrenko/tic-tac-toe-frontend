import axios, { AxiosInstance, isAxiosError } from 'axios';
import { getCookie } from 'cookies-next';

import { TGame } from '@/entities/game';
import { TError } from '@/shared/model/api.model';

class GameApiFactory {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/games`,
    });
  }

  public async create() {
    try {
      const response = await this.axios.post<TGame>('/new', undefined, {
        headers: { Authorization: `Bearer ${getCookie('access_token')}` },
      });

      return response.data;
    } catch (e) {
      if (isAxiosError<TError>(e)) {
        const { message } = e.response!.data;

        throw new Error(Array.isArray(message) ? message[0] : message);
      } else {
        return Promise.reject(e);
      }
    }
  }

  public async join(id: string) {
    try {
      const response = await this.axios.post<TGame>(`/join/${id}`, undefined, {
        headers: { Authorization: `Bearer ${getCookie('access_token')}` },
      });

      return response.data;
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

export const GameApi = new GameApiFactory();
