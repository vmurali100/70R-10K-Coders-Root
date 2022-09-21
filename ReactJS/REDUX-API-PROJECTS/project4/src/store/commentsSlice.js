import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const allComments = {
    comments: [],
};

export const getAllComments = createAsyncThunk('comments/getAllComments', () => { 
    return fetch("http://localhost:4004/comments/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createCommentAction = createAsyncThunk('comments/createComments', (comment, { dispatch }) => {
    return fetch("http://localhost:4004/comments/", {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllComments())
    })
})
export const deleteCommentAction = createAsyncThunk('comments/deleteComments', (comment, { dispatch }) => {
    return fetch("http://localhost:4004/comments/" + comment.id, {
        method: 'DELETE',
        body: JSON.stringify(comment),
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllComments())
    })
})

export const updateCommentAction = createAsyncThunk('comments/updateComments', (comment, { dispatch }) => {


    return fetch("http://localhost:4004/comments/" + comment.id, {
        method: 'PUT',
        body: JSON.stringify(comment),
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllComments())
    })
})


export const commentsSlice = createSlice({
    name: "comments",
    initialState: allComments,
    extraReducers: {
        [getAllComments.pending]: (state, action) => {},
        [getAllComments.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {}
    }

})
export default commentsSlice.reducer