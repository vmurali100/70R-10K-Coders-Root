import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GET_WEATHER = {
    PENDING: "GET_WEATHER_PENDING",
    SUCCESS: "GET_WEATHER_SUCCESS",
    REJECTED: "GET_WEATHER_REJECTED"
  };
  export const GetWeatherDetails = createAsyncThunk("details/GetWeatherDetails", () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${"a27164abb9aad47b6fbc57981b5da95b"}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });
  




  const WeatherInitialState = {
    loading: false,
    error: false,
    success: false,
    data: {}
  };
  
  export const WeatherReducer = (state = WeatherInitialState, action) => {
    const { type } = action;
    switch (type) {
      case GET_WEATHER.PENDING:
        return {
          ...state,
          loading: true
        };
      case GET_WEATHER.SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          data: action.payload
        };
      case GET_WEATHER.REJECTED:
        return {
          ...state,
          error: true
        };
      default:
        return state;
    }
  };
  