/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
import user from "./module/user";

// Create a new store instance.
const store = createStore({
  modules: {
    user,
  },
});

export default store;
