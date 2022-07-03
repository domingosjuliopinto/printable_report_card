import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsem4,dispatchGetsem4} from '../../../../../redux/actions/sem4marksAction'
import {fetchcompare4,dispatchCompare} from '../../../../../redux/actions/compareAction'
import '../../../teacher/stats.css'

import BarChart from './BarChart'

function Sem4Graph(){
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
        const StudentLogin=localStorage.getItem('StudentLogin')
            fetchsem4(token,StudentLogin).then(res=>{
            dispatch(dispatchGetsem4(res))
        })
    },[token,dispatch])

    useEffect(()=>{
            fetchcompare4(token).then(res=>{
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
            <h1 align="center" style={{ color: 'white' }}>Semester IV</h1>
            <div>
                <BarChart/>
            </div>
        </div>
    )
}

export default Sem4Graph