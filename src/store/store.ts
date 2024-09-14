import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "../main/components/Forms/slice/formSlice";
import { appReducer } from "./appSlice";

const store = configureStore({
reducer : {
    app: appReducer,
    form: formReducer,
}
})

export default store;

