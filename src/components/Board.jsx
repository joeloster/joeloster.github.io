import React from "react";

import Cell from "./Cell";

function Board() {
    return (
        <div className="grid grid-cols-10 grid-rows-10 w-180 h-180 border border-black">
            {Array.from({ length: 100 }).map((_, i) => (
                <Cell key={i} i={i + 1} />
            ))}
        </div>
    );
}

export default Board;
