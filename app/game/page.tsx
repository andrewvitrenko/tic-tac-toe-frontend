import { Metadata } from 'next';
import { FC } from 'react';

import { GamePage } from '@/views/game';

export const metadata: Metadata = {
  title: 'Tic Tac Toe | Game',
};

const Game: FC = () => {
  return <GamePage />;
};

export default Game;
