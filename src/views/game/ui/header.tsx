import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, memo } from 'react';

import { Button } from '@/shared/ui/button';

export const Header: FC = memo(() => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 -mx-4 -mt-4 border-b p-4 shadow-accent">
      <Button onClick={() => router.push('/')}>
        <MoveLeft />
        Leave
      </Button>
    </header>
  );
});
Header.displayName = 'Header';
