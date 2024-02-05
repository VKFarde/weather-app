import { configureStore } from "@reduxjs/toolkit";
import dataApiReducer from "./dataApi";

const store = configureStore({
  reducer: {
    ApiData: dataApiReducer,
  },
});

export default store;
