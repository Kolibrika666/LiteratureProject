import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  isError: boolean;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  isError: false,
  isLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  selectors: {
    isError: state => state.isError,
    isLoading: state => state.isLoading,
  }
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
export const appSelectors = appSlice.selectors;

