const initialState = {

    freeexamslist : []
}
export const getFreeExams = () => {
    return {

        type: "GET_FREE_EXAMS", 

        }
}
export default function FreeExamReducer(state = initialState, action) {
        
    switch(action.type){
        case 'GET_FREE_EXAMS' : {
            return {
                ...state,
                freeexamslist :  action.payload.pay
            }
        };

       default : {
            return state
        }
     }
}