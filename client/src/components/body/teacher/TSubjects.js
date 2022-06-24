import React from 'react';
import {useSelector} from 'react-redux'
import '../home/home.css'

function TSubjects (){
    const auth = useSelector(state => state.auth)
    const {user} = auth

    const Mathsroute = () => {
        return (
            <div>
            <form action="/am3choice" method="get">
                <input type="submit" value="AM3"/>
            </form>
            <form action="/dsgtchoice" method="get">
                <input type="submit" value="DSGT"/>
            </form>
            <form action="/am4choice" method="get">
                <input type="submit" value="AM4"/>
            </form>
            </div>
        )
    }

    const Softwareroute = () => {
        return (
            <div>
            <form action="/cgchoice" method="get">
                <input type="submit" value="CG"/>
            </form>
            <form action="/dschoice" method="get">
                <input type="submit" value="DS"/>
            </form>
            <form action="/oopchoice" method="get">
                <input type="submit" value="OOP"/>
            </form>
            <form action="/dbmschoice" method="get">
                <input type="submit" value="DBMS"/>
            </form>
            <form action="/aoachoice" method="get">
                <input type="submit" value="AOA"/>
            </form>
            <form action="/ppchoice" method="get">
                <input type="submit" value="PP"/>
            </form>
            </div>
        )
    }

    const Hardwareroute = () => {
        return (
            <div>
            <form action="/dlcoachoice" method="get">
                <input type="submit" value="DLCOA"/>
            </form>
            <form action="/oschoice" method="get">
                <input type="submit" value="OS"/>
            </form>
            <form action="/micropchoice" method="get">
                <input type="submit" value="Microprocessor"/>
            </form>
            </div>
        )
    }

    const Projectsroute = () => {
        return (
            <div>
            <form action="/minipro1choice" method="get">
                <input type="submit" value="Mini Project 1"/>
            </form>
            <form action="/minipro2choice" method="get">
                <input type="submit" value="Mini Project 2"/>
            </form>
            </div>
        )
    }

    const Subject = ()=>{
        if(user.subject==='Maths'){
            return(Mathsroute())
        }else if(user.subject==='Software'){
            return(Softwareroute())
        }else if(user.subject==='Hardware'){
            return(Hardwareroute())
        }else if(user.subject==='Projects'){
            return(Projectsroute())
        }else{
            return(
                <div>
                    <h1>Teacher's Resources</h1>
                    <p>Access Denied</p>
                </div>
            )
        }
    }
    
        return (
            <div>
                <div className="hbox">
                    <div className="back">
                        <form action="/" method="get">
                            <input type="submit" value="Back"/>
                        </form>
                    </div>
                    <h1>Your Classes</h1>
                    {
                        Subject()
                    }
                </div>
            </div>
        );
}

export default TSubjects