
const ADD_LOGIN_DATA = "ADD-LOGIN-DATA"
const initialState = {
    data : []
}
export const addLoginData = (a) => {
    return {
        type: "ADD_LOGIN_DATA",
        payload : a,
        }
}
export default function loginReducer(state=initialState,action) {
    
    switch(action.type){
        case 'ADD_LOGIN_DATA' : {
            return {
                ...state,
                ...state.data,
                data :  action.payload.pay
            }
        };

        default : {
            return state
        }
     }

}


