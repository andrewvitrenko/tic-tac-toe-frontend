import { TCell } from '@/entities/game/model/cell.model';
import { TPlayer } from '@/entities/game/model/player.model';
import { TUser } from '@/entities/user';

export enum EGameState {
  INITIAL = 'INITIAL',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
}

export type TGame = {
  id: string;
  createdAt: string;
  updatedAt: string;
  state: EGameState;
  winner?: TUser;
  turn?: string;
  cells: TCell[];
  players: TPlayer[];
};
