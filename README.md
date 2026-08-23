# React N-Puzzle | [Demo](https://oksana-konopelska.github.io/react-puzzle-game/)

A customizable N-puzzle game built with React and TypeScript.

The goal is to arrange the tiles in ascending order, leaving the empty space in the bottom-right corner.
Click on a tile in the same row or column as the empty space to move it, shifting all tiles in between.
Use the "Shuffle" button to randomize the tiles.

## Configuration

Modify grid settings in `src/config/config.ts`:

- `NUMBER_OF_ROWS`: Default is 3.
- `NUMBER_OF_COLUMNS`: Default is 5.
- `SHUFFLE_MULTIPLIER`: Determines shuffle intensity.
- `TILE_SIZES` and `BREAKPOINTS`: Set tile sizes and breakpoints for responsive design.

## Installation

1. **Install Dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

2. **Run the Dev Server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
