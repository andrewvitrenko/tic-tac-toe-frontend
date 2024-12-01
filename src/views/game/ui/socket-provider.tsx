'use client';

import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/react/shallow';

import { GameApi, TGame } from '@/entities/game';
import { useGameStore } from '@/entities/game/store';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { EMessage } from '@/views/game/model/socket.model';

import { TParams } from '../model/params.model';

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const params = useParams<TParams>();

  const { setGame } = useGameStore(
    useShallow((state) => ({ setGame: state.setGame })),
  );

  const socket = useMemo(() => GameApi.getSocket(), []);

  const [connected, setConnected] = useState(false);

  const onUpdateGame = useCallback((game: TGame) => setGame(game), [setGame]);

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      socket.emit(EMessage.JOIN_GAME, { gameId: params.id });
      setConnected(true);
    });
    socket.on('exception', (data) => toast.error(data.message));
    socket.on('disconnect', () => {
      setConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, params.id]);

  useEffect(() => {
    socket.on(EMessage.MAKE_MOVE, onUpdateGame);
    socket.on(EMessage.GAME_OVER, onUpdateGame);
    socket.on(EMessage.JOIN_GAME, onUpdateGame);

    return () => {
      socket.off(EMessage.MAKE_MOVE, onUpdateGame);
      socket.off(EMessage.GAME_OVER, onUpdateGame);
      socket.off(EMessage.JOIN_GAME, onUpdateGame);
    };
  }, [socket, onUpdateGame]);

  if (!connected) {
    return (
      <Dialog open>
        <DialogContent className="max-w-max" disableClose>
          <DialogHeader className="hidden">
            <DialogTitle>Connecting to the game</DialogTitle>
            <DialogDescription>
              Wait for the game to be connected
            </DialogDescription>
          </DialogHeader>
          <Loader2 strokeWidth={1} size={80} className="animate-spin" />
        </DialogContent>
      </Dialog>
    );
  }

  return children;
};
