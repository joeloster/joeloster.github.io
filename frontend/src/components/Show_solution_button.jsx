import React from "react";
import { use_game_context } from "./Game_context";

import { get_board } from "../api/get_board";

function Show_solution_button() {
    const { set_show_solution, set_correct_board } = use_game_context();

    async function handle_solution() {
        set_show_solution(true);

        try {
            const data = await get_board();

            if (data) {
                set_correct_board(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={handle_solution} className={`text-center p-4 w-30 rounded-md bg-[#f8b22e] cursor-pointer`}>
            Solution
        </button>
    );
}

export default Show_solution_button;
