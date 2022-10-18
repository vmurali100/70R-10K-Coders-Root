const ADD_EXAM_DATA = 'ADD_EXAM_DATA '

const initialState = {
    exams : []
}

export const addExamData = (b) => {
    return {
        type: "ADD_EXAM_DATA",
        payload : b,
        }
}

export default function ExamReducer(state=initialState,action) {
    switch(action.type){
        case 'ADD_EXAM_DATA' : {
            return {
                ...state,
                ...state.exams,
                exams : action.payload.pay
            }
        };
       default : {
            return state
        }
     }

}


