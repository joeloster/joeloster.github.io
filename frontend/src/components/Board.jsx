import React from "react";

import Cell from "./Cell";

function Board() {
    return (
        <div className="grid grid-cols-10 grid-rows-10 w-90 h-90 lg:w-160 lg:h-160">
            {Array.from({ length: 100 }).map((_, i) => (
                <Cell key={i} i={i + 1} />
            ))}
        </div>
    );
}

export default Board;
