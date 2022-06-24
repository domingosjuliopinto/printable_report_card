import ACTIONS from './index'
import axios from 'axios'

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}

export const fetchUser = async (token,StudentLogin) => {
    if(StudentLogin){
        const res = await axios.get('http://localhost:5000/stinfo', {
            headers: {Authorization: token}
        })
        return res
    }
    else{
        const res = await axios.get('http://localhost:5000/info', {
            headers: {Authorization: token}
        })
        return res
    }
}

export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data
           //, isAdmin: res.data.role === 1 ? true : false
        }
    }
}