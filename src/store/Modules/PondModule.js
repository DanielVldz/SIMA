import axios from 'axios';
import router from "../../router/index";

/* eslint-disable */




const actions = {
    getPonds({commit,state,rootState}){
        console.log('in getPOnds',rootState)
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}/pond`,config )
            .then( ({data}) => {
                console.log('looking at pond data response',data)
              commit('setPonds',data)
              commit('setRequestMessage',data.mssg,{root:true})
            }).then(()=>{
                //router.push('/')
            })
        }
      },
      getPond({commit,state,rootState},id){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}/ponds/${id}`,config )
            .then( ({data}) => {
              commit('setPond',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      CreatePonds({commit,dispatch,state,rootState},recibido){
        console.log("entró",recibido)
        let pondId
        let data = recibido.pond
        if(rootState.userSession.token){
          data.userId = rootState.userSession.id
            axios.post(`${process.env.VUE_APP_API_ENDPOINT}/ponds/create`,data )
            .then( ({data}) => {
              console.log("entró despues del then")
              commit('setPond',data)
              pondId = data.id
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
              console.log("1")
                recibido.temp.pondId = pondId
                recibido.ph.pondId = pondId
                dispatch("SetParameters",recibido.temp)
                dispatch("SetParameters",recibido.ph)
                console.log("2")
                //router.push('/')
            })
        }
      },
      UpdatePond({commit,state,rootState},updatePond){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:updatePond}
            axios.put(`${process.env.VUE_APP_API_ENDPOINT}/ponds`,config )
            .then( ({data}) => {
              commit('setPonds',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      deletePond({commit,state,rootState},id){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/ponds/${id}`,config )
            .then( ({data}) => {

              commit('setPond',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                commit("setPonds",state.ponds.filter(item=>item.id!=id))
               // router.push('/')
            })
        }
      },
      getPondByUser({commit,state,rootState}){
        console.log('what is going on here')
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        }}
            axios.get(`${process.env.VUE_APP_API_ENDPOINT}/ponds/user/${rootState.userSession.id}`,config )
            .then( ({data}) => {
              console.log('are we in the ponds?')
              commit('setPonds',data)
              commit('setRequestMessage',data.mssg,{root:true})
            }).then(()=>{
                //router.push('/')
            })
        }
      },
      SetParameters({commit,rootState},parameters){
        console.log('parameters',rootState.userSession.token)
        let data ={ pondId:parameters.pondId,high:Number(parameters.high),low:Number(parameters.low),parameter:parameters.Parameter}
        if(rootState.userSession.token){
          let config = { headers: {
            Authorization : `Bearer ${rootState.userSession.token}`
          },data}
            axios.post(`${process.env.VUE_APP_API_ENDPOINT}/ponds/parameters`,data )
            .then( ({data}) => {
              console.log("entró despues del then",data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
               router.push('/')
            })
        }
      },
}

const getters = {
    pondsGetter: state => state.ponds,
    pondGetter: state => state.pond,
}



const mutations = {
    setPonds(state,payload){
        return state.ponds = payload
     },
     setPond(state,payload){
         return state.pond = payload
     }
}


export default {
    state: () => ({
        ponds:{},
        pond:{},
    }),
    mutations,
    actions,
    getters
  }









