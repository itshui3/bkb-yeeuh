import React from 'react';
import './App.css';
import { useSelectPieces } from './useSelectPieces';

import { Board } from '../components/board/Board';
import { Selection } from '../components/selection/Selection';

import * as pieces from '../pieces';
const piecesList = Object.values(pieces);

function App() {

  const {
    staged,
    placedPcs,
    stagePiece,
    placePiece
  } = useSelectPieces();

  return (
    <div className="App">
      <Board
        placedPcs={placedPcs}
        selectCell={placePiece}
      />
      <Selection
        availablePieces={piecesList}
        selectPiece={stagePiece}
        currentlySelected={staged}
      />
    </div>
  );
}

export default App;
