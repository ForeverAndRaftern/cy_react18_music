import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./modules/counter";
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual,
} from "react-redux";
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;
export default store;
