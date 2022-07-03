import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsam4,dispatchStatssem4} from '../../../../../../redux/actions/statsAction'
import '../../../stats.css'

import TopPass from './TopPass'
import Flex from './Flex'

function Am4SSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
            fetchsam4(token,subject).then(res=>{
            dispatch(dispatchStatssem4(res))
        })
    },[token,subject,dispatch])

    return(
        <div>
            <div className="esback">
                <form action="/am4stats" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <h1 align="center" style={{ color: 'white' }}>AM4 SE CMPN B</h1>
            <div>
                <TopPass/>
                <Flex/>
            </div>
        </div>
    )
}

export default Am4SSeCmpnB