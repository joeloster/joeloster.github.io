import db from "../db.js";

export function get_board(){

    try {
        const stm = db.prepare("SELECT * FROM boards");
        const data = stm.get();
        
        if (!data) return null;

        return JSON.parse(data.board_data);
    } catch (error) {
        console.log(error);
        return null;
    }
}