
import axios from 'axios';
export default {
    errHandler(){

    },
    login(email,passwd){
        return axios.post('/api/login', {
            email: email,
            passwd: passwd
        })
    }
}