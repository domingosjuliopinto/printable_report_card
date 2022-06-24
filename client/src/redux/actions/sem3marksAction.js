import ACTIONS from './index'
import axios from 'axios'

//For Student's side
export const fetchsem3 = async (token,StudentLogin) => {
    if(StudentLogin){
        const res = await axios.get('http://localhost:5000/sem3show', {
            headers: {Authorization: token}
        })
        return res
    }
}

export const dispatchGetsem3 = (res) => {
    return {
        type: ACTIONS.GET_SEM3,
        payload: {
            sem3: res.data
        }
    }
}

//For Teacher's Side
export const dispatchMarkssem3 = (res) => {
    return {
        type: ACTIONS.GET_SEM3,
        payload: {
            sem3: res
        }
    }
}

//for sem3 cmpn subjects
export const fetcham3 = async (token,subject) => {
    if(subject==='Maths'){
        const res = await axios.get('http://localhost:5000/am3all', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchdsgt = async (token,subject) => {
    if(subject==='Maths'){
        const res = await axios.get('http://localhost:5000/dsgtall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchcg = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/cgall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchds = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/dsall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchoop = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/oopall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchdlcoa = async (token,subject) => {
    if(subject==='Hardware'){
        const res = await axios.get('http://localhost:5000/dlcoaall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchminipro1 = async (token,subject) => {
    if(subject==='Projects'){
        const res = await axios.get('http://localhost:5000/minipro1all', {
            headers: {Authorization: token}
        })
        return res.data
    }
}