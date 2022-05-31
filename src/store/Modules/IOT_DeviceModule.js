import axios from 'axios';
import router from "../../router/index";

/* eslint-disable */




const actions = {
    getIOT_Devices({commit,state,rootState}){
        console.log('in getIOT_Devices',rootState)
        if(rootState.userSession.token){
            console.log
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}iot_device`,config )
            .then( ({data}) => {
                console.log('looking at IOT_Device data response',data)
              commit('setIOT_Devices',data)
              commit('setRequestMessage',data.mssg,{root:true})
            }).then(()=>{
                //router.push('/')
            })
        }
      },
      getIOT_Device({commit,state,rootState},id){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}/iot_device/${id}`,config )
            .then( ({data}) => {
              commit('setIOT_Device',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      CreateIOT_Devices({commit,state,rootState},createIOT_Device){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:createIOT_Device}
            axios.post(`${process.env.VUE_APP_API_ENDPOINT}/iot_device`,config )
            .then( ({data}) => {
              commit('setIOT_Devices',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      UpdateIOT_Device({commit,state,rootState},updateIOT_Device){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:updateIOT_Device}
            axios.put(`${process.env.VUE_APP_API_ENDPOINT}/iot_device`,config )
            .then( ({data}) => {
              commit('setIOT_Devices',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      deleteIOT_Device({commit,state,rootState},id){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/iot_device/${id}`,config )
            .then( ({data}) => {
              commit('setIOT_Device',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
}

const getters = {
    IOT_DevicesGetter: state => state.IOT_Devices,
    IOT_DeviceGetter: state => state.IOT_Device,
}



const mutations = {
    setIOT_Devices(state,payload){
        return state.IOT_Devices = payload
     },
     setIOT_Device(state,payload){
         return state.IOT_Device = payload
     }
}


export default {
    state: () => ({
        IOT_Devices:{},
        IOT_Device:{},
    }),
    mutations,
    actions,
    getters
  }









