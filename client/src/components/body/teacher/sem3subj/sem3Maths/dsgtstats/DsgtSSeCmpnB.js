import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchsdsgt,dispatchStatssem3} from '../../../../../../redux/actions/statsAction'
import '../../../stats.css'

import TopPass from './TopPass'
import Flex from './Flex'

function DsgtSSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()
    useEffect(()=>{
            fetchsdsgt(token,subject).then(res=>{
            dispatch(dispatchStatssem3(res))
        })
    },[token,subject,dispatch])

    return(
        <div>
            <div className="esback">
                <form action="/dsgtstats" method="get">
                    <input type="submit" value="Back"/>
                </form>
            </div>
            <h1 align="center" style={{ color: 'white' }}>DSGT SE CMPN B</h1>
            <div>
                <TopPass/>
                <Flex/>
            </div>
        </div>
    )
}

export default DsgtSSeCmpnB