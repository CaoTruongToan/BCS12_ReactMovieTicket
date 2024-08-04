import { configureStore } from "@reduxjs/toolkit"
import bookTicketsSlice from "./slices/bookTicketsSlice"

export const store = configureStore({
  reducer: {
    bookTicketsSlice,
  },
})
