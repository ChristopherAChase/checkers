import { Piece } from './Piece';

type Color = 'Red' | 'Black';

const rows = [1, 2, 3, 4, 5, 6, 7, 8] as const;
const columns = ['a', 'b', 'c', 'e', 'f', 'g', 'h'] as const;

export type Row = typeof rows;
export type Column = typeof columns;

export type Coordinate = {
    column: Column
    row: Row,
};

export type Cell = {
    color: Color,
    coordinate: Coordinate,
    piece?: Piece
};

export type getSurroundingCells = (cell: Cell) => Cell[];

export type Board = Cell[][]