/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetch', async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    isFetching: false,
  },
  reducers: {
    reserveRocket: (state, action) => {
      state.list.map((element) => {
        if (element.rocket_id === action.payload) {
          element.reserved = true;
          return element;
        }
        return { ...element, reserved: true };
      });
    },
    cancelReserve: (state, action) => {
      state.list.map((element) => {
        if (element.rocket_id === action.payload) {
          element.reserved = false;
          return element;
        }
        return { ...element, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const data = action.payload.map((x) => ({ ...x, reserved: false }));
        state = { ...state, isFetching: false, list: data };
        return state;
      })
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export const { reserveRocket, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
export const selectReservedRockets = (state) => state.rockets.list.filter((e) => e.reserved);
export const selectRockets = (state) => state.rockets.list;
