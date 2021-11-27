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
        <div className={styles.board_underlay}>
            <div className={styles.board_container}>
                {board.map((row, r_idx) => (
                    <div key={'row_' + r_idx} className={styles.row_container}>
                        {row.map((_, c_idx) => {
                        const cornerMap = checkIfCorner(r_idx, c_idx, board.length-1);
                        return (
                            <div key={'cell_' + c_idx}
                                className={`
                                    ${styles.cell} 
                                    ${cornerMap ?? null}
                                `}
                            />
                        )})}
                    </div>
                ))}
            </div>
        </div>
    )
}

function checkIfCorner(r_idx: number, c_idx: number, lastIdx: number) {
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

    return false;
}
