import React, { useState, useContext, createContext } from "react";

const Game_context = createContext();

export function Game_context_provider({ children }) {
    const [check, set_check] = useState(false);
    const [board, set_board] = useState(0);
    const [show_solution, set_show_solution] = useState(false);

    return (
        <Game_context.Provider value={{ check, set_check, board, set_board, show_solution, set_show_solution }}>
            {children}
        </Game_context.Provider>
    );
}

export function use_game_context() {
    return useContext(Game_context);
}
