const BASE_URL = "http://localhost:3029/api";

export async function get_board() {

    try {

        const res = await fetch(`${BASE_URL}/get_board`, {
            method: "GET",
            credentials: "include"
        })
        const data = await res.json();


        if (!data.success) return null; 

        return data.data;
    
    } catch (error) {

        console.log(error);
        return null;
    }
}