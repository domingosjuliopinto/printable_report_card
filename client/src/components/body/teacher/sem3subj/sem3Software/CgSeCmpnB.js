import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../../utils/notification/Notification'
import {fetchcg,dispatchMarkssem3} from '../../../../../redux/actions/sem3marksAction'
import '../../marks.css'

const initialState = {
    cg_t: '',
    cg_u: '',
    cg_i: '',
    err: '',
    success: ''
}

function CgSeCmpnB(){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const subject = user.subject
    const token = useSelector(state => state.token)
    const marks = useSelector(state => state.marks)
    const {sem3} = marks

    const [emarks, setMarks] = useState(initialState)

    const {cg_t, cg_u ,cg_i, err, success} = emarks
    
    const handleChangeInput = e => {
        const {name, value} = e.target
        setMarks({...emarks, [name]:value, err: '', success: ''})
    }

    const handleClick = async (pid) => {
        try {
            const res = await axios.patch('http://localhost:5000/cgedit', {pid, cg_t, cg_u, cg_i},{
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
            fetchcg(token,subject).then(res=>{
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
                    <input type="number" placeholder="Term" id="cg_t"
                     name="cg_t" onChange={handleChangeInput} min="0" max="80" defaultValue={data.cg_t} required/>
                </td>
                <td>
                    <input type="number" placeholder="Unit" id="cg_u"
                     name="cg_u" onChange={handleChangeInput} min="0" max="20" defaultValue={data.cg_u} required/>
                </td>
                <td>
                    <input type="number" placeholder="Internals" id="cg_i"
                     name="cg_i" onChange={handleChangeInput} min="0" max="50" defaultValue={data.cg_i} required/>
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
                    <form action="/cgchoice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>SE CMPN B CG Marks</h1>
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

export default CgSeCmpnB