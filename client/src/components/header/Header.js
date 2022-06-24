import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Header(){
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:5000/logout')
            localStorage.removeItem('firstLogin')
            localStorage.removeItem('StudentLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const transForm = {
        transform: isLogged ? "translateX(-45px)" : "translateX(-25px)"
    }

    const userLink = () => {
        return (<ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/profile">{user.name}</Link> </li>
            <li><Link to="/" onClick={handleLogout}>Logout</Link></li>   
        </ul>
        )
    }

    return(
        <header>
            <div className="logo">
                <h1>Printable Report Card V2</h1>
            </div>
            <ul style={transForm}>
                {
                    isLogged ? userLink() :<li><Link to="/loginchoice">Login</Link></li>
                }          
            </ul>
        </header>

    )
}

export default Header