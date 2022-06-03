import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import ComboReducer from "./Combo.reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    combo: ComboReducer
})
export default rootReducer