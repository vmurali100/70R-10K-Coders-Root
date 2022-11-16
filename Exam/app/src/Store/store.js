import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
import loginReducer from "./loginReducer";
import FreeExamReducer from "./FreeExamReducer";
import { combineReducers } from "@reduxjs/toolkit";

const onereducer = combineReducers({
    loginReducer,
    FreeExamReducer
})
export default configureStore({

    reducer: onereducer, //user that going to be exported

})
