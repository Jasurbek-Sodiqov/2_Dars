import { configureStore } from "@reduxjs/toolkit";
import Omborchi from "./cardSlice";

const Redux = configureStore({
  reducer: cardSlice.reducer,
});

export default Redux;
