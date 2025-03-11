import { combineReducers } from "redux";
import { userReducer } from "../slice/user.slice";
import toastReducer from "../slice/toast.slice";

const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
});

export default rootReducer;
