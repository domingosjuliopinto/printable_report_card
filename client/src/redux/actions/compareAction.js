import ACTIONS from './index'
import axios from 'axios'

export const fetchcompare3 = async (token) => {
    if(token){
        const res = await axios.get('http://localhost:5000/studentall3', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchcompare4 = async (token) => {
    if(token){
        const res = await axios.get('http://localhost:5000/studentall4', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const dispatchCompare = (res) => {
    return {
        type: ACTIONS.GET_ALL_STUDENTS,
        payload: {
            compare: res
        }
    }
}