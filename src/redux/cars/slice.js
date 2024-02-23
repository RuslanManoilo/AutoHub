import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const pendingState = state => {
  state.isLoading = true;
};

const rejectedState = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, pendingState)
      .addCase(fetchCars.rejected, rejectedState)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
