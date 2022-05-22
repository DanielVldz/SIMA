import axios from 'axios';
import router from "../router/index";


const actions = {
    logIn({commit,state}){
        console.log('user',state.userForm)
        axios.post('http://localhost:4000/users/authenticate', state.userForm)
        .then( ({data}) => {
          console.log(data);
          commit('logIn',data)
          commit("isLoggedIn")
        }).then(()=>{
            router.push('/pond')
        })
      }
}

export default actions