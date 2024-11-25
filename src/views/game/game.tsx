'use client';

import { FC } from 'react';

import { CurrentTurn } from './ui/current-turn';
import { Field } from './ui/field';
import { Header } from './ui/header';

export const GamePage: FC = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-md pt-12">
        <CurrentTurn />
        <Field />
      </div>
    </div>
  );
};
