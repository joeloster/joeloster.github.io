import React from "react";

import Show_solution_button from "./components/Show_solution_button";
import Board from "./components/Board";
import Clues from "./components/Clues";

function Crossword() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-4 gap-8 min-h-screen overflow-auto bg-[#FFFFE3]">
            <div className="flex flex-col gap-2">
                <div className="flex justify-end">
                    <Show_solution_button />
                </div>

                <Board />
            </div>
            <Clues />
        </div>
    );
}

export default Crossword;
