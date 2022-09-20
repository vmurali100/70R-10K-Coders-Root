import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const allPosts = {
    posts : []
}

export const getAllPosts = createAsyncThunk('posts/getAllPosts',()=>{
    return fetch("http://localhost:3000/posts")
    .then((res)=> res.json())
    .catch((err)=>console.log(err))
})


export const addPostAction = createAsyncThunk('posts/addPost',(posts,{dispatch})=>{
    return fetch("http://localhost:3000/posts",{
        method:"POST",
        body:JSON.stringify(posts),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    },posts)
    .then(()=>{
        dispatch(getAllPosts());
    })
});

export const updatePostAction = createAsyncThunk('posts/editPosts',(posts,{dispatch})=>{
    return fetch("http://localhost:3000/posts/"+posts.id,{
        method:"PUT",
        body:JSON.stringify(posts),
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }

    },posts)
    .then(()=>{
        dispatch(getAllPosts());
    })
})

export const deletePostAction = createAsyncThunk('posts/deletePost',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/posts/"+objUrl.id,{
        method:"DELETE"
    })
    .then(()=>{
        dispatch(getAllPosts())
    })
})




export const postsSlice = createSlice({
    name:"posts",
    initialState: allPosts,
    extraReducers:{
        [getAllPosts.pending] : (state,action) => {},
        [getAllPosts.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.posts = action.payload;
        }
    }
})

export default postsSlice.reducer