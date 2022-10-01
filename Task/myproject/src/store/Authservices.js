import axios from 'axios';
import {
    loginUser,
    signupUser,
} from '../store/userSlice';

export function signupUser(email, password) {
    //axios call

    const postData = {
        email,
        name,
        password,
        confirmPassword,
        phone,
        returnSecureToken: true,
    };

    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}

export function login(email, password) {
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };

    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}



export function saveTokenInLocalStorage(tokenDetails) {
  
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}




   
