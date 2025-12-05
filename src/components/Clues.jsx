import React from "react";

import { use_game_context } from "./Game_context";
import { clues } from "../misc/clues";

function Clues() {
    const { board } = use_game_context();

    if (board != 0)
        return (
            <div className="flex flex-col items-center gap-4 p-4 w-1/4">
                <div>Clues</div>
                {clues
                    .filter((e) => e.board_id == board)
                    .map((clue, i) => (
                        <div key={i}>{clue.clue}</div>
                    ))}
            </div>
        );
}

export default Clues;
