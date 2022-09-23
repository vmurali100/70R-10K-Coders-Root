import { GET_WEATHER } from "./Constants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_KEY = "a27164abb9aad47b6fbc57981b5da95b";
export const GetWeatherDetails =
  (location = "") =>
  async (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${location}&units=${"Metric"}&lang=${"en"}`
      )
      .then((response) =>
        dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })
      )
       .catch(err => {
      console.log(err.response, err);
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });
      dispatch({ type: GET_WEATHER.REJECTED, payload: err.response });
    });
  };
  // export const GetWeatherDetails = createAsyncThunk("details/GetWeatherDetails", () => {
  //   return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${"location"}&units=${"Metric"}&lang=${"en"}`)
  //     .then((res) =>   dispatch({ type: GET_WEATHER.SUCCESS, payload: res.data }))
  //     .catch((err) => console.log(err));
  // });