import express from "express";
import cors from "cors";
import router from "./routes.js";
import cookieParser from "cookie-parser";

import { update_game } from "./funcs/update_game.js";
import { active_board } from "./misc/active_board.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // byt ut sen
    credentials: true
}));

app.use(cookieParser());

app.use((req, res, next) => {

    let user_id = req.cookies.user_id;

    if (!user_id) {

        user_id = crypto.randomUUID();

        res.cookie("user_id", user_id, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 1000 * 60 * 60 * 24 * 365
        })
        
    }

    req.user_id = user_id;
    next();
});

app.use("/api", router);

update_game(active_board);

app.listen(3029, () => console.log("running"));