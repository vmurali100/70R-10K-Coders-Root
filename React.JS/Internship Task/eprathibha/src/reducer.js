const ADD_EXAM_DATA = 'ADD_EXAM_DATA'
const ADD_LOGIN_DATA = "ADD_LOGIN_DATA"
const ADD_QUESTIONS_DATA = 'ADD_QUESTIONS_DATA'

 const initialState = {
    data : [],
    exams:[],
    questions:[]
}

const defaultState = {
    data:[],
    exams:[],
    questions:[]
}

export const addLoginData = (a) => {
    return {
        type: "ADD-LOGIN_DATA",
        payload : a,
        }
}

export const addExamData = (b) => {
    return {
        type: "ADD_EXAM_DATA",
        payload:b,
    }
}

export const addQuestionsData = (c) => {
    return {
        type:"ADD_QUESTIONS_DATA",
        payload:c,
    }
}

export default function appReducer(state=defaultState,action) {
    switch(action.type){
        case "ADD_LOGIN_DATA" : {
            return {
                ...state,
                
                data : action.payload.pay
        }
        };
        case "ADD_EXAM_DATA" : {
            return {
                ...state,
                exams : action.payload.pay
            }
        };
        case "ADD_QUESTIONS_DATA" : {
            return {
                ...state,
                questions : [
                    ...state.questions = action.payload.pay
                ]
            }
        };

        default :
           return state
    }
}