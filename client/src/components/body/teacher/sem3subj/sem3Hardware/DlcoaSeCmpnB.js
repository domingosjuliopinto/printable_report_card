import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetchdlcoa,dispatchMarkssem3} from '../../../../../redux/actions/sem3marksAction'
import '../../marks.css'

const initialState = {
    dlcoa_t: '',
    dlcoa_u: '',
    dlcoa_i: '',
    err: '',
    success: ''
}

function DlcoaSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem3} = marks

    const [emarks, setMarks] = useState(initialState)

    const {dlcoa_t, dlcoa_u ,dlcoa_i, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/dlcoaedit', {pid, dlcoa_t, dlcoa_u, dlcoa_i},{
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
        return fetchdlcoa(token,subject).then(res=>{
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
                    <input type="number" placeholder="Term" id="dlcoa_t"
                     name="dlcoa_t" onChange={handleChangeInput} min="0" max="80" defaultValue={data.dlcoa_t} required/>
                </td>
                <td>
                    <input type="number" placeholder="Unit" id="dlcoa_u"
                     name="dlcoa_u" onChange={handleChangeInput} min="0" max="20" defaultValue={data.dlcoa_u} required/>
                </td>
                <td>
                    <input type="number" placeholder="Internals" id="dlcoa_i"
                     name="dlcoa_i" onChange={handleChangeInput} min="0" max="25" defaultValue={data.dlcoa_i} required/>
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
                    <form action="/dlcoachoice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B DLCOA Marks</h1>
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

export default DlcoaSeCmpnB