import { Board } from './Board';


type Player = {
    color: 'Red' | 'Black',
    piecesLeft: number
}

export type GameState = {
    turn: Player,
    move: number,
    board: Board
};

export type nextTurn = (gameState: GameState) => GameState;