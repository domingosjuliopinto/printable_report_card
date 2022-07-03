import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../utils/notification/Notification'

function StActivationEmail() {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const handleClick = async () => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('http://localhost:5000/stactivation', {activation_token})
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }

    return (
        <div className="active_page">
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <button onClick={()=>handleClick()}>Activate</button>
        </div>
    )
}

export default StActivationEmail