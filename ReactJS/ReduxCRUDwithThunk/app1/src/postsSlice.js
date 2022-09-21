import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { json } from "react-router-dom";


const allPosts ={
    posts: [],
}



export const getAllPosts = createAsyncThunk("posts/getAllPosts", ()=>{
    return fetch("http://localhost:3000/posts").then((res)=> res.json()).catch((err)=>console.log("err"))
});

    export const createPost = createAsyncThunk('posts/createPost',(post,{dispatch})=>{
        return fetch('http://localhost:3000/posts/',{
            method:"POST",
            body:JSON.stringify(post),
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-Type':'application/json'
            }
        
        }).then((res)=>{
            dispatch(getAllPosts())
            
        })
    })

export const updatePost = createAsyncThunk('posts/updatePost',(post,{dispatch})=>{
    return fetch('http://localhost:3000/posts/'+post.id,{
        method:"PUT",
        body:JSON.stringify(post),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
}).then((res)=>{
    dispatch(getAllPosts())
    
})
})

export  const deletePost = createAsyncThunk('posts/deletePost',(post,{dispatch})=>{
 return fetch('http://localhost:3000/posts/'+post.id,{method:'DELETE'}).then((res)=>{
    dispatch(getAllPosts())
    return res.json()
 })
 })

 export const postsSlice = createSlice({
    name:"posts",
    initialState:allPosts,
    extraReducers:{
        [getAllPosts.pending]:(state,action)=>{},
        [getAllPosts.fulfilled]:(state,action)=>{
            // console.log(action.payload);
            state.posts=action.payload;
        },
        [getAllPosts.rejected]:(state,action)=>{},
        
    }
})
 

export default  postsSlice.reducer