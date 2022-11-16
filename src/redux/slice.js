import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState:[
        {id: 1, title: 'todo1'},
        {id: 2, title: 'todo2'},
        {id: 5, title: 'todo5'},
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
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    },
});

export const {ADD, DELETE} = todoSlice.actions;
export default todoSlice.reducer;