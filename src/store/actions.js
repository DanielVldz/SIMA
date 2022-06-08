import axios from 'axios';
import router from "../router/index";

const actions = {
    logIn({commit,state}){
        console.log('user',`${process.env.VUE_APP_API_ENDPOINT}/users/authenticate`)
        axios.post(`${process.env.VUE_APP_API_ENDPOINT}/users/authenticate`, state.userForm)
        .then( ({data}) => {
          commit('logIn',data)
          commit("isLoggedIn")
        }).then(()=>{
          window.location="/"
        })
      },
      logOut({commit}){
        commit("logOut")
        router.push('/login').catch(()=>{})
      },
      getUsersAct({commit,state}){
        let config = { headers: {
          Authorization : `Bearer ${state.userSession.token}`
      }}
        console.log('user',`${process.env.VUE_APP_API_ENDPOINT}/users/authenticate`)
        axios.get(`${process.env.VUE_APP_API_ENDPOINT}/users`, config)
        .then( ({data}) => {
          commit('setUsers',data)
        }).then(()=>{
        })
      },
      CreateUsers({commit,state},createUser){
        if(state.userSession.token){
          let data = createUser;
            axios.post(`${process.env.VUE_APP_API_ENDPOINT}/users/authenticateSingup`,data )
            .then( ({data}) => {
              console.log("entró despues del then")
              commit('setUsers',data)
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/')
            })
        }
      },
      deleteUser({commit,state},id){
        if(state.userSession.token){
            let config = { headers: {
                Authorization : `Bearer ${state.userSession.token}`
        }}
            axios.delete(`${process.env.VUE_APP_API_ENDPOINT}/users/delete/${id}`,config )
            .then( ({data}) => {
              commit('setRequestMessage',data.mssg,{root:true})

            }).then(()=>{
                router.push('/user')
            })
        }
      },
      getValuesByPond({commit},id){
        commit("startLoading")
        console.log('user',`${process.env.VUE_APP_API_ENDPOINT}/iot_values/${id}`)
        axios.get(`${process.env.VUE_APP_API_ENDPOINT}/iot_values/${id}`)
        .then( ({data}) => {
          console.log('get values',data)
          commit('setValues',data)
          commit("stopLoading")
        }).catch(()=>{
          commit('setValues',[])
          commit("stopLoading")
        })
      },
      setConfigUser({commit},id){
        commit('setUser',id)
      }
}

export default actions


