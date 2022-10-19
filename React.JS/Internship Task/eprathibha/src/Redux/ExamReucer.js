const initialState = {
    exams : []
}

export const addExamData = () => {
    return {type: "ADD_EXAM_DATA"}
}
export default function ExamReducer(state=initialState,action) {
    switch(action.type){
        case 'ADD_EXAM_DATA' : {
            return {
                ...state,
                exams : action.payload.pay
            }
        };
       default : {
            return state
        }
     }

}


