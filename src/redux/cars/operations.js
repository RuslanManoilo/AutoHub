import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654ea577358230d8f0ccbe08.mockapi.io/';

export const fetchCars = createAsyncThunk("cars/getAll",
    async (_, thunkAPI) => {
    try {
        const responce = await axios.get("/cars");
        return responce.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message)
    }
});