import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action, state);
      const user = action.payload;
      console.log("User",user, "State",state);
      //state.unshift(action.payload);
      state =  user;
      console.log("State",state.email);
    },
    // addUser: (state, action) => {
    //   console(action);
    //   const user = action.payload;
    //   console.log("User",user, "State",state);
    //   state =  user;
    //   console.log("State",state);
    // },
    // deleteUser: (state, action) => {
    //     const id = action.payload.userID;
    //     console.log(id, 'Delete', state);
    //     //state = {};
    //     delete state[id];
    //     console.log(id, 'Deleted', state.undefined);  
    // },
  },
});
export const {addUser} =
  PersonSlice.actions;

export default PersonSlice.reducer;
