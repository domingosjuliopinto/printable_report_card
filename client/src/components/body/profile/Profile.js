import React, {useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {isMatch} from '../../utils/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const {user} = auth
    const [data, setData] = useState(initialState)
    const {name, password, cf_password, err, success} = data
    const StudentLogin=localStorage.getItem('StudentLogin')

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

    const updateInfor = () => {
        try {
            if(StudentLogin){
                axios.patch('http://localhost:5000/stupdate', {
                    name: name ? name : user.name,
                },{
                    headers: {Authorization: token}
                })
            }else{
                axios.patch('http://localhost:5000/update', {
                    name: name ? name : user.name,
                },{
                    headers: {Authorization: token}
                })
            }

            setData({...data, err: '' , success: "Update Success! Refresh Page to See Effect"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updatePassword = () => {

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
            if(StudentLogin){
                axios.post('http://localhost:5000/streset', {password},{
                    headers: {Authorization: token}
                })
            }else{
                axios.post('http://localhost:5000/reset', {password},{
                    headers: {Authorization: token}
                })
            }

            setData({...data, err: '' , success: "Update Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(password) updatePassword()
    }

    const handleNUpdate = () => {
        if(name) updateInfor()
    }

    const subj = () => {
        return (
            <div className="form-group">
                    <label htmlFor="subject">Department</label>
                    <input type="text" name="subject" id="subject" defaultValue={user.subject}
                    placeholder="Your subject" disabled />
                </div>
        )
    }

    const pid = () => {
        return (
            <div className="form-group">
                    <label htmlFor="pid">PID</label>
                    <input type="number" name="pid" id="pid" defaultValue={user.pid}
                    placeholder="Your pid" disabled />
                </div>
        )
    }

    return (
        <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
         <div className="profile_page">    
             <div className="col-left">
                <h2> User Profile</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" defaultValue={user.name}
                    placeholder="Your name" onChange={handleChange} />
                </div>
                <button onClick={handleNUpdate}>Save</button> 

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" defaultValue={user.email}
                    placeholder="Your email address" disabled />
                </div>
                {
                    StudentLogin?pid():subj()
                }
                
               
            </div>
            <div className="col-right">
            <h2> Want to Change <br></br> your Password ?</h2>
            <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input type="password" name="password" id="password"
                    placeholder="Your password" value={password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="cf_password">Confirm New Password</label>
                    <input type="password" name="cf_password" id="cf_password"
                    placeholder="Confirm password" value={cf_password} onChange={handleChange} />
                </div>
                <button onClick={handleUpdate}>Update</button> 

            </div>
         </div>
        </div>
    )
}

export default Profile