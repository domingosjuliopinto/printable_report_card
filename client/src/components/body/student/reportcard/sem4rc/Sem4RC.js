import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsem4,dispatchGetsem4} from '../../../../../redux/actions/sem4marksAction'
import '../reportcard.css';

import Sem4Subject1 from './Sem4Subject1'
import Sem4Subject2 from './Sem4Subject2'
import Sem4Subject3 from './Sem4Subject3'
import Sem4Subject4 from './Sem4Subject4'
import Sem4Subject5 from './Sem4Subject5'
import Sem4Subject6 from './Sem4Subject6'
import Sem4Subject7 from './Sem4Subject7'
import Sem4Footer from './Sem4Footer'

function Sem4RC(){

    const auth = useSelector(state => state.auth)
    const {user} = auth
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
        const StudentLogin=localStorage.getItem('StudentLogin')
            fetchsem4(token,StudentLogin).then(res=>{
            dispatch(dispatchGetsem4(res))
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
                <h1>IV Semester Report Card</h1>
                <div className="Nametag">
                    <p>PID = {user.pid}</p>
                    <button onClick ={()=>window.print()}>Print</button>
                </div>
                <div className="Design">
                    <Sem4Subject1/>
                    <Sem4Subject2/>
                    <Sem4Subject3/>
                    <Sem4Subject4/>
                    <Sem4Subject5/>
                    <Sem4Subject6/>
                    <Sem4Subject7/>
                </div>
                <div className="Design2">
                    <Sem4Footer/>
                </div>
            </div>
        </div>
    )
}

export default Sem4RC