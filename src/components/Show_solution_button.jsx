import React from "react";

import { use_game_context } from "./Game_context";
import { correct_board } from "../misc/correct_board";

function Show_solution_button() {
    const { show_solution, set_show_solution, set_solution } = use_game_context();

    function is_disabled() {
        const now = new Date();
        const target = new Date("2025-12-13T00:00:00.000Z");

        return now >= target;
    }

    function handle_solution() {
        set_solution(correct_board);
        set_show_solution(true);

        localStorage.removeItem("current_board");
    }

    return (
        <button
            onClick={handle_solution}
            disabled={!is_disabled() || show_solution}
            className={`text-center p-2 w-30 rounded-md bg-[#f8b22e] cursor-pointer disabled:opacity-70`}
        >
            Solution
        </button>
    );
}

export default Show_solution_button;
