import ACTIONS from './index'
import axios from 'axios'

//For Teacher's Side
export const dispatchStatssem3 = (res) => {
    return {
        type: ACTIONS.GET_SEM3,
        payload: {
            sem3: res
        }
    }
}

export const dispatchStatssem4 = (res) => {
    return {
        type: ACTIONS.GET_SEM4,
        payload: {
            sem4: res
        }
    }
}

//for sem3 cmpn subjects
export const fetchsam3 = async (token,subject) => {
    if(subject==='Maths'){
        const res = await axios.get('http://localhost:5000/am3stats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsdsgt = async (token,subject) => {
    if(subject==='Maths'){
        const res = await axios.get('http://localhost:5000/dsgtstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsds = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/dsstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchscg = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/cgstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsdlcoa = async (token,subject) => {
    if(subject==='Hardware'){
        const res = await axios.get('http://localhost:5000/dlcoastats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsoop = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/oopstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsminipro1 = async (token,subject) => {
    if(subject==='Projects'){
        const res = await axios.get('http://localhost:5000/minipro1stats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

//for sem4 cmpn subjects
export const fetchsam4 = async (token,subject) => {
    if(subject==='Maths'){
        const res = await axios.get('http://localhost:5000/am4stats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsmicrop = async (token,subject) => {
    if(subject==='Hardware'){
        const res = await axios.get('http://localhost:5000/micropstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsos = async (token,subject) => {
    if(subject==='Hardware'){
        const res = await axios.get('http://localhost:5000/osstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsaoa = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/aoastats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsdbms = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/dbmsstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchsminipro2 = async (token,subject) => {
    if(subject==='Projects'){
        const res = await axios.get('http://localhost:5000/minipro2stats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}

export const fetchspp = async (token,subject) => {
    if(subject==='Software'){
        const res = await axios.get('http://localhost:5000/ppstats', {
            headers: {Authorization: token}
        })
        return res.data
    }
}