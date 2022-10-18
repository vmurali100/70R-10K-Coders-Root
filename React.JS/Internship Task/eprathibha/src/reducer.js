// const ADD_EXAM_DATA = 'ADD_EXAM_DATA'
// const ADD_LOGIN_DATA = "ADD_LOGIN_DATA"
// const ADD_QUESTIONS_DATA = 'ADD_QUESTIONS_DATA'
// const ADD_QUESTIONS_DATA_TWO = 'ADD_QUESTIONS_DATA_TWO'

//  const initialState = {
//     data : [],
//     exams:[],
//     questions:[]
// }

// const defaultState = {
//     data:[],
//     exams:[],
//     questions:[],
//     questionsTwo : []
// }

// export const addLoginData = (a) => {
//     return {
//         type: "ADD-LOGIN_DATA",
//         payload : a,
//         }
// }

// export const addExamData = (b) => {
//     return {
//         type: "ADD_EXAM_DATA",
//         payload:b,
//     }
// }

// export const addQuestionsData = (c) => {
//     return {
//         type:"ADD_QUESTIONS_DATA",
//         payload:c,
//     }
// }

// export const addQuestionsDataTwo = (d) => {
//     return {
//         type : "ADD_QUESTIONS_DATA_TWO",
//         payload : d
//     }
// }

// export default function appReducer(state=defaultState,action) {
//     switch(action.type){
//         case "ADD_LOGIN_DATA" : {
//             return {
//                 ...state,
//                 ...state.data,
//                 data : action.payload.pay
//         }
//         };
//         case "ADD_EXAM_DATA" : {
//             return {
//                 ...state,
//                 ...state.exams,
//                 exams : action.payload.pay
//             }
//         };
//         case "ADD_QUESTIONS_DATA" : {
//             return {
//                 ...state,
//                 ...state.questions,
//                 questions : [
//                     ...state.questions = action.payload.pay
//                 ]
//             }
//         };
//         case "ADD_QUESTIONS_DATA_TWO" : {
//             return {
//                 ...state,
//                 ...state.questionsTwo,
//                 questionsTwo : [
//                     ...state.questionsTwo = action.payload.pay
//                 ]
//             }
//         };

//         default :
//            return state
//     }
// }
