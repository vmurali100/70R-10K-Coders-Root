import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk('user/login', async (loginDetails, { dispatch }) => {
    try {
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
            console.log(result.data)
            return result.data
        }
    }
    catch {
        console.log("error")
    }
})

export const userRegistration = createAsyncThunk('user/register', async (userDetails) => {
    try {
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
        return result
        
    }
    catch {
        console.log('error')
    }
})

export const verifyUser = createAsyncThunk('user/verifyUser', async (code) => {
    try {
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
    }
    catch {
        console.log("error")
    }
})

export const getexamList = createAsyncThunk('user/getexamlist', async (examData, { dispatch }) => {
    let id = examData.id
    let tokenu = examData.tokenu
    let server_key = examData.server_key
    try {
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
        if (result.status == "200") {
            localStorage.setItem("exams", JSON.stringify(result.data.exams))
            const pay = result.data.exams
            dispatch({ type: "ADD_EXAM_DATA", payload: { pay } })
            console.log(result.status)
            return result
        } else {
            console.log(result.data)
            return result
        }
    }
    catch {
        console.log("error")
    }
})

export const getQuestionsListForID = createAsyncThunk('user/getquestions', async (myData, { dispatch }) => {
    const { questionsData, ID } = myData //Destructuring the args passed as myData variable
    let id = questionsData.id
    let tokenu = questionsData.tokenu
    let server_key = questionsData.server_key
    try {
        const response = await fetch("https://e-prathibha.com/apis/start_exam?examId=" + ID, {
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
        if (result.status == 200) {
            localStorage.setItem("questionsforid", JSON.stringify(result.data.exam))
            const pay = result.data.exam
            dispatch({ type: "ADD_QUESTIONS_DATA", payload: { pay } })
            console.log(result.status)
        } else {
            console.log("Bye")
        }
    }
    catch {
        console.log("error")
    }
})





