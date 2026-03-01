import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import fileReducer from "../features/fileSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };