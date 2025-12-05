import React, { useState, useEffect } from "react";
import { use_game_context } from "./Game_context";

import { generate_board } from "../misc/boards";

function Cell({ i }) {
    const { check, board, show_solution } = use_game_context();

    const [guess, set_guess] = useState("");
    const [is_correct, set_is_correct] = useState(false);

    const row = Math.ceil(i / 10);
    const col = i % 10 == 0 ? 10 : i % 10;

    const [correct, set_correct] = useState({});

    const correct_letter = correct?.letter;
    const is_active = correct?.status;
    const start_of_word = correct?.start || "";

    const get_color = () => {
        if (show_solution) return "bg-white";

        if (check && is_correct) return "bg-green-200";

        if (check) return "bg-red-200";

        return "bg-white";
    };

    useEffect(() => {
        const obj = generate_board(board);
        set_correct(obj[`${row}:${col}`]);
    }, [board]);

    useEffect(() => {
        correct_letter == guess ? set_is_correct(true) : set_is_correct(false);
    }, [guess, check]);

    useEffect(() => {
        show_solution ? set_guess(correct_letter) : set_guess("");
    }, [show_solution]);

    if (board == 0) return <div className="bg-white border border-black"></div>;

    return is_active ? (
        <input
            className={`border border-black outline-none text-center ${get_color()}`}
            value={guess || ""}
            onChange={(e) => set_guess(e.target.value.toUpperCase())}
            type="text"
            maxLength="1"
            placeholder={`${start_of_word}`}
        />
    ) : (
        <div className="bg-black"></div>
    );
}

export default Cell;
