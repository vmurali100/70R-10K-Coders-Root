const cart = []
const HandleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADDITEM":
            // checking the item if already in cart or not
            const checkItem = state.find((x) => x.id === product.id)
            if (checkItem) {
                // Increase the quantity
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
        default:
            return state
    }
}
export default HandleCart