import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action, state);
      state.unshift(action.payload);
    },
    updateTask: (state, action) => {
      const updateData = action.payload;
      const indexNo = updateData.indexNo;
      state[indexNo] = updateData;
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const indexNo = state.findIndex(item => item.id === id);
      state.splice(indexNo, 1);
    },
  },
});
export const {addTask, updateTask, deleteTask} =
  TaskSlice.actions;

export default TaskSlice.reducer;