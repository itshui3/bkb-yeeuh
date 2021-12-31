import React from 'react';
import { Piece } from '../../pieces/pieces.interface';
import styles from './Selection.module.css';

interface SelectionProps {
    availablePieces: Piece[],
    selectPiece: (p: Piece) => void,
    currentlySelected: null | Piece
}
export const Selection: React.FC<SelectionProps> = ({
    selectPiece,
    availablePieces,
    currentlySelected
}) => {
    const selectedText = currentlySelected ? currentlySelected.label : 'N/A';
    return (
        <div className={styles.selection_cont}>
            <p>Selected: {selectedText}</p>
            {availablePieces.map((p, idx) => renderSelectPcBtn(p, idx, selectPiece))}
        </div>
    );
}

function renderSelectPcBtn(
    p: Piece, idx: number, select: (p: Piece) => void) {
    return (
        <p
            key={p.name}
            className={styles.piece_label}
            onClick={() => select(p)}
        >
            {p.label}
        </p>
    );
}
