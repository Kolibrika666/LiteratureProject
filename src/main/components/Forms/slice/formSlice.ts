import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { formSlice } from "..";

type InitialStateType = {
    like: string | undefined,
}

const initialState: InitialStateType = {
    like: '0',
}
   
const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setLike(state, action : PayloadAction<string>) {
        
        },
    }
})

export const {setLike} = formSlice.actions;
export default formSlice.reducer;