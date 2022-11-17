import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk('todos/getTodoAsync', async () => {
    const response = await fetch('http://localhost:5001/todos');
    if (response.ok) {
        const todos = await response.json();
        // console.log(todos)
        return { todos }
    }
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
    const response = await (fetch('http://localhost:5001/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: payload.title }),
    }));
    if (response.ok) {
        const todo = await response.json();
        return { todo };
    }
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync', async (payload) => {
    const response = await (fetch(`http://localhost:5001/todos/${payload.id}`, {
        method: 'DELETE',

    }));
    if (response.ok) {
        return { id: payload.id };
    }
});


const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'ytgy' }

    ],
    reducers: {
        ADD: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
            };
            state.push(newTodo);
        },
        DELETE: (state, action) => {
            return state.filter((todo) => todo && todo.id !== action.payload.id)
            // state.pop(afterDelete);
        }
    },
    extraReducers: {
        [getTodosAsync.pending]: (state, action) => {
            console.log('fetching data..');
        },

        [getTodosAsync.fulfilled]: (state, action) => {
            console.log('fetched data successfully..');
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            return state.filter((todo) => todo && todo.id !== action.payload.id)
        },
    }
});

export const { ADD, DELETE } = todoSlice.actions;
export default todoSlice.reducer;