
type Color = 'Red' | 'Black';

type OddColumns = 'a' | 'c' | 'e' | 'g';
type EvenColumns = 'b' | 'd' | 'f' | 'h';

export type Coordinate = `${OddColumns}${1 | 3 | 5 | 7}` | `${EvenColumns}${2 | 4 | 6 | 8}`

// My attempt at saying that if this is a piece of rank 'king', then the rank has to be 'king',
// and if it's a piece of rank 'man', then the rank has to be 'man'.
export type Piece<Rank = 'Man' | 'King'> = {
    rank: Rank,
    color: Color
    coordinate: Coordinate
};


const isValidRow = (row: string): boolean => parseInt(row) >= 1 && parseInt(row) <= 8;
const isValidColumn = (column: string) => ['a', 'b', 'c','d', 'e', 'f' ,'g', 'h'].includes(column);

// By passing in a coordinate instead of a piece, this can be ran recursively in the event of jumping over an opponent.
export const getSurroundingCells = (coordinate: Coordinate): Coordinate[] => {
    const [column , row] = coordinate;
    const surroundingRows = [`${parseInt(row) - 1}`, `${parseInt(row) + 1}`].filter(isValidRow);
    const surroundingColumns = [String.fromCharCode(column.charCodeAt(0) - 1), String.fromCharCode(column.charCodeAt(0) + 1)].filter(isValidColumn);
    const surroundingCells: Coordinate[] = [];

    for(let col in surroundingColumns){
        for(let row in surroundingRows){
            surroundingCells.push(`${surroundingColumns[col]}${surroundingRows[row]}` as Coordinate)
        }
    }
    return surroundingCells
};