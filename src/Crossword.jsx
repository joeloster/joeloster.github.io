import React from "react";

import Board from "./components/Board";
import Clues from "./components/Clues";

import Save_button from "./components/Save_button";
import Show_solution_button from "./components/Show_solution_button";

function Crossword() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-4 gap-4 min-h-screen overflow-auto">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <Save_button />
                    <Show_solution_button />
                </div>

                <Board />
            </div>
            <Clues />
        </div>
    );
}

export default Crossword;
