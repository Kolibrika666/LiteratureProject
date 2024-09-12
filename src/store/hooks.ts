import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { store } from "./store"





export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch