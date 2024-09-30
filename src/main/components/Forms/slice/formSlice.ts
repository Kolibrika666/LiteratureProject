import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LiterType } from "../models";

type InitialStateType = {
  literList: LiterType[];
  listIsNull: boolean;
  string: string;
};

const initialState: InitialStateType = {
  literList: [{ id: 0, str: "Пока ничего нет..." }],
  listIsNull: true,
  string: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setListIsNan(state, action: PayloadAction<boolean>) {
      state.listIsNull = action.payload;
    },
    addLiterList(state, action: PayloadAction<LiterType[]>) {
      state.literList.push(...action.payload);
    },
    removeLiterItem(state, action: PayloadAction<number>) {
      const filteredList = state.literList.filter(
        (e) => e.id !== action.payload
      );
      state.literList = filteredList;
    },
    editLiterItem(state, action: PayloadAction<number | undefined>) {
      const findIndex = state.literList.findIndex(
        (e) => e.id == action.payload
      );
      state.literList[findIndex].str = state.string;
    },
  },
  selectors: {
    literList: (state) => state.literList,
    listisNull: (state) => state.listIsNull,
    string: (state) => state.string,
  },
});

export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;
export const formSelectors = formSlice.selectors;
