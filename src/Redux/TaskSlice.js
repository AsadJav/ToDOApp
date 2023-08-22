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
      console.log("Hello")
      console.log(action, state);
      const updateData = action.payload;
      console.log(updateData.indexNo,"Bye");
      const indexNo = updateData.indexNo;
      state[indexNo] = updateData;
    },
    deleteTask: (state, action) => {
      console.log(action, state);
      const id = action.payload;
      const indexNo = state.findIndex(item => item.id === id);
      state.splice(indexNo, 1);
    },
  },
});
export const {addTask, updateTask, deleteTask} =
  TaskSlice.actions;

export default TaskSlice.reducer;

/*
import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
        //console(state,action);
    const user = action.payload;
      console.log("User",user, "State",state);
      state =  user;
      console.log("State",state);
    },

    deleteUser: (state, action) => {
        const id = action.payload.userID;
        console.log(id, 'Delete', state);
        //state = {};
        delete state[id];
        console.log(id, 'Deleted', state.undefined);  
    },
  },
});
export const {addUser,deleteUser} =
  UserSlice.actions;

export default UserSlice.reducer;
*/