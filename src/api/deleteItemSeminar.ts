import axios from "axios"
import { API_BASE } from "./api.const";

export const deleteItemSeminar = async(id : number) => {
    try {
        await axios.delete(`${API_BASE}/seminars/${id}`)
        return true;
    } catch (error) {
        return false;
    }
    
}