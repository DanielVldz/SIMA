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
            axios.get('http://localhost:4000/ponds',config )
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
            axios.get(`http://localhost:4000/ponds/${id}`,config )
            .then( ({data}) => {
              commit('setPond',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      CreatePonds({commit,state,rootState},createPond){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:createPond}
            axios.post('http://localhost:4000/ponds',config )
            .then( ({data}) => {
              commit('setPonds',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      UpdatePond({commit,state,rootState},updatePond){
        if(rootState.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${rootState.userSession.token}`
        },data:updatePond}
            axios.put('http://localhost:4000/ponds',config )
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
            axios.delete(`http://localhost:4000/ponds/${id}`,config )
            .then( ({data}) => {
              commit('setPond',data)
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









