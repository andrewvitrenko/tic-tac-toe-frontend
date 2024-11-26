import { TUser } from '@/entities/user';

import { ECellValue } from './cell.model';

export type TPlayer = {
  id: string;
  gameId: string;
  user: TUser;
  symbol: ECellValue;
};
