import React, { useState, useEffect, useContext, createContext } from "react";

import { initial_board } from "../misc/initial_board";

const Game_context = createContext();

export function Game_context_provider({ children }) {
    const [board, set_board] = useState(() => {
        const data = localStorage.getItem("current_board");

        if (!data) return initial_board;

        try {
            return JSON.parse(data);
        } catch (error) {
            return initial_board;
        }
    });

    const [solution, set_solution] = useState({});

    const [show_solution, set_show_solution] = useState(false);

    return (
        <Game_context.Provider value={{ board, set_board, solution, set_solution, show_solution, set_show_solution }}>
            {children}
        </Game_context.Provider>
    );
}

export function use_game_context() {
    return useContext(Game_context);
}
