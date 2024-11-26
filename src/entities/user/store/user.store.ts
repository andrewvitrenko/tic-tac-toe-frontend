import { create } from 'zustand';

import { TUser } from '@/entities/user';

type TUserStore = {
  user: TUser;
  setUser: (user: TUser) => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  user: {
    id: '',
    name: '',
    email: '',
    createdAt: '',
    updatedAt: '',
  },
  setUser: (user) => set({ user }),
}));
