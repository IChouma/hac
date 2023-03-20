import { createSlice } from '@reduxjs/toolkit';



export const counterReducer = createSlice({
  name: 'counter',
  initialState : {
  value: 1,
  status: 'idle',
},
  reducers: {
    increment: (state,action) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  
});

export const { increment, decrement, incrementByAmount,initialState,status } = counterReducer.actions;
export const selectCount = (state) => state.counter.value;

export default counterReducer.reducer;
