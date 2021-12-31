// external deps
import React from 'react';
// app deps
import { Placement } from '../../app/useSelectPieces';

// local deps
import { board } from './boardData';
import styles from './Board.module.css';
// topleft [0, 0]
// topright [0, length-1]
// bottomleft [length-1, 0]
// bottomright [length-1, length-1]

interface BoardProps {
    selectCell: (row: number, col: number) => void;
    placedPcs: Placement;
}
export const Board: React.FC<BoardProps> = ({
    selectCell,
    placedPcs
}) => {
    console.log('placedPcs: ', placedPcs);
    const renderPcsIconInOccupiedCells = buildRenderPiecesInOccupiedCells(placedPcs);
    return (
        <div className={styles.board_container}>
            {board.map((row, r_idx) => (
                <div key={'row_' + r_idx} className={styles.row_container}>
                    {row.map((_, c_idx) => (
                        <div key={'cell_' + c_idx}
                            className={`
                                ${styles.cell} 
                                ${applyCornerStyles(r_idx, c_idx, board.length-1)}
                                ${applyShadedCellStyles(r_idx, c_idx)}
                            `}
                            onClick={() => selectCell(r_idx, c_idx)}
                        >
                        {renderPcsIconInOccupiedCells(r_idx, c_idx)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

function applyCornerStyles(r_idx: number, c_idx: number, lastIdx: number) {
    if (r_idx === 0) {
        if (c_idx === 0) {
            return styles.cell_topleft;
        }
        if (c_idx === lastIdx) {
            return styles.cell_topright;
        }
    }

    if (r_idx === lastIdx) {
        if (c_idx === 0) {
            return styles.cell_bottomleft;
        }
        if (c_idx === lastIdx) {
            return styles.cell_bottomright;
        }
    }

    return null;
}

function applyShadedCellStyles(r_idx: number, c_idx: number) {
    if (r_idx % 2 === 0) {
        // shade odd  cells
        if (c_idx % 2 === 0) {
            return null;
        } else {
            return styles.cell_shaded;
        }
    } else {
        // shade even cells
        if (c_idx % 2 === 0) {
            return styles.cell_shaded;
        } else {
            return null;
        }
    }

}

function buildRenderPiecesInOccupiedCells(placedPcs: Placement) {
    return (row: number, cell: number) => {
        const stringifiedPos = row + '_' + cell;
        if (stringifiedPos in placedPcs) {
            return placedPcs[stringifiedPos].readableIcon;
        } else {
            return '';
        }
    }
}
