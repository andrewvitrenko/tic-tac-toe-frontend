import { Metadata } from 'next';
import { FC } from 'react';

import { HomePage } from '@/views/home';

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
};

const Home: FC = () => {
  return <HomePage />;
};

export default Home;
