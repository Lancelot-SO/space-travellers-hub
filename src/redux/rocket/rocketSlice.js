import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};
export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers() {

  },

});

export default rocketSlice.reducer;
