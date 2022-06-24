import React from 'react';
import '../home/home.css'

function SSemesters(){
    return ( 
        <div>
            <div className='hbox'>
                <div className="back">
                    <form action="/" method="get">
                        <input type="submit" value="Back"/>
                    </form>
                </div>
                <h1>Your Results</h1>
                <form action="/sem3report" method="get">
                    <input type="submit" value="Semester 3"/>
                </form>
                <form action="/sem4report" method="get">
                    <input type="submit" value="Semester 4"/>
                </form>
            </div>
        </div>
     );
}
 
export default SSemesters
