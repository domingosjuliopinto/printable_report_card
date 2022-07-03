import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsem3,dispatchGetsem3} from '../../../../../redux/actions/sem3marksAction'
import {fetchcompare3,dispatchCompare} from '../../../../../redux/actions/compareAction'
import '../../../teacher/stats.css'

import BarChart from './BarChart'

function Sem3Graph(){
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
        const StudentLogin=localStorage.getItem('StudentLogin')
            fetchsem3(token,StudentLogin).then(res=>{
            dispatch(dispatchGetsem3(res))
        })
    },[token,dispatch])

    useEffect(()=>{
            fetchcompare3(token).then(res=>{
            dispatch(dispatchCompare(res))
        })
    },[token,dispatch])

    return(
        <div>
            <div className="esback">
                <form action="/viewstgraphs" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <h1 align="center" style={{ color: 'white' }}>Semester III</h1>
            <div>
                <BarChart/>
            </div>
        </div>
    )
}

export default Sem3Graph