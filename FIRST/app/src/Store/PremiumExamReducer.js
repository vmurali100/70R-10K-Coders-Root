const initialState = {

    premiumexamslist : []
}
export const getPremiumExams = () => {
    return {

        type: "GET_PREMIUM_EXAMS", 

        }
}
export default function PremiumExamReducer(state = initialState, action) {
        
    switch(action.type){
        case 'GET_PREMIUM_EXAMS' : {
            return {
                ...state,
                premiumexamslist :  action.payload.pay
            }
        };

       default : {
            return state
        }
     }
}