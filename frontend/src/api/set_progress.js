const BASE_URL = "http://localhost:3029/api";

export async function set_progress(board) {
    try {
        const res = await fetch(`${BASE_URL}/set_progress`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ board }),
            credentials: "include",
        });

        const data = await res.json();

        return data.success;
    } catch (error) {
        console.log(error);
        return false;
    }
}
