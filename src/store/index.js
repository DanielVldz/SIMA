import Vue from 'vue'
import Vuex from 'vuex'


import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import pond from "./Modules/PondModule";
import iotModule from "./Modules/IOT_ModuleModule";
import iotDevice from "./Modules/IOT_DeviceModule";


Vue.use(Vuex)

 const store = new Vuex.Store({
  modules:{pond,iotModule,iotDevice},
  state: {
    isLoggedIn:false,
    userForm:{username:"",password:""},
    userSession:{},
    requestMessage:"",
    users: []
  },
  getters,
  mutations,
  actions
})


export default store;




