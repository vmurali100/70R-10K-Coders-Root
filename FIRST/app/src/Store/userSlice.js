import { createAsyncThunk } from "@reduxjs/toolkit";

const baseurl= "https://e-prathibha.com/apis"

export const userLogin = createAsyncThunk('user/login', async (loginDetails, { dispatch }) => {
    try {
        const response = await fetch(`${baseurl}/login`, {
            method: "POST",
            body: JSON.stringify(loginDetails),
            headers: {
                "Content-type": "application/json"
            }
        }, loginDetails);

        const result = await response.json();
        console.log(result)
        console.log(result.data)
        localStorage.setItem("Token",result.data.Token)
        localStorage.setItem("Id",result.data.Id)
        const pay = result.data
        dispatch({type: "ADD_LOGIN_DATA", payload: {pay}})
        return result;          
        }        
        catch {
        console.log("error")
    }
})


export const userRegister = createAsyncThunk('user/register', async (signupDetails, { dispatch }) => {
    console.log(signupDetails)
    try {
        const response = await fetch("https://e-prathibha.com/apis/register", {
            method: "POST",
            body: JSON.stringify(signupDetails),
            headers: {
                "Content-type": "application/json"
            }
        }, signupDetails);

        const result = await response.json();
        console.log(result)
        console.log(result.data)
        return result; 
        }    catch {
        console.log("error")
    }
})

export const userVerify = createAsyncThunk('user/verify', async (verifycode, { dispatch }) => {
    // console.log(signupDetails)
    try {
        const response = await fetch("https://e-prathibha.com/apis/verifyEmail",{
            method: "POST",
            body: JSON.stringify(verifycode),
            headers: {
                "Content-type": "application/json"
            }
        }, verifycode);

        const result = await response.json();
        console.log(result)
        console.log(result.data)
        return result;
        }    catch {
        console.log("error")
    }
})

export const userfreeexam = createAsyncThunk('user/exam', async (freeexam, { dispatch }) => { 
    const Token= localStorage.getItem("Token")
    const Id= localStorage.getItem("Id")
    console.log("freeexam", freeexam)
    try {
        const response = await fetch("https://e-prathibha.com/apis/test_free_exam", {
            method: "POST",
            headers: {                
                tokenu: Token,
                Id : Id,
                server_key: "3w99V63pW7tJ7vavGXtCKo8cp"
            }
        }, freeexam);
      
        const result = await response.json();
        console.log(result)
        localStorage.setItem("examslist",JSON.stringify(result.data.exams))
        const pay = result.data
        if(result.status===200){   
        dispatch({type: "GET_FREE_EXAMS", payload: {pay}})         
        }
        return result; 
        }   
        catch {
            console.log("error")
        } 
        
    }
)

export const userpremiumexam = createAsyncThunk('user/exam', async (premiumexam, { dispatch }) => {
    const Token= localStorage.getItem("Token")
    const Id= localStorage.getItem("Id")
    try {
        const response = await fetch("https://e-prathibha.com/apis/premium_exam",{
            method: "POST",           
            headers: {                
                tokenu: Token,
                Id : Id,
                server_key: "3w99V63pW7tJ7vavGXtCKo8cp"
            }
        }, premiumexam);
       
        const result = await response.json();
        console.log(result)
        localStorage.setItem("premiumlist",JSON.stringify(result.data.exams))
        const pay = result.data
        if(result.status===200){   
        dispatch({type: "GET_PREMIUM_EXAMS", payload: {pay}})         
        }
        return result; 
        }  
        catch {
            console.log("error")
        } 
        
    }
)

export const displayquestions = createAsyncThunk('user/exam', async (ID, { dispatch }) => {
    const Token= localStorage.getItem("Token")
    const Id= localStorage.getItem("Id")
    console.log(ID)
    try {
        const response = await fetch(`https://e-prathibha.com/apis/start_exam?examId=${ID}`,{
            method: "POST",           
            headers: {                
                tokenu: Token,
                Id : Id,
                server_key: "3w99V63pW7tJ7vavGXtCKo8cp"
            }
        }, []);
       
        const result = await response.json();
        console.log(result)
        if(result.status===200){
            localStorage.setItem("freeexamquestions",JSON.stringify(result.data))

        }
        return result;
        // localStorage.setItem("premiumlist",JSON.stringify(result.data.exams))
        // const pay = result.data
        // if(result.status===200){   
        // dispatch({type: "GET_PREMIUM_EXAMS", payload: {pay}})         
        // }
        // return result; 
            }  
        catch {
            console.log("error")
        } 
        
    }
)