import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./slices/paymentSlice.js";
import roleReducer from "./slices/roleSlice.js";
import spaceReducer from "./slices/spaceSlice.js";
import workstationReducer from "./slices/workstationSlice.js";
import userReducer from "./slices/userSlice";

//Import individual slices and configure store

const combinedReducer = combineReducers({
  payments: paymentReducer,
  roles: roleReducer,
  spaces: spaceReducer,
  workstations: workstationReducer,
  user: userReducer,
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
