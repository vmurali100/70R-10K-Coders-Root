import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


const allTodos={
    todos:[],
}

export const getAllTodos = createAsyncThunk('todos/getTodos',()=>{
    return fetch('http://localhost:3209/Todos').then((res)=> res.json()).catch((err)=> console.log(err))
})

export const createTodo = createAsyncThunk('todos/createTodo',(todo,{dispatch})=>{
    return fetch('http://localhost:3209/Todos',{
        method:"POST",
        body:JSON.stringify(todo),
        headers:{
          'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json'
      }
    }).then((res)=>
   dispatch(getAllTodos()) )
})

export const updateTodo= createAsyncThunk('todos/updateTodo',(todo,{dispatch})=>{
    return fetch('http://localhost:3209/Todos/'+todo.id,{
        method:"PUT",
        body:JSON.stringify(todo),
        headers:{
          'Accept':'application/json, text/plain, */*',
          'Content-Type':'application/json'
      }
    }).then((res)=>
   dispatch(getAllTodos()) )
  
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo',(todo,{dispatch})=>{
    return fetch('http://localhost:3209/Todos/'+todo.id,{
        method:"DELETE"
    }).then((res)=>
    dispatch(getAllTodos()))
})

export const TodoSlice = createSlice({
    name:"todos",
    initialState:allTodos,
    extraReducers:{
        [getAllTodos.fulfilled]:(state,action)=>{
                state.todos = action.payload;
                console.log(action)
        }

    }

})

export default TodoSlice.reducer