
import {registerToken} from "../../firebase";
import axios from 'axios';

async function init(user){
    if(user.notificationToken === null){
        let token = await registerToken()
        let id = user.id
        let headers = {
            Authorization : `Bearer ${user.token}`
    }
    let data ={token,id}
        axios.post('http://localhost:4000/users/setnotificationtoken',data,{headers} )
        .then( ({data}) => {
          console.log(data);
        }).catch(e=>console.log(e))
    }
}

export default{init}