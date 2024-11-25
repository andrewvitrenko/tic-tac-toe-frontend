import { UserPlus2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';

import { Button } from '@/shared/ui/button';
import {
  GameCodeEnter,
  TGameCodeEnterProps,
} from '@/views/home/ui/game-code-enter';
import { PlayerName, TPlayerNameProps } from '@/views/home/ui/player-name';

export const JoinGame: FC = memo(() => {
  const router = useRouter();

  const [gameCodeOpen, setGameCodeOpen] = useState(false);
  const [playerNameOpen, setPlayerNameOpen] = useState(false);

  const onJoinGame = useCallback(() => setGameCodeOpen(true), []);

  const onGameCodeEnter: TGameCodeEnterProps['onSubmit'] = useCallback(
    ({ code }) => {
      console.log(code);
      setGameCodeOpen(false);
      setPlayerNameOpen(true);
    },
    [],
  );

  const onPlayerNameSubmit: TPlayerNameProps['onSubmit'] = useCallback(
    ({ name }) => {
      console.log(name);
      router.push('/game');
    },
    [router],
  );

  return (
    <div className="flex-1">
      <Button
        onClick={onJoinGame}
        size="lg"
        className="w-full"
        variant="secondary"
      >
        <UserPlus2Icon />
        Join Game
      </Button>
      <GameCodeEnter
        open={gameCodeOpen}
        onOpenChange={setGameCodeOpen}
        onSubmit={onGameCodeEnter}
      />
      <PlayerName
        open={playerNameOpen}
        onOpenChange={setPlayerNameOpen}
        onSubmit={onPlayerNameSubmit}
      />
    </div>
  );
});
JoinGame.displayName = 'JoinGame';
