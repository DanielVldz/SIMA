import Vue from 'vue'
import Vuex from 'vuex'


import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import pond from "./Modules/PondModule";

Vue.use(Vuex)

 const store = new Vuex.Store({
  modules:{pond},
  state: {
    isLoggedIn:false,
    userForm:{username:"",password:""},
    userSession:{},
    requestMessage:""
  },
  getters,
  mutations,
  actions
})


export default store;




