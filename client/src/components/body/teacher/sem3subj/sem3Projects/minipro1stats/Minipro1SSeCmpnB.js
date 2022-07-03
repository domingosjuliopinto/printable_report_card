import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsminipro1,dispatchStatssem3} from '../../../../../../redux/actions/statsAction'
import '../../../stats.css'

import TopPass from './TopPass'
import Flex from './Flex'

function Minipro1SSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
            fetchsminipro1(token,subject).then(res=>{
            dispatch(dispatchStatssem3(res))
        })
    },[token,subject,dispatch])

    return(
        <div>
            <div className="esback">
                <form action="/minipro1stats" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <h1 align="center" style={{ color: 'white' }}>Mini Project 1 SE CMPN B</h1>
            <div>
                <TopPass/>
                <Flex/>
            </div>
        </div>
    )
}

export default Minipro1SSeCmpnB