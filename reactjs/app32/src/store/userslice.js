import { createSlice } from "@reduxjs/toolkit";

const allusers = {
    users: [],
}

export const userslice = createSlice({
    name: "users",
    initialstate: allusers,
  
})

export default userslice.reducer