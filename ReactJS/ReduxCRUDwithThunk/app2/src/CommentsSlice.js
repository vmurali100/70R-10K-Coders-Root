import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const allComments ={
    comments:[],
}

export const getAllComments = createAsyncThunk('comments/getComments',()=>{
    return fetch('http://localhost:3207/comments').then((res)=>{
        return res.json().catch((err)=> console.log(err))
    })
})

export const createCmnt = createAsyncThunk('comments/createcomment',(cmnt,{dispatch})=>{
  return fetch('http://localhost:3207/comments',{
      method:"POST",
      body:JSON.stringify(cmnt),
      headers:{
          'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json'
      }
  
  }).then((res)=>{
      dispatch(getAllComments())
      
  })
})

export const updateComment = createAsyncThunk('comments/updateComment',(cmnt,{dispatch})=>{
  return fetch('http://localhost:3207/comments/'+cmnt.id,{
      method:"PUT",
      body:JSON.stringify(cmnt),
      headers:{
          'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json'
      }
}).then((res)=>{
  dispatch(getAllComments())
  
})
})
export const deleteComment = createAsyncThunk('comments/deleteComment',(cmnt,{dispatch})=>{
  return fetch('http://localhost:3207/comments/'+cmnt.id,{ method:"DELETE"}).then((res)=>{
      dispatch(getAllComments())
      return res.json()
  })
})

  export const CommentsSlice = createSlice({
    name:"comments",
    initialState:allComments,
    extraReducers:{
  [getAllComments.fulfilled]:(state,action)=>{
    state.comments=action.payload;
  }
    }
})

export default CommentsSlice.reducer;