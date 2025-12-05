import { createRoot } from "react-dom/client";

import { Game_context_provider } from "./components/Game_context";
import Crossword from "./Crossword";

createRoot(document.getElementById("root")).render(
    <Game_context_provider>
        <Crossword />
    </Game_context_provider>
);
