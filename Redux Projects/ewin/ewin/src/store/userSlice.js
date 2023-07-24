import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("loginUser", async (body) => {

    const res = await fetch("http://52.139.224.15:9191/account/login/", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    return await res.json()
  }
  )

  export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users:[]
    },
    extraReducers: {
      [loginUser.pending]: (state, action) => {
        state.loading = true
      },
      [loginUser.fulfilled]: (state, { payload: { data } }) => {
        state.loading = false;
        console.log(data)
       
      },
      [loginUser.rejected]: (state, action) => {
        state.loading = true
      },
     
    },
  });
  
  export default userSlice.reducer;