import { combineReducers } from "redux";
import authReducer from "./authReducer"
import  carsReducer  from "../reducers/carsReducer";

export const rootReducer=combineReducers({
    authReducer,
    carsReducer
})