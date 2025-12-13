import React, { useState, useEffect, useContext, createContext } from "react";

import { initial_board } from "../misc/initial_board";

const Game_context = createContext();

export function Game_context_provider({ children }) {
    const [board, set_board] = useState(initial_board);

    const [solution, set_solution] = useState({});

    const [show_solution, set_show_solution] = useState(false);

    useEffect(() => {
        function load_progress() {
            const data = localStorage.getItem("current_board");

            if (!data) return;

            try {
                const parsed = JSON.parse(data);
                set_board(parsed);
            } catch (error) {
                console.log("error with fetching board");
            }
        }

        load_progress();
    }, []);

    return (
        <Game_context.Provider value={{ board, set_board, solution, set_solution, show_solution, set_show_solution }}>
            {children}
        </Game_context.Provider>
    );
}

export function use_game_context() {
    return useContext(Game_context);
}
