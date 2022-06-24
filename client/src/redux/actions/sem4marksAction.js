import ACTIONS from './index'
import axios from 'axios'

//For Student's side
export const fetchsem4 = async (token,StudentLogin) => {
    if(StudentLogin){
        const res = await axios.get('http://localhost:5000/sem4show', {
            headers: {Authorization: token}
        })
        return res
    }
}

export const dispatchGetsem4 = (res) => {
    return {
        type: ACTIONS.GET_SEM4,
        payload: {
            sem4: res.data
        }
    }
}

//For Teacher's Side
export const dispatchMarkssem4 = (res) => {
    return {
        type: ACTIONS.GET_SEM4,
        payload: {
            sem4: res
        }
    }
}

//for sem4 cmpn subjects
export const fetcham4 = async (token,subject) => {
    if(subject==='Maths'){
        const res = await axios.get('http://localhost:5000/am4all', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchdbms = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/dbmsall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchaoa = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/aoaall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchos = async (token,subject) => {
    if(subject==='Hardware'){
        const res = await axios.get('http://localhost:5000/osall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchmicrop = async (token,subject) => {
    if(subject==='Hardware'){
        const res = await axios.get('http://localhost:5000/micropall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchpp = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/ppall', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchminipro2 = async (token,subject) => {
    if(subject==='Projects'){
        const res = await axios.get('http://localhost:5000/minipro2all', {
            headers: {Authorization: token}
        })
        return res.data
    }
}