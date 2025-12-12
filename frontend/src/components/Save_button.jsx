import React from "react";
import { useState } from "react";

import { use_game_context } from "./Game_context";
import { set_progress } from "../api/set_progress";

function Save_button() {
    const [is_saving, set_is_saving] = useState(false);
    const { board } = use_game_context();

    function handle_save() {
        set_is_saving(true);
        set_progress(board).then(() => set_is_saving(false));
    }

    return (
        <button
            onClick={handle_save}
            disabled={is_saving}
            className={`text-center p-4 w-30 rounded-md bg-[#f8b22e] cursor-pointer`}
        >
            {is_saving ? "Saving" : "Save"}
        </button>
    );
}

export default Save_button;
