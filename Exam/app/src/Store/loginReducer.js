const initialState = {

    data : []
}
export const addLoginData = () => {
    return {

        type: "ADD_LOGIN_DATA",

        }
}
export default function loginReducer(state = initialState, action) {
        
    switch(action.type){
        case 'ADD_LOGIN_DATA' : {
            return {
                ...state,
                data :  action.payload.pay
            }
        };

       default : {
            return state
        }
     }
}