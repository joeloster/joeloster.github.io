rm -rf $PWD/../db.db
touch $PWD/../db.db
sqlite3 $PWD/../db.db "


CREATE TABLE boards (
    board_data TEXT
);

CREATE TABLE user_progress (

    user_id TEXT PRIMARY KEY,
    guessed_board TEXT
);
"