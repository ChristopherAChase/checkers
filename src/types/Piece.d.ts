
type Color = 'Red' | 'Black';

type Rank = 'Man' | 'King';

type OddRow = 1 | 3 | 5 | 7;
type OddColumn = 'a' | 'c' | 'e' | 'g';

type EvenRow = 2 | 4 | 6 | 8
type EvenColumn = 'b' | 'd' | 'f' | 'h'

export type Coordinate = `${OddColumn}${OddRow}` | `${EvenColumn}${EvenRow}`

// My attempt at saying that if this is a piece of rank 'king', then the rank has to be 'king',
// and if it's a piece of rank 'man', then the rank has to be 'man'.
export type Piece<Rank> = {
    rank: Rank,
    color: Color
    coordinate: Coordinate
}