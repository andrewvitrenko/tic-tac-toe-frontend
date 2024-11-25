import { TCell } from '@/entities/game/model';

export type TCellProps = TCell & {
  onClick: (cellId: string) => void;
};
