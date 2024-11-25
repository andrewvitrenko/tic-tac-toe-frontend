import { FC, memo } from 'react';

import { LeaveButton } from '@/views/game/ui/leave-button';

export const Header: FC = memo(() => {
  return (
    <header className="sticky top-0 z-20 -mx-4 -mt-4 border-b p-4 shadow-accent">
      <div>
        <LeaveButton />
      </div>
    </header>
  );
});
Header.displayName = 'Header';
