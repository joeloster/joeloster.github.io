import express from "express";

import { set_progress } from "./funcs/set_progress.js";
import { get_board } from "./funcs/get_board.js";
import { get_progress } from "./funcs/get_progress.js";

const router = express.Router();

// endpoints

router.get("/get_board", (req, res) => {
    const board = get_board();

    if (!board) {
        return res.status(404).json({
            success: false,
            message: "Board not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: board,
    });
});

router.post("/set_progress", (req, res) => {
    const { guesses } = req.body;
    const user_id = req.user_id;

    try {
        set_progress(guesses, user_id);

        return res.status(200).json({
            success: true,
            message: "guesses set",
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
});

router.get("/get_progress/:user_id", (req, res) => {
    const user_id = req.user_id;

    if (!user_id) {
        return res.status(401).json({
            success: false,
            message: "invalid creds",
        });
    }

    const progress = get_progress(user_id);

    if (!progress) {
        return res.status(404).json({
            success: false,
            message: "progress not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: progress,
    });
});

export default router;
