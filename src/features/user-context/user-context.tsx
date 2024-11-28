'use client';

import { Loader2 } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

import { useGetMe } from './api/use-get-me';

export const UserContext: FC<PropsWithChildren> = ({ children }) => {
  const { isFetching } = useGetMe();

  if (isFetching) {
    return (
      <Dialog open={isFetching}>
        <DialogContent className="max-w-max p-2" disableClose>
          <DialogHeader className="hidden">
            <DialogTitle>Loading user data</DialogTitle>
          </DialogHeader>
          <Loader2 strokeWidth={1} size={80} className="animate-spin" />
        </DialogContent>
      </Dialog>
    );
  }

  return children;
};
