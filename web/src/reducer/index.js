import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import ComboReducer from "./Combo.reducer";
import OrderReducer from "./Order.reducer";
import promotorReducer from "./promotor.reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    combo: ComboReducer,
    order: OrderReducer,
    promotor: promotorReducer,
})
export default rootReducer