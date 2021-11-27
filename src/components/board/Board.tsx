// external deps
import React from 'react';

// local deps
import { board } from './boardData';
import styles from './Board.module.css';
// topleft [0, 0]
// topright [0, length-1]
// bottomleft [length-1, 0]
// bottomright [length-1, length-1]

export const Board = () => {
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
                        />
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