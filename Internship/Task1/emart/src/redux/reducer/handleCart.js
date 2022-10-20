const cart = [];

// const InitialState ={
//     users : [],
//     loggedInUser : null,
// }

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // check if product is already exist
            const  exist = state.find((x)=>x.id === product.id); // which returns the value and types
            if(exist){
                return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty + 1} : x //use when one or more arguements expected in a function call
                );
            }
            else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
            
            case "DELITEM":
                const exist1 = state.find((x)=> x.id === product.id);
                if (exist1.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }
                else{
                    return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;

                // case "REGISTER":
                //     return{
                //         ...state,
                //         users : [...state.users, action.payload]
                //     }
        default:
            return state
            break;
    }

}

export default handleCart;