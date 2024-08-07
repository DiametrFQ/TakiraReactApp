import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/reducer";

const store = configureStore({
  reducer: {
    quest: dataReducer,
  },
});

export default store;
export type AppState = ReturnType<typeof store.getState>;