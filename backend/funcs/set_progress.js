import db from "../db.js";

export function set_progress(board, user_id){

    const board_data = JSON.stringify(board);

    const stm = db.prepare(`
        INSERT INTO user_progress (user_id, guessed_board)
        VALUES (?, ?)
        ON CONFLICT (user_id)
        DO UPDATE SET guessed_board = excluded.guessed_board
    `);

    stm.run(user_id, board_data);

}