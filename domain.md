# Domain Objects
The physical objects that make up the game. Not concerned with all of the things that these objects can do.
## Cell
- This is one square on the board
- This square may or may not have a piece located on it
- Each Cell is either black or red in color

## Row
- A row is made up of 8 cells (representing the 8 columns in the board)
- The cell colors in one row alternate.
- The cell color at the beginning of each row alternate
- The first row is the row that will crown the opposite side's pieces
- The last row is the row that will crown your pieces

## Board
- A board is made up of 8 rows

## Piece
- A piece is either red or black
- There are 12 pieces per side
- pieces can either be a 'man' (a basic piece), or a 'king'.
- Pieces must be located on a black square.
- They start in the first three rows of the board.


## Player
- Each player has a side (or color) of black or red

## GameState
- It will either be black or red's turn to move
- The game consists of a board with pieces in various squares.
- The game starts with 24 pieces on the board.