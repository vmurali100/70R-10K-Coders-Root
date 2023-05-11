import { combineReducers } from "redux";
import HandleCart from "../actions/HandleCart";

// it calls the every child reducers and collecting the results into a single state
const rootReducers = combineReducers({
    HandleCart,
})
export default rootReducers