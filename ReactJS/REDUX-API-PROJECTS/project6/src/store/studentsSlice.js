import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allStudents ={
    students: [],
}
export const getAllStudents = createAsyncThunk('students/getAllStudents',()=>{
    return fetch("http://localhost:4006/main").then((res)=>res.json()).catch((err)=> console.log(err))
})//it used to get the data from the AAPI

export const createStudentAction = createAsyncThunk('students/createUser',(student,{dispatch})=>{
    return fetch("http://localhost:4006/main/",{
        method: "POST", body:JSON.stringify(student),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllStudents());

    })
    
})

export const updateStudentAction= createAsyncThunk('students/updateUser',(student, {dispatch})=>{
    return fetch("http://localhost:4006/main/"+student.id,{
        method: "PUT", body:JSON.stringify(student),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllStudents());

    })
})

export const deleteStudentAction = createAsyncThunk('students/deleteUser',(student, {dispatch})=>{
    console.log(student)
    return fetch("http://localhost:4006/main/" + student.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllStudents())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const studentsSlice = createSlice({
    name:"students",
    initialState: allStudents,
    extraReducers:{
        [getAllStudents.pending]:(state,action)=>{},
        [getAllStudents.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.students = action.payload
        },
        [getAllStudents.rejected]:(state,action)=>{},
        
    },
});

export default studentsSlice.reducer