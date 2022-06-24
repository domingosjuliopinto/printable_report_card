import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetcham3,dispatchMarkssem3} from '../../../../../redux/actions/sem3marksAction'
import '../../marks.css'

const initialState = {
    am3_t: '',
    am3_u: '',
    am3_i: '',
    err: '',
    success: ''
}

function Am3SeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem3} = marks

    const [emarks, setMarks] = useState(initialState)

    const {am3_t, am3_u ,am3_i, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/am3edit', {pid, am3_t, am3_u, am3_i},{
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
        return fetcham3(token,subject).then(res=>{
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
                    <input type="number" placeholder="Term" id="am3_t"
                     name="am3_t" onChange={handleChangeInput} min="0" max="80" defaultValue={data.am3_t} required/>
                </td>
                <td>
                    <input type="number" placeholder="Unit" id="am3_u"
                     name="am3_u" onChange={handleChangeInput} min="0" max="20" defaultValue={data.am3_u} required/>
                </td>
                <td>
                    <input type="number" placeholder="Internals" id="am3_i"
                     name="am3_i" onChange={handleChangeInput} min="0" max="25" defaultValue={data.am3_i} required/>
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
                    <form action="/am3choice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B AM3 Marks</h1>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className='Viewtable'>
                    <form>
                    <table>
                        <thead>
                            <tr>
                                <th>PID</th>
                                <th>Term</th>
                                <th>Unit</th>
                                <th>Internals</th>
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

export default Am3SeCmpnB