import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../../utils/notification/Notification'
import {isEmail, isMatch} from '../../../utils/validation/Validation'


const initialState = {
    name: '',
    email: '',
    pid:'',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function StRegister() {
    const [user, setUser] = useState(initialState)

    const {name, email, pid, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('http://localhost:5000/stregister', {
                name, email, pid, password
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div>               
            <div className="box">
                <div className="back">
                    <form action="/stlogin" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Student Register</h1>
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />                
 
                   
                    <input type="email" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />

                    <input type="number" placeholder="Enter PID" id="pid"
                    value={pid} name="pid" onChange={handleChangeInput} />    
               
                   
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />

                    
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                
                     <input type="submit" value="Register"/>
                </form>

                <div>
                    
                    <p>Already have an account? <Link to="/stlogin">Login</Link></p>
                </div>
                </div>
           
        </div>
    )
}

export default StRegister