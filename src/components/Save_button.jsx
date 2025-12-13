import React from "react";
import { useState } from "react";

import { use_game_context } from "./Game_context";

function Save_button() {
    const [is_saving, set_is_saving] = useState(false);
    const { board, show_solution } = use_game_context();

    async function handle_save() {
        set_is_saving(true);

        localStorage.setItem("current_board", JSON.stringify(board));

        setTimeout(() => {
            set_is_saving(false);
        }, 1000);
    }

    return (
        <button
            onClick={handle_save}
            disabled={is_saving || show_solution}
            className={`text-center p-2 w-30 rounded-md bg-[#f8b22e] cursor-pointer disabled:opacity-70`}
        >
            {is_saving ? ". . ." : "Save"}
        </button>
    );
}

export default Save_button;
