import { combineReducers} from "@reduxjs/toolkit";
import loginReducer from '../Redux/loginReducer';
import ExamReducer from '../Redux/ExamReucer';
import QuestionsReducer from '../Redux/QuestionsReducer';


const rootReducer = combineReducers({
     loginReducer,
      ExamReducer,
    QuestionsReducer
})

export default rootReducer