import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/reducer"; // Import your combined reducers

const store = configureStore({
  reducer: {
    quest: dataReducer,
    //   resurses: resursersSlice,
    //   trends: trendsSlice,
    //   inputsState: inputsStateSlice,
    //   modelWindow: modelWindowSlice,
  },
});

export default store;
export type AppState = ReturnType<typeof store.getState>;