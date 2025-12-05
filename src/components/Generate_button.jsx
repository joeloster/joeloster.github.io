import React from "react";
import { use_game_context } from "./Game_context";

function Generate_button({ level, color }) {
    const { set_board, set_check, set_show_solution } = use_game_context();

    const set_new_level = () => {
        set_board(level);
        set_check(false);
        set_show_solution(false);
    };

    return (
        <button onClick={() => set_new_level()} className={`text-center p-4 px-8 rounded-md ${color} cursor-pointer`}>
            {level}
        </button>
    );
}

export default Generate_button;
