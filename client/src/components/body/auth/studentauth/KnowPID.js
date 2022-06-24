import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../../../utils/notification/Notification'


const initialState = {
    err: '',
    success: ''
}

function KnowPID() {
    const [data, setData] = useState(initialState)
    const {ktoken} = useParams()

    const {err, success} = data

    const handleknowpid = async () => {
        
        try {
            const res = await axios.post('http://localhost:5000/kpid',null,{
                headers: {Authorization: ktoken}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        <div className="fg_pass">
            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}    

                <button onClick={handleknowpid}>Click to know your PID</button>
            </div>
        </div>
    )
}

export default KnowPID