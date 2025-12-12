import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3029/api";

export async function get_progress() {
    try {
        const user_id = Cookies.get("user_id");

        const res = await fetch(`${BASE_URL}/get_progress/${user_id}`, {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) return null;

        const data = await res.json();

        if (!data.success) return null;

        return data.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
