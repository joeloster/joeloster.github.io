import React, { useState, useEffect } from "react";
import { use_game_context } from "./Game_context";

function Cell({ i }) {
    const { board, set_board, show_solution, solution } = use_game_context();

    const row = Math.ceil(i / 10);
    const col = i % 10 == 0 ? 10 : i % 10;
    const key = `${row}:${col}`;
    const cell = board[key];
    const start_of_word = cell?.start_of_word || "";

    const [guess, set_guess] = useState(cell?.letter || "");

    useEffect(() => {
        set_guess(cell?.letter || "");
    }, [cell]);

    useEffect(() => {
        set_board((prev) => ({ ...prev, [key]: { ...prev[key], letter: guess || "" } }));
    }, [guess]);

    return cell?.status ? (
        <input
            className={`border border-black outline-none text-center ${
                guess == solution[key]?.letter && "bg-green-200"
            }`}
            value={show_solution ? solution[key]?.letter : guess}
            onChange={(e) => set_guess(e.target.value.toUpperCase())}
            disabled={show_solution}
            type="text"
            maxLength="1"
            placeholder={`${start_of_word}`}
        />
    ) : (
        <div className="bg-black"></div>
    );
}

export default Cell;
