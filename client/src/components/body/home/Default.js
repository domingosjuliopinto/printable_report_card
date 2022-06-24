import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css'

class Default extends Component {
    render() { 
        return ( 
            <div>
                <div className="home">
                    <h2>New to PRCV2 ?</h2>
                    <h4>Start by Registering </h4>
                    <button><Link to="/register">Teacher's Registration</Link></button>
                     &nbsp;
                    <button><Link to="/stregister">Student's Registration</Link></button>
                    <h2>Got an account?</h2>
                    <h4>Click on Login option at the top</h4>
                </div>
            </div>
         )
    }
}
 
export default Default;