import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  Token: '',
  Id: '',
  data: '',
  msg: "",
  loading: false,
  error: ""
}
export const loginUser = createAsyncThunk("loginUser", async (body) => {

  const res = await fetch("https://e-prathibha.com/apis/login/", {
    method: "POST",
    headers: {
      // ,Authorization: localStorage.getItem('data')
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

export const Freeexam = createAsyncThunk("Freeexam", async (body) => {

  const res = await fetch("https://e-prathibha.com/apis/test_free_exam/", {
    method: "POST",
    headers: {
      // Authorization: localStorage.getItem('Id'),
      // Authorization: localStorage.getItem('Token'),
      Id: localStorage.getItem("Id"),
      server_key: '3w99V63pW7tJ7vavGXtCKo8cp',
      Token: localStorage.getItem("Token"),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json()
}
)

export const Getquestions = createAsyncThunk("Freeexam", async () => {

  const res = await fetch("https://e-prathibha.com/apis/start_exam?examId=24", {
    method: "GET",
    headers: {
      // Authorization: localStorage.getItem('Token','Id'),
      Id: localStorage.getItem("Id"),
      server_key: '3w99V63pW7tJ7vavGXtCKo8cp',
      Token: localStorage.getItem("Token"),

      // Accept: 'application/json',
      // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  });
  return await res.json().catch((err) => console.log(err))
}
)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    addToken: (state, action) => {
      state.Token = localStorage.getItem("Token")
    },
    addId: (state, action) => {
      state.Id = localStorage.getItem("Id")
    },

    addData: (state, action) => {

      state.data = localStorage.getItem("data")

    },

    addUser: (state, action) => {
      state.user = localStorage.getItem("user")

    },


  },

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true
    },
    [loginUser.fulfilled]: (state, { payload: { data } }) => {
      state.loading = false;
      // console.log(payload,"LoginFullfilled")

      state.data = data
      state.Id = data.Id
      state.Token = data.Token
      localStorage.setItem('data', JSON.stringify(data))
      localStorage.setItem('Token', JSON.stringify(data.Token))
      localStorage.setItem('Id', JSON.stringify(data.Id))
      // localStorage.setItem('Id', JSON.stringify(Id))




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
    [Freeexam.fulfilled]: (state, { payload: { data } }, error) => {
      state.loading = false;
      if (error) {
        state.error = error
      } else {
        state.Id = data.Id
        state.Token = data.Token;

        localStorage.setItem('Id', JSON.stringify(data.Id))

        localStorage.setItem('Token', JSON.stringify(data.Token))

      }
    },
    [Freeexam.rejected]: (state, { payload: { error, msg } }) => {
      state.loading = true

      if (error) {
        state.error = error
      } else {
        state.msg = msg
      }
    },
    [Getquestions.pending]: (state, action) => {
      state.loading = true
    },
    [Getquestions.fulfilled]: (state, { payload: { data } }, error) => {

      state.loading = false;
      if (error) {
        state.error = error
        console.log(error)
      } else {


        state.Id = data.Id
        state.Token = data.Token
        localStorage.setItem('Id', JSON.stringify(data.Id))

        localStorage.setItem('Token', JSON.stringify(data.Token))
      }
    },
    [Getquestions.rejected]: (state, action) => {
      state.loading = true
    },


  },
});

export const { addData, addUser, addToken, addId } = userSlice.actions;
export default userSlice.reducer;