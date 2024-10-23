import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from "./reducers/auth";

// Redux - Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* your custom middleware */),
});

export default store;
