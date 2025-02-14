import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getItemsSeminars } from "api/getItemsSeminars";
import { deleteItemSeminar } from "api/deleteItemSeminar";
import { updateItemSeminar } from "api/updateItemSeminar";

export const fetchSeminars = createAsyncThunk("seminars/fetchSeminars", async (_, { rejectWithValue }) => {
  try {
    const response = await getItemsSeminars();
    return response.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки семинаров");
  }
});

export const deleteSeminar = createAsyncThunk("seminars/deleteSeminar", async (id: number, { dispatch }) => {
  await deleteItemSeminar(id);
  dispatch(fetchSeminars()); // После удаления загружаем список заново
});

export const editSeminar = createAsyncThunk(
  "seminars/editSeminar",
  async ({ id, ...updatedData }: { id: number; title?: string; description?: string; date?: string; time?: string }, { dispatch }) => {
    await updateItemSeminar(id, updatedData);
    dispatch(fetchSeminars()); // Обновляем список после редактирования
  }
);

const seminarsSlice = createSlice({
  name: "seminars",
  initialState: {
    items: [],
    isLoading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeminars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSeminars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchSeminars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default seminarsSlice.reducer;
