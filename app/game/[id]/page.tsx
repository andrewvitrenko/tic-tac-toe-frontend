import { Metadata } from 'next';
import { FC } from 'react';

import { PageProtection } from '@/features/page-protection';
import { GamePage } from '@/views/game';

export const metadata: Metadata = {
  title: 'Tic Tac Toe | Game',
};

const Game: FC = () => {
  return (
    <PageProtection>
      <GamePage />
    </PageProtection>
  );
};

export default Game;
