import React from "react";
import { use_game_context } from "./Game_context";

function Check_button() {
    const { check, set_check, board } = use_game_context();

    return (
        <button
            onClick={() => set_check(true)}
            className={`text-center p-4 w-30 rounded-md bg-blue-200 cursor-pointer ${check && "opacity-50"} ${
                board == 0 && "opacity-50"
            }`}
        >
            Check
        </button>
    );
}

export default Check_button;
