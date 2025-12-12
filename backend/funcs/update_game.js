import db from "../db";


export function update_game(board) {

    const data = JSON.stringify(board);

    const stm = db.prepare("INSERT INTO boards (board_data) VALUES (?)");

    stm.run(data);

}