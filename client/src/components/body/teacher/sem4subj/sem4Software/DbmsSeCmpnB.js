import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetchdbms,dispatchMarkssem4} from '../../../../../redux/actions/sem4marksAction'
import '../../marks.css'

const initialState = {
    dbms_t: '',
    dbms_u: '',
    dbms_i: '',
    err: '',
    success: ''
}

function DbmsSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem4} = marks

    const [emarks, setMarks] = useState(initialState)

    const {dbms_t, dbms_u ,dbms_i, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/dbmsedit', {pid, dbms_t, dbms_u, dbms_i},{
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
            fetchdbms(token,subject).then(res=>{
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
                    <input type="number" placeholder="Term" id="dbms_t"
                     name="dbms_t" onChange={handleChangeInput} min="0" max="80" defaultValue={data.dbms_t} required/>
                </td>
                <td>
                    <input type="number" placeholder="Unit" id="dbms_u"
                     name="dbms_u" onChange={handleChangeInput} min="0" max="20" defaultValue={data.dbms_u} required/>
                </td>
                <td>
                    <input type="number" placeholder="Internals" id="dbms_i"
                     name="dbms_i" onChange={handleChangeInput} min="0" max="50" defaultValue={data.dbms_i} required/>
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
                    <form action="/dbmschoice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B DBMS Marks</h1>
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

export default DbmsSeCmpnB