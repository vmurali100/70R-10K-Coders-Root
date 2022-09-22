import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allTodos = {
    todos: [],
};
export const getAllTodos = createAsyncThunk('todos/getAllTodos', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5008/todo/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createTodoAction = createAsyncThunk('todos/createTodos', (todo, { dispatch }) => {
    return fetch("http://localhost:5008/todo/", {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllTodos())
    })
})
export const deleteTodoAction = createAsyncThunk('todos/deleteTodos', (todo, { dispatch }) => {
    return fetch("http://localhost:5008/todo/" + todo.id, {
        method: 'DELETE',
        body: JSON.stringify(todo),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllTodos())
    })
})

export const updateTodoAction = createAsyncThunk('todos/updateTodos', (todo, { dispatch }) => {


    return fetch("http://localhost:5008/todo/" + todo.id, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllTodos())
    })
})


export const todosSlice = createSlice({
    name: "todos",
    initialState: allTodos,
    extraReducers: {
        [getAllTodos.pending]: (state, action) => {},
        [getAllTodos.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.todos = action.payload
        },
        [getAllTodos.rejected]: (state, action) => {}
    }

})
export default todosSlice.reducer