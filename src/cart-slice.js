
import { createSlice } from '@reduxjs/toolkit';


export const cartReducer = createSlice({
  name: 'cart',
  initialState : {
  value: "",
  status: 'idle',
},
  reducers: {
    cart: (state,action) => {
      state.value= action.payload;
    },
  },
    
  
}
);

export const {initialState,cart } = cartReducer.actions;
export const selectCart = (state) => state.cart.value;

export default cartReducer.reducer;
