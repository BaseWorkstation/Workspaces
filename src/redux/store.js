import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./slices/paymentSlice.js";
import roleReducer from "./slices/roleSlice.js";
import serviceReducer from "./slices/serviceSlice.js";
import workstationReducer from "./slices/workstationSlice.js";
import userReducer from "./slices/userSlice";
import commonReducer from "./slices/commonSlice";

//Import individual slices and configure store

const combinedReducer = combineReducers({
  payments: paymentReducer,
  roles: roleReducer,
  services: serviceReducer,
  workstations: workstationReducer,
  user: userReducer,
  common: commonReducer,
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
