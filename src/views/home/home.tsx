'use client';

import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

import { JoinGame } from './ui/join-game';
import { NewGame } from './ui/new-game';

export const HomePage: FC = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Welcome to Tic-Tac-Toe
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center gap-4">
          <NewGame />
          <JoinGame />
        </CardContent>
      </Card>
    </div>
  );
};
