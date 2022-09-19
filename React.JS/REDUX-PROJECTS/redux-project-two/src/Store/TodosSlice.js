import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const allTodos = {
    todos : []
}



export const getallTodos = createAsyncThunk('todos/getallTodos',()=>{
    return fetch("http://localhost:3000/todos")
    .then((respone) => respone.json())
    .catch((err) => console.log(err))
});



export const createTodoAction = createAsyncThunk('todos/createTodo',(todo,{dispatch})=>{
    return fetch("http://localhost:3000/todos",{
        method:"POST",
        body: JSON.stringify(todo),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },todo)
    .then(()=>{
        dispatch(getallTodos());
    })
})

export const deleteTodoAction = createAsyncThunk('users/deleteUser',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/todos/"+objUrl.id,{method : "DELETE"}).then((res)=> {
    dispatch(getallTodos()) 
    return res.json()}
    )
     .catch((err) => console.log(err))
   
});

export const updateTodoAction = createAsyncThunk('todos/update',(item,{dispatch})=>{
    return fetch("http://localhost:3000/todos/"+ item.id,{
        method:"PUT",
        body: JSON.stringify(item),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },item).then(()=>{
        dispatch(getallTodos())
    })
})

    




export const todosSlice = createSlice({
    name : "todos",
    initialState : allTodos,
    extraReducers : {
        [getallTodos.pending] : (state,action) => {},
        [getallTodos.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.todos = action.payload
        },
        [getallTodos.rejected] : (state,action) => {} 
    }
})


export default todosSlice.reducer;