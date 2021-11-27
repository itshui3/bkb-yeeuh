// external deps
import React from 'react';

// local deps
import { board } from './boardData';
import styles from './Board.module.css';

export const Board = ({

}) => {
    return (
        <div className={styles.board_underlay}>
            <div className={styles.board_container}>
                {board.map((row, idx) => (
                    <div key={'row_' + idx} className={styles.row_container}>
                        {row.map((cell, idx) => (
                            <div key={'cell_' + idx}
                                className={styles.cell}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
