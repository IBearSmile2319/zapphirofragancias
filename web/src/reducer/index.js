import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
})
export default rootReducer