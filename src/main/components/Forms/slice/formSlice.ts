import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { LiterType } from "../models";

type InitialStateType = {
    literList: LiterType[];
    listIsNull: boolean;
}

const initialState: InitialStateType = {
    literList: [{ id: 0, str: 'Пока ничего нет...',}],
    listIsNull: true,
}
   
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setListIsNan(state, action: PayloadAction<boolean>) {
            state.listIsNull = action.payload
        },
        addLiterList(state, action : PayloadAction<LiterType[]>) {
            state.literList.push(...action.payload)
        }
    }
    ,
    selectors: {
        literList: state => state.literList,
        listisNull: state => state.listIsNull,
    },
})

export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;
export const formSelectors = formSlice.selectors;