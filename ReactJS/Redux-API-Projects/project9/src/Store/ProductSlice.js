import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const allProducts = {
    products: []
}
let url = "http://localhost:3000/products"
export const getProducts = createAsyncThunk('products/getProducts', () => {
    return fetch(url).then((res) => res.json()).catch((err) => console.log(err))
})
export const createUsersAction = createAsyncThunk('user/createuser', (user, { dispatch }) => {
    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json,textplain,*/*',
                'Content-type': 'application/json'
            }
        })
        .then((res) => {
            dispatch(getProducts())
        })
})
export const deleteUsersAction = createAsyncThunk('user/deleteUsers', (user, { dispatch }) => {
    return fetch(url + user.id, { method: 'DELETE' }).then((res) => {
        dispatch(getProducts()) // used to retrieve the data after user can deleted
        return res.json()
    }).catch((err) => console.log(err))

})

export const editUsersAction = createAsyncThunk('user/edituser', (user, { dispatch }) => {
    return fetch(url + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json,textplain,*/*',
            'Content-type': 'application/json'
        }
    })
        .then((res) => {
            dispatch(getProducts())
        })
})
export const ProductSlice = createSlice({
    name: 'products',
    initialState: allProducts,
    extraReducers: {
        [getProducts.pending]: (state, action) => { },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [getProducts.rejected]: (state, action) => { }
    }
})


export default ProductSlice.reducer