import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetchminipro1,dispatchMarkssem3} from '../../../../../redux/actions/sem3marksAction'
import '../../marks.css'

const initialState = {
    minipro1_t: '',
    err: '',
    success: ''
}

function Minipro1SeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem3} = marks

    const [emarks, setMarks] = useState(initialState)

    const {minipro1_t, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/minipro1edit', {pid, minipro1_t},{
                headers: {Authorization: token}
            })

            setMarks({...emarks, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setMarks({...emarks, err: err.response.data.msg, success: ''})
        }
    }
    

    const dispatch = useDispatch()
    useEffect(()=>{
            fetchminipro1(token,subject).then(res=>{
            dispatch(dispatchMarkssem3(res))
        })
    },[token,subject,dispatch])

    const call = () =>{
        if(sem3){
            return(
            sem3.map(data => (
                <tr key={data._id}>
                <td>
                    <input type="number"  placeholder="PID" id="pid"
                     name="pid" defaultValue={data.pid} disabled/>
                </td>
                <td>
                    <input type="number" placeholder="Term" id="minipro1_t"
                     name="minipro1_t" onChange={handleChangeInput} min="0" max="50" defaultValue={data.minipro1_t} required/>
                </td>
                <td><button onClick={()=>handleClick(data.pid)}>Save</button></td>
                </tr>
            )
            ))
        }
    }

    return(
        <div>
            <div className='embox'>
                <div className="emback">
                    <form action="/minipro1choice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B Mini Project 1 Marks</h1>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className='Viewtable'>
                    <form>
                    <table>
                        <thead>
                            <tr>
                                <th>PID</th>
                                <th>Term</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            call()
                        }
                        </tbody>
                    </table>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Minipro1SeCmpnB