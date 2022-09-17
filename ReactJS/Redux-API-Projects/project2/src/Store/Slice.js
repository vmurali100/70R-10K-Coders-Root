import { createSlice } from '@reduxjs/toolkit'



const allUsers = {
    user: []
}
export const Slice = createSlice({
    name: "user",
    initialState: allUsers
})

export default Slice.reducer