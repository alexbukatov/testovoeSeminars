import axios from "axios";
import { API_BASE } from "./api.const";

export const updateItemSeminar = async (id: number, updatedData: Partial<{ title: string; description: string; date: string; time: string }>) => {
    try {
      const response = await axios.patch(`${API_BASE}/seminars/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Ошибка при обновлении семинара:", error);
      throw error;
    }
  };