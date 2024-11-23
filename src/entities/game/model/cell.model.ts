export enum ECellValue {
  X = 'X',
  O = 'O',
  EMPTY = 'EMPTY',
}

export type TCell = {
  id: string;
  createdAt: string;
  updatedAt: string;
  value: ECellValue;
  row: number;
  col: number;
};
