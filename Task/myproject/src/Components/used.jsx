import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import axios from "axios"
const allUsers = {
    users: [],
  };
  const Verifyemail ={
    reg_code:[]
  }
  const APIKEY = "3w99V63pW7tJ7vavGXtCKo8cp"
  export const getAllUsers = createAsyncThunk("users/getAllUsers", () => {
    return fetch("https://cors-anywhere.herokuapp.com/https://e-prathibha.com/apis/test_free_exam?appid=${API_KEY}")
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });
  
  export const createUserAction=createAsyncThunk('reg_code/createUserAction',(user,{dispatch})=>{
      return fetch("https://cors-anywhere.herokuapp.com/https://e-prathibha.com/apis/register",{
          method:"POST",body:JSON.stringify(user),
          headers:{
           
              'Accept':' "Access-Control-Allow-Origin", "*",application/json,text/plain,*/*',
              'Content-Type':'application/json'
          }
      }).then(()=>{dispatch(Verifyemail())})
  })
  export const UserLoginAction=createAsyncThunk('users/UserLoginAction',(user,{dispatch})=>{
      return fetch("https://cors-anywhere.herokuapp.com/https://e-prathibha.com/apis/login/",{
          method:"POST",body:JSON.stringify({email:"",password:""}),
          headers:{
            'Accept':' "Access-Control-Allow-Origin", "*",application/json,text/plain,*/*',
            'Content-Type':'application/json'
          }
      }).then(()=>{dispatch(getAllUsers())})
  })
  const API_KEY = "3w99V63pW7tJ7vavGXtCKo8cp";
  export const GET_DATA =
   
    async (dispatch) => {
      axios
        .get(
          ` https://e-prathibha.com/apis/start_exam?examId=24?appid=${API_KEY}`
        )
        .then((response) =>
        
          dispatch({ type:GET_DATA.fulfilled, payload: response.data })
        )
         .catch(err => {
        console.log(err.response, err)
       
       
      });
    };


  export const userSlice = createSlice({
    name: "users",
    initialState: allUsers,
    extraReducers: {
      [getAllUsers.fulfilled]: (state, action) => {
        state.users = action.payload;
      },
      [getAllUsers.pending]: (state, action) => {},
      [getAllUsers.rejected]: (state, action) => {},
      [GET_DATA.fulfilled]: (state, action) => {
        state.users = action.payload;
      },
      // [Result.success]:(state,action)=>{
      //   state.user =action.payload
      // }
    },
  });
  
  export default userSlice.reducer;
  console.log('payload', payload);
  state.isFetching = false;
  state.isSuccess = true;
  state.email = payload.user.email;
  state.name = payload.user.name;
  state.phone = payload.user.phone;
  state.password = payload.user.password;
  state.confirmpassword = payload.user.confirmpassword;

  // export const signupUser = createAsyncThunk(
//   'users/signupUser',
//   async ({ name, email,phone, password,confirmpassword }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://cors-anywhere.herokuapp.com/https://e-prathibha.com/apis/register/',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             phone,
//             password,
//             confirmpassword,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('data', data);

//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return { ...data, username: name, email: email,phone:phone,password:password,confirmpassword:confirmpassword };
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );


// export const loginUser = createAsyncThunk(
//   'users/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://cors-anywhere.herokuapp.com/https://e-prathibha.com/apis/login/',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email,
//             password,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('response', data);
//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

 // reducers: {
  //   clearState: (state) => {
  //     state.isError = false;
  //     state.isSuccess = false;
  //     state.isFetching = false;

  //     return state;
  //   },
  // },
// [loginUser.fulfilled]: (state,{payload}) => {
    //   console.log('payload', payload);
    //   state.email = payload.user.email;
    //   state.password = payload.user.password;
    //   return state;
    // },
    // [loginUser.rejected]: (state, { payload }) => {
    //   console.log('payload', payload);
  
    //   state.errorMessage = payload.message;
    // },
    // [loginUser.pending]: (state) => {
      
    // },

// export const loginUser=createAsyncThunk('users/login',({user})=>{
//   return fetch("https://e-prathibha.com/apis/login/",{
//       method:"POST",
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//        user,
//       }),
//   }).then(response=>response.json()).then(data=>{console.log(data)}).catch((err)=>{console.log(err.message)})
// })

// export const signupUser=createAsyncThunk('users/signupUser',(data,{dispatch})=>{

//   return fetch("https://e-prathibha.com/apis/register/",{
//       method:"POST",
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//        data
//       }),
//   }).then(()=>{dispatch(signupUser(data))})
// })
// export const Verify=createAsyncThunk('users,verify',(reg_code,{dispatch})=>{
//   return fetch("https://e-prathibha.com/apis/verifyEmail/",{
//     method:"POST",
//     body:JSON.stringify({reg_code}),
//   }).then(()=>{dispatch(Verify())})
// })


    // [signupUser.fulfilled]: (state, action) => {
     
    //   state.users = action.payload;
      
      
    // },
    // [signupUser.pending]: (state,action) => {
   
    // },
    // [signupUser.rejected]: (state, action,{error}) => {
      
    //   state.users = action.payload
    //   state.errormessage=error.message
    // },
    
    // [loginUser.fulfilled]: (state, action) => {
     
    //   state.user = action.payload;
      
      
    // },
    // [loginUser.pending]: (state, action) => {},
    // [loginUser.rejected]: (state, action,{error}) => {
    //   state.users=action.payload
    //   state.errormessage=error.message
    // },

    Verify

    id
: 
"3333"
message
: 
"Email verified successfully."
token
: 
"BYS3VLBYTY8FImw3qloq"