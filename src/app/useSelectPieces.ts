import { useState } from 'react';
import { Piece } from '../pieces/pieces.interface';

export interface Placement {
    [placement: string]: Piece;
}

export const useSelectPieces = () => {
    const [staged, setStaged] = useState<Piece | null>(null);
    const [placedPcs, setPlacedPcs] = useState<Placement>({});

    // select/stage a piece to be instantiated onto board
    const stagePiece = (p: Piece) => { setStaged(p); }

    // place staged piece onto a board placement
    const placePiece = (row: number, col: number) => {
        // only activates if piece staged
        if (!staged) return;

        const stringifiedPos = row + '_' + col;
        // only allows placement in empty cells
        if (stringifiedPos in placedPcs) return;

        setPlacedPcs(placedPcs => {
            return {
                ...placedPcs,
                [stringifiedPos]: staged
            }
        });
        setStaged(null);
    }

    return {
        staged,
        placedPcs,
        stagePiece,
        placePiece
    }
}
