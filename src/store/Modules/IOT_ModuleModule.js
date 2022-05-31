import axios from 'axios';
import router from "../../router/index";

/* eslint-disable */




const actions = {
    getIOT_Modules({commit,state,rootState}){
        console.log('in getIOT_Modules',rootState)
        if(rootState.userSession.token){
            console.log
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}/iot_module`,config )
            .then( ({data}) => {
                console.log('looking at IOT_Module data response',data)
              commit('setIOT_Modules',data)
              commit('setRequestMessage',data.mssg,{root:true})
            }).then(()=>{
                //router.push('/')
            })
        }
      },
      getIOT_Module({commit,state,rootState},id){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}/iot_module/${id}`,config )
            .then( ({data}) => {
              commit('setIOT_Module',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      CreateIOT_Modules({commit,state,rootState},createIOT_Module){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:createIOT_Module}
            axios.post(`${process.env.VUE_APP_API_ENDPOINT}/iot_module`,config )
            .then( ({data}) => {
              commit('setIOT_Modules',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      UpdateIOT_Module({commit,state,rootState},updateIOT_Module){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:updateIOT_Module}
            axios.put(`${process.env.VUE_APP_API_ENDPOINT}/iot_module`,config )
            .then( ({data}) => {
              commit('setIOT_Modules',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      deleteIOT_Module({commit,state,rootState},id){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/iot_module/${id}`,config )
            .then( ({data}) => {
              commit('setIOT_Module',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
}

const getters = {
    IOT_ModulesGetter: state => state.IOT_Modules,
    IOT_ModuleGetter: state => state.IOT_Module,
}



const mutations = {
    setIOT_Modules(state,payload){
        return state.IOT_Modules = payload
     },
     setIOT_Module(state,payload){
         return state.IOT_Module = payload
     }
}


export default {
    state: () => ({
        IOT_Modules:{},
        IOT_Module:{},
    }),
    mutations,
    actions,
    getters
  }









