import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/slice.js";
import { filtersReducer } from "./filters/slice.js";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
