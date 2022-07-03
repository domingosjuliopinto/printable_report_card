import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetchaoa,dispatchMarkssem4} from '../../../../../redux/actions/sem4marksAction'
import '../../marks.css'

const initialState = {
    aoa_t: '',
    aoa_u: '',
    aoa_i: '',
    err: '',
    success: ''
}

function AoaSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem4} = marks

    const [emarks, setMarks] = useState(initialState)

    const {aoa_t, aoa_u ,aoa_i, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/aoaedit', {pid, aoa_t, aoa_u, aoa_i},{
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
            fetchaoa(token,subject).then(res=>{
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
                    <input type="number" placeholder="Term" id="aoa_t"
                     name="aoa_t" onChange={handleChangeInput} min="0" max="80" defaultValue={data.aoa_t} required/>
                </td>
                <td>
                    <input type="number" placeholder="Unit" id="aoa_u"
                     name="aoa_u" onChange={handleChangeInput} min="0" max="20" defaultValue={data.aoa_u} required/>
                </td>
                <td>
                    <input type="number" placeholder="Internals" id="aoa_i"
                     name="aoa_i" onChange={handleChangeInput} min="0" max="50" defaultValue={data.aoa_i} required/>
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
                    <form action="/aoachoice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B AOA Marks</h1>
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

export default AoaSeCmpnB