import { Metadata } from 'next';
import { FC } from 'react';

import { PageProtection } from '@/features/page-protection';
import { HomePage } from '@/views/home';

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
};

const Home: FC = () => {
  return (
    <PageProtection>
      <HomePage />
    </PageProtection>
  );
};

export default Home;
