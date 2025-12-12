import db from "../db.js";

export function get_progress(user_id) {
    const stm = db.prepare(`
        SELECT guessed_board FROM user_progress 
        WHERE user_id = ?
    `);

    const data = stm.get(user_id);
    if (!data) return null;

    return JSON.parse(data.guessed_board);
}

