import React, { Component } from 'react';
import './auth/auth.css'

class Loginchoice extends Component {
  render() { 
    return ( 
        <div>
            <div className = 'box'>
            <div className="back">
                    <form action="/" method="get">
                        <input type="submit" value="Home"/>
                    </form>
            </div>
            <h1>Login</h1>
                <form action="login" method="get">
                    <input type="submit" value="Teacher"/>
                </form>
                <form action="stlogin" method="get">
                    <input type="submit" value="Student "/>
                </form>
            </div>
        </div>
     );
  }
}
 
export default Loginchoice;