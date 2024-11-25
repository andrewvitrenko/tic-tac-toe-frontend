import { CirclePlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo, useCallback, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useGameStore } from '@/entities/game/store/game.store';
import { Button } from '@/shared/ui/button';
import { GameCodeCopy } from '@/views/home/ui/game-code-copy';
import { PlayerName, TPlayerNameProps } from '@/views/home/ui/player-name';

export const NewGame: FC = memo(() => {
  const { game } = useGameStore(useShallow((state) => ({ game: state.game })));

  const router = useRouter();

  const [playerNameOpen, setPlayerNameOpen] = useState(false);
  const [gameCodeOpen, setGameCodeOpen] = useState(false);

  const onSubmit: TPlayerNameProps['onSubmit'] = useCallback(({ name }) => {
    console.log(name);
    setPlayerNameOpen(false);
    setGameCodeOpen(true);
  }, []);

  const onGameStart = useCallback(() => {
    router.push('/game');
  }, [router]);

  const onNewGameClick = useCallback(() => setPlayerNameOpen(true), []);

  return (
    <div className="flex-1">
      <Button onClick={onNewGameClick} className="w-full" size="lg">
        <CirclePlusIcon /> New game
      </Button>
      <PlayerName
        open={playerNameOpen}
        onOpenChange={setPlayerNameOpen}
        onSubmit={onSubmit}
      />
      <GameCodeCopy
        code={game.id}
        open={gameCodeOpen}
        onOpenChange={setGameCodeOpen}
        onContinueClick={onGameStart}
      />
    </div>
  );
});
NewGame.displayName = 'NewGame';
