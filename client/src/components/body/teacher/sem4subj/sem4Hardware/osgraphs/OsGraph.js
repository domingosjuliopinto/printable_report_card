import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsos,dispatchStatssem4} from '../../../../../../redux/actions/statsAction'
import '../../../stats.css'

import ReactChart from './Chart'

function OsGraph(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
            fetchsos(token,subject).then(res=>{
            dispatch(dispatchStatssem4(res))
        })
    },[token,subject,dispatch])

    return(
        <div>
            <div className="esback">
                <form action="/viewgraphs" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <h1 align="center" style={{ color: 'white' }}>OS</h1>
            <div>
                <ReactChart/>
            </div>
        </div>
    )
}

export default OsGraph