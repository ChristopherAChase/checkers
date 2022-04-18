import { Coordinate, Cell } from './Board';

type Color = 'Red' | 'Black';

type Rank = 'Man' | 'King';

export type Piece = {
    rank: Rank,
    color: Color
    coordinate: Coordinate
};

export type getValidMoves = (cells: Cell[], piece: Piece) => Cell[];

export type jumpPiece = (piece: Piece, newDestination: Cell) => Piece;