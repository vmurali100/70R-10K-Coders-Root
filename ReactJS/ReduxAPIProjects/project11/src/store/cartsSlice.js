import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allCarts = {
    carts: [],
};
export const getAllCarts = createAsyncThunk('carts/getAllCarts', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5011/cart/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createCartAction = createAsyncThunk('carts/createCarts', (cart, { dispatch }) => {
    return fetch("http://localhost:5011/cart/", {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllCarts())
    })
})
export const deleteCartAction = createAsyncThunk('carts/deleteCarts', (cart, { dispatch }) => {
    return fetch("http://localhost:5011/cart/" + cart.id, {
        method: 'DELETE',
        body: JSON.stringify(cart),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllCarts())
    })
})

export const updateCartAction = createAsyncThunk('carts/updateCarts', (cart, { dispatch }) => {


    return fetch("http://localhost:5011/cart/" + cart.id, {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllCarts())
    })
})


export const cartsSlice = createSlice({
    name: "carts",
    initialState: allCarts,
    extraReducers: {
        [getAllCarts.pending]: (state, action) => {},
        [getAllCarts.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.carts = action.payload
        },
        [getAllCarts.rejected]: (state, action) => {}
    }

})
export default cartsSlice.reducer