const initialState = {
    questions : []
}
export const addQuestionsData = () => {
    return {type: "ADD_QUESTIONS_DATA"}
}
export default function QuestionsReducer(state=initialState,action) {
    switch(action.type){
        case 'ADD_QUESTIONS_DATA' : {
            return {
                ...state,
                ...state.questions,
                questions : action.payload.pay
            }
        };
        default : {
            return state
        }
     }
}


