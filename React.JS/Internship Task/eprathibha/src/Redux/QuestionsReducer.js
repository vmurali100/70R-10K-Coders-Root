const ADD_QUESTIONS_DATA = 'ADD_QUESTIONS_DATA '

const initialState = {
    questions : []
}

export const addQuestionsData = (c) => {
    return {
        type: "ADD_QUESTIONS_DATA",
        payload : c,
        }
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


