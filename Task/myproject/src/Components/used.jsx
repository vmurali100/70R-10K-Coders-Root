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


data: 
exams: 
0[ {Old question papers UPSC Civils (Pre)}
1
: 
Limited UPSC other than Civils
: 
Array(10)
0
: 
Exam
: 
{id: '1535', type: 'Exam', name: 'CAPF 2020', start_date: '2021-03-09 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'CAPF_2020'}
[[Prototype]]
: 
Object
1
: 
Exam
: 
{id: '1536', type: 'Exam', name: 'CDS1_2020', start_date: '2021-03-09 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'CDS1_2020'}
[[Prototype]]
: 
Object
2
: 
Exam
: 
{id: '1550', type: 'Exam', name: 'CDS1_2021', start_date: '2021-03-11 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'CDS_2021'}
[[Prototype]]
: 
Object
3
: 
Exam
: 
{id: '1537', type: 'Exam', name: 'CDS2_2020', start_date: '2021-03-09 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'CDS2_2020'}
[[Prototype]]
: 
Object
4
: 
Exam
: 
{id: '1504', type: 'Exam', name: 'CISF_2020', start_date: '2021-03-04 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'CISF'}
[[Prototype]]
: 
Object
5
: 
Exam
: 
{id: '1502', type: 'Exam', name: 'Engineering Services_2020', start_date: '2021-03-04 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'Engineering Services '}
[[Prototype]]
: 
Object
6
: 
Exam
: 
{id: '1551', type: 'Exam', name: 'Geo_Scientist_2020', start_date: '2021-03-11 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'Geo_Scientist_2020'}
[[Prototype]]
: 
Object
7
: 
Exam
: 
{id: '1506', type: 'Exam', name: 'NDA_2020', start_date: '2021-03-04 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'NDA'}
[[Prototype]]
: 
Object
8
: 
Exam
: 
{id: '1541', type: 'Exam', name: 'SO_2014', start_date: '2021-03-09 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'SO'}
[[Prototype]]
: 
Object
9
: 
Exam
: 
{id: '1547', type: 'Exam', name: 'SO_Aggregated_Polity_2015', start_date: '2021-03-11 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '3', name: 'Limited UPSC'}
years
: 
{exam_year: 'SO_Integrated_Polity_2015'}
[[Prototype]]
: 
Object
length
: 
10
[[Prototype]]
: 
Array(0)
attempted
: 
0
total
: 
10
[[Prototype]]
: 
Object
2
: 
Limited NCERT
: 
Array(4)
0
: 
Exam
: 
{id: '1465', type: 'Exam', name: 'limited NCERT1', start_date: '2021-02-03 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '5', name: 'Limited NCERT'}
years
: 
{exam_year: 'limited_NCERT1'}
[[Prototype]]
: 
Object
1
: 
Exam
: 
{id: '1466', type: 'Exam', name: 'limited NCERT2', start_date: '2021-02-03 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '5', name: 'Limited NCERT'}
years
: 
{exam_year: 'limited_NCERT2'}
[[Prototype]]
: 
Object
2
: 
Exam
: 
{id: '1468', type: 'Exam', name: 'limited NCERT3', start_date: '2021-02-03 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '5', name: 'Limited NCERT'}
years
: 
{exam_year: 'limited_NCERT3'}
[[Prototype]]
: 
Object
3
: 
Exam
: 
{id: '1474', type: 'Exam', name: 'limited NCERT4', start_date: '2021-02-03 00:00:00', end_date: '2025-01-01 00:00:00', …}
Package
: 
{id: '7', name: 'Free'}
cate
: 
{id: '5', name: 'Limited NCERT'}
years
: 
{exam_year: 'limited_NCERT4'}
[[Prototype]]
: 
Object
length
: 
4
[[Prototype]]
: 
Array(0)
attempted
: 
0
total
: 
export const userSlice = createSlice({
  name: 'users',
  initialState: exams,
  reducers: {
    // allexams :(state)=>state.data.user,
    addToken: (state, action) => {
      state.tokenu = localStorage.getItem("tokenu")
    },
    addId: (state, action) => {
      state.id = localStorage.getItem("id")
    },

    addData: (state, { payload: { data } }) => {
      state.data = data

      // state.data = localStorage.getItem("data")

    },

    addUsers: (state, action) => {
      state.users = localStorage.getItem("users")

    },


  },

  extraReducers: {
    [Freeexamlist.pending]: (state, action) => {
      state.loading = true
    },
    [Freeexam.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload
      console.log(state.users)

    },
    export const { addData, addUsers, addToken, addId } = userSlice.actions;
export default userSlice.reducer;


// export const loginUser = createAsyncThunk("loginUser", (body,{dispatch}) => {

//   return fetch("https://e-prathibha.com/apis/login/", {
//     method: "POST",
//     headers: {
//       // ,Authorization: localStorage.getItem('data')
//       Accept: 'application/json',
//       'Content-Type': 'application/json',

//     },
//     body: JSON.stringify(body),
//   })
//   .then(() =>{dispatch(loginUser())})
//   .catch((err) => console.log(err));

// }
// )

// export const Freeexam=createAsyncThunk('Freeexam',(user)=>{
//   return fetch("https://e-prathibha.com/apis/test_free_exam/",{
//       method:"POST",body:JSON.stringify(user),
//       headers:{
//         'server_key': '3w99V63pW7tJ7vavGXtCKo8cp', 
//           'id': localStorage.getItem("id"), 
//           'tokenu': localStorage.getItem("tokenu"),
//           'Accept':'application/json,text/plain,*/*',
//           'Content-Type':'application/json'
//       }}).then((res)=>{

//         return res.json()})

//   .catch((err)=>console.log(err))
// })



export const Freeexam = createAsyncThunk("Freeexam", async (user) => {
  axios.post('https://e-prathibha.com/apis/test_free_exam/',{headers:{
  id:localStorage.getItem('id'),
  'server_key':'3w99V63pW7tJ7vavGXtCKo8cp',
  tokenu:localStorage.getItem('tokenu'),
  Accept: 'application/json',
  'Content-Type': 'application/json',
}},JSON.stringify(user), Freeexam)
.then((res) => {
  console.log("RESPONSE RECEIVED: ", res);
})
.catch((err) => {
  console.log("AXIOS ERROR: ", err);
})})

// export const Freeexam = createAsyncThunk( "Freeexam",async(body)=>{
//     const response = await axios.post('https://e-prathibha.com/apis/test_free_exam/',{
//       headers:{
//       id:localStorage.getItem('id'),
//       'server_key':'3w99V63pW7tJ7vavGXtCKo8cp',
//       tokenu:localStorage.getItem('tokenu'),
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     }, body:JSON.stringify(body)}).then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     console.log(response)

// })


// export const Freeexam = createAsyncThunk("Freeexam",  (body) => {

//   return fetch("https://e-prathibha.com/apis/test_free_exam/", {
//     method: "POST",
//     headers: {
//       // Authorization: localStorage.getItem('Id'),
//       // Authorization: localStorage.getItem('Token'),
//       id: localStorage.getItem("id"),
//       server_key: '3w99V63pW7tJ7vavGXtCKo8cp',
//       tokenu: localStorage.getItem("tokenu"),
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   }).then((res)=>res.json())
//   .catch((err)=>console.log(err))
// }
// )


// [loginUser.fulfilled]:(state, action) => {
    //   console.log(action)
    //   console.log(state)
    //   state.user = action.payload;
    //   state=(action, { payload: { data } })
    //   state.payload =payload.data
    //   state.id = payload.data.id
    //   // payload.data =data
    //   // state.data = data
    //   // state.id = data.Id
    //   // state.tokenu = data.Token
    //   // localStorage.setItem('data', JSON.stringify(data))
    //   // localStorage.setItem('tokenu', JSON.stringify(data.Token))
    //   // localStorage.setItem('id', JSON.stringify(data.Id))
    //   //  localStorage.setItem('Id', JSON.stringify(Id))
    // },


    // [Freeexam.fulfilled]: (state, { payload: { data,error } }) => {
    //   state.loading = false;

    //   if (error) {
    //     state.error = error
    //     console.log(data)
    //   } else {

    //     state.id = data.Id
    //     state.tokenu = data.Token;

    //     localStorage.setItem('id', JSON.stringify(data.Id))

    //     localStorage.setItem('tokenu', JSON.stringify(data.Token))
    //     console.log(data)
    //   }
    // },
    // [Freeexam.fulfilled]: (state, { payload: { data } }) => {
    //   // state.users=action.payload
    //   state.data = data
    //   state.exam=data.exam
    //   localStorage.setItem('data',JSON.stringify(data))
    //   console.log(state, data)
    //   // state.loading = false

    //   // if (error) {
    //   //       state.error = error
    //   //       console.log(JSON.stringify(data))
    //   //     } else {

    //   //       state.data=data 
    //   //       state.exam=data.exam
    //   //       localStorage.setItem('data', data)
    //   //       localStorage.setItem('exam', data.exam)
    //   //       console.log(JSON.stringify(data))
    //   //     }
    //   // state.user = action.payload
    //   // state.id = data.Id
    //   // state.tokenu = data.Token;

    //   // localStorage.setItem('id', data.Id)

    //   // localStorage.setItem('tokenu', data.Token)
    //   // localStorage.setItem('server_key',JSON.stringify('3w99V63pW7tJ7vavGXtCKo8cp'))
    // },
    //     [Freeexam.fulfilled]: (state, action) => {
    //       state.loading = false
    //       state.user.push(action.payload)
    //       state.user = action.payload
    //       // state.user = payload.data
    // // console.log(user)
    //     },

    //     [Freeexam.rejected]: (state, { payload: { error, msg } }) => {
    //       state.loading = true

    //       if (error) {
    //         state.error = error
    // console.log(error)
    //       } else {
    //         state.msg = msg
    //       }
    //     },

    import React from 'react'
    import { useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { useNavigate } from "react-router-dom";
    import { Freeexam } from '../store/userSlice';
    import { Link } from 'react-router-dom'
    import allexams from '../store/userSlice';
    export const GetFreeexamlist = () => {
      const user = useSelector((state) => state.users);
      localStorage.setItem('user',JSON.stringify(user.users))
      console.log(user);
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const [exams, setexams] = useState([]);
    
    
    //   const [users, setusers] = useState({
    // data:'',
    // exams:''
    //   });
    
    
      const handleexam=()=>{
        
    
    dispatch(Freeexam())
    
    
      }
    
      // const lists =()=>{
      //    Object.keys(user.users.data.exams).map((exams,i)=>{
      //     (
      //     console.log(exams,i)
          
          
      //     )})
      // }
     
      return (
      <div>
        <button type='button' onClick={handleexam} className="btn btn-info" >Free Exams</button>
        
        
        <div>
          
          <h1>Exams List</h1>
    
         <div>
          {/* <ul >
            {lists(exams)}
    
            <li>{lists(["Old question papers UPSC Civils (Pre)"][0].Exam.id)}</li>
          </ul> */}
         </div>
          <div className="container py-4">
          <center>
            {/* <h1 className="display-5">Exams:{Object.keys(user.users.data).map((exams,i)=>{console.log(exams,i)})}</h1>  */}
           
              {/* <h1>{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"]}</h1>  */}
            
              <ul className="list-group w-100">
              <div>
            {/* {Object.keys(user.users.data.exams).map((exams,i)=>{
              (
              console.log(exams,i)
              
              
              )})} */}
           </div>
            {/* <h1>Old question papers UPSC Civils (Pre)</h1>
            <li className="list-group-item">Exam Id:{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam.id}</li> 
            <li className="list-group-item">Exam Year:{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"][0].years.exam_year}</li>
            <li className="list-group-item">Package:{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"][0].Package.name}</li>
            <li className="list-group-item">Category:{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"][0].cate.name}</li>
            <li className="list-group-item">Duration:{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam.duration}</li> */}
              
            </ul> 
          </center>
          <hr />
         
        </div>
     {/* <h1>{console.log(user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"],"h1")}</h1> */} 
      {/* <table className="table">
            <thead>
              <tr>
              <th>S NO</th>
                <th>Title</th>
                <th>Name of The Exam</th>
                <th>Year</th>
                
              </tr>
            </thead>
            <tbody>
            
             { Object.entries(user.users.data.exams).map((val,i)=>{
    
            return (
             
             console.log(val,i),
             <tr key={i}>
             
              
              <td>{user.users.data.exams[i]}</td>
              <td>{user.users.data.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam}</td>
    
              <td>{val.email}</td>
              <td>{val.mobilenumber}</td>
             
    
              </tr>
    
             
             )})}
            </tbody>
          </table>   */}
    <div>
        
      
       <Link to="/main" className="btn btn-warning" style={{marginLeft:"25px"}}> Back</Link>
        </div>
    
        </div>
    
    
        </div>
      )
    }
    
    
  // const lists =()=>{
  //    Object.keys(user.users.data.exams).map((exams,i)=>{
  //     (
  //     console.log(exams,i)
      
      
  //     )})
  // }
 {/* <ul>
{use.map((value,i)=>(
  // console.log(value)
  <li key={i}>Exam Id:{value["Old question papers UPSC Civils (Pre)"].Package.name}</li>
))}

</ul> */}
{
  user.users.map((value)=>
    // console.log(value,i)
(
  <li>{value["Old question papers UPSC Civils (Pre)"].Exam.id}</li>
)
  )
 }
 {/* <li className="list-group-item">Exam Id:{user.users[0]["Old question papers UPSC Civils (Pre)"][0].Exam.id}</li>  */}




 export const Getproducts = createAsyncThunk("Getproducts", async () => {
  
  const res = await fetch('https://fakestoreapi.com/products', { method: "GET"});
  return await res.json()
}
)


