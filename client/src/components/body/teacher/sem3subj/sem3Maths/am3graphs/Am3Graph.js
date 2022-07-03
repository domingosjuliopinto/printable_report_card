import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsam3,dispatchStatssem3} from '../../../../../../redux/actions/statsAction'
import '../../../stats.css'

import ReactChart from './Chart'

function Am3Graph(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
            fetchsam3(token,subject).then(res=>{
            dispatch(dispatchStatssem3(res))
        })
    },[token,subject,dispatch])

    return(
        <div>
            <div className="esback">
                <form action="/viewgraphs" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <h1 align="center" style={{ color: 'white' }}>AM3</h1>
            <div>
                <ReactChart/>
            </div>
        </div>
    )
}

export default Am3Graph