import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExamData, addLoginData, addQuestionsData } from "../reducer";




const initialState = {
    data: [],
    exams: [],
    questions: []
}

export const userLogin = createAsyncThunk('user/login', async (loginDetails, { dispatch }) => {

    const response = await fetch("https://e-prathibha.com/apis/login", {
        method: "POST",
        body: JSON.stringify(loginDetails),
        headers: {
            "Content-type": "application/json"
        }
    }, loginDetails);

    const result = await response.json();

    console.log(result)

    console.log(result.data)

    if (result.status == "200") {
        localStorage.setItem("userData", JSON.stringify(result.data))
        const pay = result.data
        dispatch({ type: "ADD_LOGIN_DATA", payload: { pay } })
        console.log(result.status)
        return result.status

    }
    else {
        console.log("bye")

    }
})




export const userRegistration = createAsyncThunk('user/register', async (userDetails) => {
    const response = await fetch("https://e-prathibha.com/apis/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userDetails)
    }, userDetails)

    console.log(userDetails)

    const result = await response.json()

    console.log(result)
})

export const verifyUser = createAsyncThunk('user/verifyUser', async (code) => {
    const response = await fetch(" https://e-prathibha.com/apis/verifyEmail", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(code)
    }, code)

    const result = await response.json()

    console.log(result)

    return result

})

export const getexamList = createAsyncThunk('user/getexamlist', async (examData, { dispatch }) => {
    let id = examData.id
    let tokenu = examData.tokenu
    let server_key = examData.server_key
    const response = await fetch("https://e-prathibha.com/apis/test_free_exam", {
        method: "POST",
        headers: {
            "id": id,
            "tokenu": tokenu,
            "server_key": server_key
        }
    })

    const result = await response.json()
    console.log(result.status)
    console.log(result.data.exams)

    if(result.status == "200"){
        localStorage.setItem("exams", JSON.stringify(result.data.exams))
        const pay = result.data.exams
        dispatch({ type: "ADD_EXAM_DATA", payload: { pay } })
        console.log(result.status)
        return result.status

    }

    else{
        console.log("Bye")
    }
    // localStorage.setItem("exams", JSON.stringify(result.data.exams))
    // dispatch(addExamData(result.data.exams))
    // return result
})

export const getQuestionsList = createAsyncThunk('user/getquestions', async (questionsData, { dispatch }) => {
    let id = questionsData.id
    let tokenu = questionsData.tokenu
    let server_key = questionsData.server_key
    const response = await fetch(" https://e-prathibha.com/apis/start_exam?examId=24", {
        method: "GET",
        headers: {
            "id": id,
            "tokenu": tokenu,
            "server_key": server_key,
            "Content-type": "application/json"
        }
    })

    const result = await response.json()
    console.log(result)
    console.log(result.data.exam)

    if(result.status == 200){
        localStorage.setItem("questions", JSON.stringify(result.data.exam))
        const pay = result.data.exam
        dispatch({ type: "ADD_QUESTIONS_DATA", payload: { pay } })
        console.log(result.status)
        return result.time

    }

    else{
        console.log("Bye")
    }
    // dispatch(addQuestionsData(result.data.exam))
    // localStorage.setItem("questions", JSON.stringify(result.data.exam))
})



export const endExam = createAsyncThunk('user/endexam', async (end) => {
    let iid = JSON.parse(localStorage.getItem("userData.Id"))
    console.log(iid)
    let tokenuu = JSON.parse(localStorage.getItem("userData.Token"))
    let server_keyy = "3w99V63pW7tJ7vavGXtCKo8cp"

    const response = await fetch("https://e-prathibha.com/apis/finishExam", {
        method: "POST",
        headers: {
            "id": "3348",
            "tokenu": "k2CMWvi0tb3gI1O7tLAe",
            "server_key": "3w99V63pW7tJ7vavGXtCKo8cp"


        },
        body: JSON.stringify(end)
    }, end)

    const result = await response.json()
    console.log(result)
})

export const userSlice = createSlice({

    name: "user",
    initialState,
    //     reducers: {


    //     //     addLoginData: (state = initialState, action) => {
    //     //         console.log(action.payload)
    //     //         state.data = action.payload
    //     //         console.log(state.data)



    //     //     },

    //     //     addExamList: (state = initialState, action) => {
    //     //         state.exams = action.payload
    //     //         console.log(state.exams)
    //     //     },

    //     //     addQuestionsList: (state = initialState, action) => {
    //     //         state.questions = action.payload
    //     //     },
    //     // },





})



// export const { addLoginData, addExamList, addQuestionsList } = userSlice.actions;
export default userSlice.reducer