import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsminipro1,dispatchStatssem3} from '../../../../../../redux/actions/statsAction'
import '../../../stats.css'

import Chart from './Chart'

function Minipro1Graph(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
        return fetchsminipro1(token,subject).then(res=>{
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
            <h1 align="center" style={{ color: 'white' }}>Mini Project 1</h1>
            <div>
                <Chart/>
            </div>
        </div>
    )
}

export default Minipro1Graph