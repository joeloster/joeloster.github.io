import React from "react";

import { clues } from "../misc/clues";

function Clues() {
    return (
        <div className="flex flex-col items-center p-4 gap-4 w-full lg:w-1/4">
            <div className="text-xl font-bold">Clues</div>
            {clues.map((clue, i) => (
                <div key={i}>{clue.clue}</div>
            ))}
        </div>
    );
}

export default Clues;
