import React from 'react';
import {useSelector} from 'react-redux'

function Home (){
    const auth = useSelector(state => state.auth)
    const {user} = auth
    const StudentLogin=localStorage.getItem('StudentLogin')

    const Sturoute = () => {
        return (
            <div>
                <form action="/viewreport" method="get">
                    <input type="submit" value="Report Cards"/>
                </form>
                <form action="/viewstgraphs" method="get">
                    <input type="submit" value="Graphical Status"/>
                </form>
            </div>
        )
    }

    const Teacherroute = () => {
        return (
            <div>
                <form action="/entermarks" method="get">
                    <input type="submit" value="Enter Marks"/>
                </form>
                <form action="/viewstats" method="get">
                    <input type="submit" value="View Statistics"/>
                </form>
                <form action="/viewgraphs" method="get">
                    <input type="submit" value="View Graphs"/>
                </form>
            </div>
        )
    }
    
        return (
             <div className="hbox">
                 <h1>Welcome {user.name}</h1>
                 {
                     StudentLogin?Sturoute():Teacherroute()
                 }
             </div>
        );
}

export default Home