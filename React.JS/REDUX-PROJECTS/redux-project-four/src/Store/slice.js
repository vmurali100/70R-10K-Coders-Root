import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const allComments = {
    comments: []
}

export const getallComments = createAsyncThunk('comments/getallComments', () => {
    return fetch("http://localhost:3000/comments/")
        .then((res) => res.json())
        .catch((err) => console.log(err))
})

export const addCommentAction = createAsyncThunk('comments/addComment', (comment, { dispatch }) => {
    return fetch("http://localhost:3000/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }, comment)
        .then(() => {
            getallComments();
        })
});

export const deleteCommentAction = createAsyncThunk('comments/deleteComment',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/comments/"+objUrl.id,{
        method:"DELETE"
    })
    .then(()=>{
        dispatch(getallComments())
    })
})

export const editCommentAction = createAsyncThunk('comments/editComment', (comm, { dispatch }) => {
    return fetch("http://localhost:3000/comments/" + comm.id, {
        method: "PUT",
        body: JSON.stringify(comm),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    },comm)
    .then(()=>{
        dispatch(getallComments())
    })
})

export const commentsSlice = createSlice({
    name: "comments",
    initialState: allComments,
    extraReducers: {
        [getallComments.pending]: (state, action) => { },
        [getallComments.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.comments = action.payload;
        }

    }

})


export default commentsSlice.reducer