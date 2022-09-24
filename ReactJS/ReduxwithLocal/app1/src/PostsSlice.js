import { createSlice } from "@reduxjs/toolkit";
import postsData from './postsData.json'

export const PostSlice = createSlice({
    name:"posts",
    initialState:postsData,
    
    reducers:{
        addPost:(state,action)=>{
            state.Posts.push(action.payload)
        },
        updatePost:()=>{

        },
        deletePost:()=>{

        }
    }
})

export default PostSlice.reducer;
export const {addPost, updatePost, deletePost} = PostSlice.actions;