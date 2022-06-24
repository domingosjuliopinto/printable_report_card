import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsem3,dispatchGetsem3} from '../../../../../redux/actions/sem3marksAction'
import '../reportcard.css';

import Sem3Subject1 from './Sem3Subject1'
import Sem3Subject2 from './Sem3Subject2'
import Sem3Subject3 from './Sem3Subject3'
import Sem3Subject4 from './Sem3Subject4'
import Sem3Subject5 from './Sem3Subject5'
import Sem3Subject6 from './Sem3Subject6'
import Sem3Subject7 from './Sem3Subject7'
import Sem3Footer from './Sem3Footer'

function Sem3RC(){

    const auth = useSelector(state => state.auth)
    const {user} = auth
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
        const StudentLogin=localStorage.getItem('StudentLogin')
        return fetchsem3(token,StudentLogin).then(res=>{
            dispatch(dispatchGetsem3(res))
        })
    },[token,dispatch])

    return(
        <div>
            <div className="welback">
                <form action="/viewreport" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <div className="rcbox">
                <h1>III Semester Report Card</h1>
                <div className="Nametag">
                    <p>PID = {user.pid}</p>
                    <button onClick ={()=>window.print()}>Print</button>
                </div>
                <div className="Design">
                    <Sem3Subject1/>
                    <Sem3Subject2/>
                    <Sem3Subject3/>
                    <Sem3Subject4/>
                    <Sem3Subject5/>
                    <Sem3Subject6/>
                    <Sem3Subject7/>
                </div>
                <div className="Design2">
                    <Sem3Footer/>
                </div>
            </div>
        </div>
    )
}

export default Sem3RC