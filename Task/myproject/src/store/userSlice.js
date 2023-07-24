import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const exams = {
  users: []
}
export const loginUser = createAsyncThunk("loginUser", async (body) => {

  const res = await fetch("https://e-prathibha.com/apis/login/", {
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
export const signupUser = createAsyncThunk("signupUser", async (body) => {

  const res = await fetch("https://e-prathibha.com/apis/register/", {
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
export const Verify = createAsyncThunk("signupUser", async (body) => {
  const res = await fetch("https://e-prathibha.com/apis/verifyEmail/", {
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
export const Freeexam = createAsyncThunk("Freeexam", async () => {
  const id = localStorage.getItem('id')
  const tokenu = localStorage.getItem('tokenu')
  const server_key = '3w99V63pW7tJ7vavGXtCKo8cp'
  console.log(id, tokenu, server_key)
  const headers = {
    'id': id,
    'tokenu': tokenu,
    server_key: server_key,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  console.log(headers)
  const res = await fetch("https://e-prathibha.com/apis/test_free_exam", { method: "POST", headers }
  )

  return await res.json()

})

export const Getquestions = createAsyncThunk("Getquestions", async () => {
  const id = localStorage.getItem('id')
  const tokenu = localStorage.getItem('tokenu')
  const server_key = '3w99V63pW7tJ7vavGXtCKo8cp'
  console.log(id, tokenu, server_key)
  const headers = {
    'id': id,
    'tokenu': tokenu,
    server_key: server_key,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  console.log(headers)
  const res = await fetch('https://e-prathibha.com/apis/start_exam?examId=24', { method: "GET", headers });
  return await res.json()
}
)
export const Finish = createAsyncThunk("Finishexam", async (body) => {
  const id = localStorage.getItem('id')
  const tokenu = localStorage.getItem('tokenu')
  const server_key = '3w99V63pW7tJ7vavGXtCKo8cp'
  console.log(id, tokenu, server_key)
  const headers = {
    'id': id,
    'tokenu': tokenu,
    server_key: server_key,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  console.log(headers)
  const res = await fetch('https://e-prathibha.com/apis/finishExam', {
    method: "POST", headers,
    body: JSON.stringify(body),
  });
  return await res.json()
}
)

export const userSlice = createSlice({
  name: 'users',
  initialState: exams,
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true
    },
    [loginUser.fulfilled]: (state, { payload: { data } }) => {
      state.loading = false;
      console.log(data)
      state.data = data
      state.id = data.Id
      state.tokenu = data.Token
      localStorage.setItem('data', data)
      localStorage.setItem('tokenu', data.Token)
      localStorage.setItem('id', data.Id)
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = true
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true
    },
    [signupUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error
      } else {
        state.msg = msg
      }
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = true
    },
    [Verify.pending]: (state, action) => {
      state.loading = true
    },
    [Verify.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error
      } else {
        state.msg = msg
      }
    },
    [Verify.rejected]: (state, action) => {
      state.loading = true
    },
    [Freeexam.pending]: (state, action) => {
      state.loading = true
    },
    [Freeexam.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload.data.exams
      console.log(state.users)
    },
    [Freeexam.rejected]: (state, action) => {
      state.loading = true
      state.users = action.payload
    },
    [Getquestions.pending]: (state, action) => {
      state.loading = true
    },
    [Getquestions.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload.data.exam
      console.log(state.users)
    },
    [Getquestions.rejected]: (state, action) => {
      state.loading = true
    },
    [Finish.pending]: (state, action) => {
      state.loading = true
    },
    [Finish.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload
      console.log(action.payload)
      console.log(state.users)
    },
    [Finish.rejected]: (state, action) => {
      state.loading = true
    },
  },
});

export default userSlice.reducer;