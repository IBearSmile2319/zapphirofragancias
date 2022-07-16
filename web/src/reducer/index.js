import { combineReducers } from "redux";
import AffiliatesReducer from "./Affiliates.reducer";
import AuthReducer from "./Auth.reducer";
import CartReducer from "./Cart.reducer";
import ComboReducer from "./Combo.reducer";
import OrderReducer from "./Order.reducer";
import ProductReducer from "./Product.reducer";
import promotorReducer from "./promotor.reducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    combo: ComboReducer,
    order: OrderReducer,
    promotor: promotorReducer,
    product: ProductReducer,
    cart: CartReducer,
    affiliate: AffiliatesReducer
})
export default rootReducer