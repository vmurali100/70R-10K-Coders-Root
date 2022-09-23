import {configureStore} from "@reduxjs/toolkit"
import WeatherReducer from "./usersSlice"
const WeatherStore = configureStore({
    reducer:{
WeatherReducer,
    }
})
export default WeatherStore;