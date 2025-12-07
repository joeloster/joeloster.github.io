import React from "react";

import Generate_button from "./components/Generate_button";
import Check_button from "./components/Check_button";
import Show_solution_button from "./components/Show_solution_button";
import Board from "./components/Board";
import Clues from "./components/Clues";

function Crossword() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center py-4 gap-4 min-h-screen overflow-auto">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Generate_button level={1} color={"bg-green-200"} />
                        <Generate_button level={2} color={"bg-yellow-100"} />
                        <Generate_button level={3} color={"bg-red-200"} />
                    </div>

                    <div className="flex justify-end w-full">
                        <Check_button />
                        <Show_solution_button />
                    </div>
                </div>

                <Board />
            </div>
            <Clues />
        </div>
    );
}

export default Crossword;
