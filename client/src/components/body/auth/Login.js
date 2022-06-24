import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login(){
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useNavigate()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})

           localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }


    return (
        <div>        
            <div className="box">
                <div className="back">
                    <form action="/loginchoice" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Teacher Login</h1> 
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    <input type="email" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                

                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                
                     <input type="submit" value="Login"/>
                </form>
                <div className="row">
                    <Link to="/forgot_password">Forgot your password?</Link>
                    <p>New Teacher? <Link to="/register">Register</Link></p>
                </div>
            </div>
            
        </div>
    )
}

export default Login