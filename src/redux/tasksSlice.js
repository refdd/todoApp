import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { todos: [], archive: [] },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
      };
      state.todos.push(newTask);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const taskIndex = state.todos.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.todos[taskIndex].name = name;
      }
    },
    archiveTask: (state, action) => {
      const { id } = action.payload;
      const taskIndex = state.todos.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        const archivedTask = state.todos.splice(taskIndex, 1)[0];
        state.archive.push(archivedTask);
      }
    },
  },
});

export const { addTask, deleteTask, editTask, archiveTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
