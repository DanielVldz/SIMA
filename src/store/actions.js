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
        router.push('/login')
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
}

export default actions