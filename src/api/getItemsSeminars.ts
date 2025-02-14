import axios from "axios"
import { API_BASE } from "./api.const";

export const getItemsSeminars = async() =>{
    try {
        const response = await axios.get(`${API_BASE}/seminars`)
        return response;
    } catch (error) {
        throw error;
    }
}