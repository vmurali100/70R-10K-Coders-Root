import { createSlice } from "@reduxjs/toolkit";


const allUsers = {
    users: []
}
export const userSlice = createSlice({
    name: "users",
    intialState: allUsers
})
export default userSlice.reducer