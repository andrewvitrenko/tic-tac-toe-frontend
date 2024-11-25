import { Circle, X } from 'lucide-react';
import { ReactNode } from 'react';

import { ECellValue } from '@/entities/game/model/cell.model';

export const icons: Record<ECellValue, ReactNode> = {
  [ECellValue.EMPTY]: null,
  [ECellValue.X]: <X size={80} />,
  [ECellValue.O]: <Circle size={80} />,
};
