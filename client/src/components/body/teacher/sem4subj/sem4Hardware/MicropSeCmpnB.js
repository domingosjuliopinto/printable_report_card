import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetchmicrop,dispatchMarkssem4} from '../../../../../redux/actions/sem4marksAction'
import '../../marks.css'

const initialState = {
    microp_t: '',
    microp_u: '',
    microp_i: '',
    err: '',
    success: ''
}

function MicropSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem4} = marks

    const [emarks, setMarks] = useState(initialState)

    const {microp_t, microp_u ,microp_i, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/micropedit', {pid, microp_t, microp_u, microp_i},{
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
        return fetchmicrop(token,subject).then(res=>{
            dispatch(dispatchMarkssem4(res))
        })
    },[token,subject,dispatch])

    const call = () =>{
        if(sem4){
            return(
            sem4.map(data => (
                <tr key={data._id}>
                <td>
                    <input type="number"  placeholder="PID" id="pid"
                     name="pid" defaultValue={data.pid} disabled/>
                </td>
                <td>
                    <input type="number" placeholder="Term" id="microp_t"
                     name="microp_t" onChange={handleChangeInput} min="0" max="80" defaultValue={data.microp_t} required/>
                </td>
                <td>
                    <input type="number" placeholder="Unit" id="microp_u"
                     name="microp_u" onChange={handleChangeInput} min="0" max="20" defaultValue={data.microp_u} required/>
                </td>
                <td>
                    <input type="number" placeholder="Internals" id="microp_i"
                     name="microp_i" onChange={handleChangeInput} min="0" max="25" defaultValue={data.microp_i} required/>
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
                    <form action="/micropchoice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B Microprocessor Marks</h1>
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

export default MicropSeCmpnB