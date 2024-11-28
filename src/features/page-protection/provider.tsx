import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { UserContext } from '@/features/user-context';

import { isTokenExpired } from './lib/is-token-expired';

export const PageProtection: FC<PropsWithChildren> = ({ children }) => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get('access_token');

  if (!accessToken?.value) {
    redirect('/login');
  }

  if (isTokenExpired(accessToken.value)) {
    redirect('/login');
  }

  return <UserContext>{children}</UserContext>;
};
