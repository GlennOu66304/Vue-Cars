import Vue from "vue";
import Vuex from "vuex";

// export getters, actions,mutation

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

// state is a objec
const state = {
  isAuthenticate: false,
  user: {},
  profile:null,
  loading:false,
  profiles:[]
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
