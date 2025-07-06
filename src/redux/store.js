import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";
//import filterReducer from "./locationFilter";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,        // <-- this line uses the jobSlice
    //filters: filterReducer,
  },
});
