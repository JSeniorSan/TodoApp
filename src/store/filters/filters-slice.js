import { createSlice } from "@reduxjs/toolkit";
import { resetState } from "../todos/todos-slice";
export const filtersSlice = createSlice({
  name: "@@filters",
  initialState: "all",
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetState, (state, action) => {
      return "all";
    });
  },
});

export const selectSetFilter = (state) => state.filterReducer;
export const filterReducer = filtersSlice.reducer;
export const { filterActions } = filtersSlice.actions;
