import { combineReducers } from "redux";
import formModule from "./userInfoForm";
import interestsModule from "./interests";
import namesModule from "./names";

const createRootReducer = () =>
  combineReducers({
    formModule,
    interestsModule,
    namesModule
  });

export default createRootReducer;
