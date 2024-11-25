import { MoveLeft } from 'lucide-react';
import { FC, memo } from 'react';

import { Button } from '@/shared/ui/button';

export const LeaveButton: FC = memo(() => {
  return (
    <Button>
      <MoveLeft />
      <span className="max-md:hidden">Leave</span>
    </Button>
  );
});
LeaveButton.displayName = 'LeaveButton';
