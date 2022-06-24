import React, {useState} from 'react'
import axios from 'axios'
import {isEmail} from '../../../utils/validation/Validation'
import {showErrMsg, showSuccessMsg} from '../../../utils/notification/Notification'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function StForgotPassword() {
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('http://localhost:5000/stforgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }

    const forgotPid = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('http://localhost:5000/prcv2/fpid', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }

    const forgotBoth = async () => {
        forgotPid()       
        forgotPassword()
    }
    
    return (
        <div className="fg_pass">
            <div className="back">
                <div className="translate1">
                    <form action="/stlogin" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
            </div>
            <h2>Forgot Your PID/Password?</h2>

            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="email">Student, Please Enter your email address</label>
                <input type="email" name="email" id="email" value={email}
                onChange={handleChangeInput} />
                <p>To Verify your email, click one of the options</p>
                <button onClick={forgotPassword}>Forgot Password</button>
                <button onClick={forgotPid}>Forgot Pid</button>
                <button onClick={forgotBoth}>Forgot Both</button>

            </div>
        </div>
    )
}

export default StForgotPassword