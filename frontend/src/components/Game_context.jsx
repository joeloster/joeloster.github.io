import React, { useState, useEffect, useContext, createContext } from "react";

import { get_progress } from "../api/get_progress";
import { initial_board } from "../misc/initial_board";

const Game_context = createContext();

export function Game_context_provider({ children }) {
    const [board, set_board] = useState(initial_board);

    const [corrcet_board, set_correct_board] = useState({});

    const [show_solution, set_show_solution] = useState(false);

    // testar alltid att hämta data från db
    useEffect(() => {
        async function load_progress() {
            try {
                const data = await get_progress();

                if (data) {
                    set_board(data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        load_progress();
    }, []);

    return (
        <Game_context.Provider
            value={{ board, set_board, corrcet_board, set_correct_board, show_solution, set_show_solution }}
        >
            {children}
        </Game_context.Provider>
    );
}

export function use_game_context() {
    return useContext(Game_context);
}

// export function Game_context_provider({ children }) {
//     const [check, set_check] = useState(false);

//     const [board, set_board] = useState(0);

//     const [show_solution, set_show_solution] = useState(false);

//     return (
//         <Game_context.Provider value={{ check, set_check, board, set_board, show_solution, set_show_solution }}>
//             {children}
//         </Game_context.Provider>
//     );
// }
