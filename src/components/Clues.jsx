import React from "react";

import { clues } from "../misc/clues";

function Clues() {
    return (
        <div className="flex flex-col items-center gap-4 w-1/2 lg:w-1/4 border border-black rounded-md">
            <div className="text-xl font-bold w-full text-center bg-[#f8b22e] p-2 rounded-t-md">Clues</div>
            {clues.map((clue, i) => (
                <div className="p-1" key={i}>
                    {clue.clue}
                </div>
            ))}
        </div>
    );
}

export default Clues;
