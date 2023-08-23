import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const UserSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
      addUser: (state, action) => {
        console.log(action, state);
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.password = action.payload.password;
        console.log("State Is: ",state)
      },
      deleteUser: (state, action) => {
        console.log(action, state);
      },
    },
  });
  export const {addUser,deleteUser} =
    UserSlice.actions;
  
  export default UserSlice.reducer;