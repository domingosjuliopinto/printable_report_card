import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmail, isMatch} from '../../utils/validation/Validation'


const initialState = {
    name: '',
    email: '',
    subject:'Maths',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {name, email, subject, password,cf_password, err, success} = user

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
            const res = await axios.post('http://localhost:5000/register', {
                name, email, subject, password
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
                    <form action="/login" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Teacher Register</h1>
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />                
 
                   
                    <input type="email" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />

                    <select name="subject" id="subject" value={subject} onChange={handleChangeInput}>
                        <option name="Maths">Maths</option>
                        <option name="Software">Software</option>
                        <option name="Hardware">Hardware</option>
                        <option name="Projects">Projects</option>
                    </select>     
               
                   
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />

                    
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                
                     <input type="submit" value="Register"/>
                </form>

                <div>   
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default Register