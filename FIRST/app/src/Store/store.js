import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
import loginReducer from "./loginReducer";
import FreeExamReducer from "./FreeExamReducer";
import { combineReducers } from "@reduxjs/toolkit";
import PremiumExamReducer from "./PremiumExamReducer";

const onereducer = combineReducers({
    loginReducer,
    FreeExamReducer,
    PremiumExamReducer
    
})
export default configureStore({

    reducer: onereducer, //user that going to be exported

})
