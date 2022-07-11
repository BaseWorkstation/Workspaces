import { combineReducers, configureStore } from "@reduxjs/toolkit";
import roleReducer from "./slices/roleSlice.js";
import userReducer from "./slices/userSlice";

//Import individual slices and configure store

const combinedReducer = combineReducers({
  user: userReducer,
  roles: roleReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logoutUser") {
    // if a logout action is dispatched clear the state
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});
