import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

import LoginReducer from "./LoginReducer";

const reducers = combineReducers({
  isSignin: LoginReducer,
  cartItems:cartReducer
});

export default reducers;
