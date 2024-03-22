import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //Why do we need this --> If we uant modify the store the store also has reducer it self, Bellow this reducer object is responsible for modify the app store, and this reducer is a combination of different small stores , for each slice there is different reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
