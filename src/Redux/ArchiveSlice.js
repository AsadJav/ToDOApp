import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const ArchiveSlice = createSlice({
  name: 'completed',
  initialState,
  reducers: {
    addArchiveTask: (state, action) => {
      console.log(action, state);
      state.unshift(action.payload);
    },
    // updateTask: (state, action) => {
    //   console.log("Hello")
    //   console.log(action, state);
    //   const updateData = action.payload;
    //   console.log(updateData.indexNo,"Bye");
    //   const indexNo = updateData.indexNo;
    //   state[indexNo] = updateData;
    // },
    deleteArchiveTask: (state, action) => {
      console.log(action, state);
      const id = action.payload;
      const indexNo = state.findIndex(item => item.id === id);
      state.splice(indexNo, 1);
    },
  },
});
export const {addArchiveTask,deleteArchiveTask} =
  ArchiveSlice.actions;

export default ArchiveSlice.reducer;