import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //reducer is a object that has different types of action inside it
  reducers: {
    // Here addItem is a dispatch Action --> Inside the addItem there is reducer function, Which will Modify the cart,
    addItem: (state, action) => {
      // mutating the state over here, that means --> we are directly modifying the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      // state.items.splice(state.items.indexOf(action.payload), 1);
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

//after that we will export two things from here (action, reducers)

//action
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//reducers
export default cartSlice.reducer;
