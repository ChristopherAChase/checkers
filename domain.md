# Domain Objects
The physical objects that make up the game. Not concerned with all of the things that these objects can do.
## Cell
- This is one square on the board
- This square may or may not have a piece located on it

## Row
- A row is made up of 8 cells (representing the 8 columns in the board)
- The first row is the row that will crown the opposite side's pieces
- The last row is the row that will crown your pieces

## Board
- A board is made up of 8 rows

## Piece
- A piece is either red or black
- pieces can either be a 'man' (a basic piece), or a 'king'.


## Player
- Each player has a side (or color) of black or red

## GameState
- It will either be black or red's turn to move
- The game consists of a board with pieces in various squares.
- The game starts with 24 pieces on the board.

---
# Events

- Start Game
- Evaluate available moves
- Move Piece
- Jump Piece
- Change Turns
- King A Piece
- Determine Winner (Too Broad??)
- 