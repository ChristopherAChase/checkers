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

# Interactions

## Piece
- A piece moves from one cell to another cell
  - This removes the piece property from one cell and adds the piece property to another cell.
  - Making these changes to the cells requires new cells to be created in the place of the "old" ones
    - Creating these new cells requires new rows to be created, which requires a new board to be created, which requires a new gamestate to be generated.
    - New Cells -> New Rows -> New Board -> New Gamestate

- A piece jumps over another piece
  - Removes the piece property from the starting cell and the cell containing the piece that got jumped over,
    and adds a piece property to the cell the piece lands on.
  - New Cells -> New Rows -> New Board -> New Gamestate

- A piece goes from a man to a king when landing on the opposite side.
  - Creates a new piece with a rank of "King"
  - Creating this new piece requires a new cell to be created, which requires a new row, board, and gamestate to be created.
  - New Piece -> New Cell -> New Rows -> New Board -> New Gamestate

## Cell, Row, and Board
- These objects are not something that is doing anything, but instead is having things done on it
  - Such as a piece moving in and out of a cell/row, resulting in new Cells, Rows, and Boards to be created.

## Gamestate
- The player's turn must change
  - Turns must alternate after every move that terminates a turn (a piece is moved without capturing or crowning a piece)
  - Creates a new gamestate with the turn value of the player who's turn it is ("Red" or "Black")

- A player wins the game
  - When all of one players pieces are eliminated, the play with pieces still on the board wins
  - Creates a new gamestate with the game status of "over" or a winner declared

