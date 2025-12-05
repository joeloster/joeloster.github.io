import React from "react";
import { use_game_context } from "./Game_context";

function Show_solution_button() {
    const { check, show_solution, set_show_solution } = use_game_context();

    if (check)
        return (
            <button
                onClick={() => set_show_solution(true)}
                className={`text-center p-4 w-30 rounded-md bg-blue-200 cursor-pointer ${
                    show_solution && "opacity-50"
                }`}
            >
                Solution
            </button>
        );
}

export default Show_solution_button;
