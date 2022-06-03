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
      }
}

export default actions